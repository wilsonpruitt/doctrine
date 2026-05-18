// src/content/config.ts
//
// Astro content collections schema for the Creeds & Confessions project.
// This validates the frontmatter of every annotation and document at build time.
// If a file's frontmatter does not match the schema, the build fails loudly —
// which is the point.
//
// See CONTRIBUTING.md for the editorial conventions; this file is just the
// machine-readable enforcement layer.

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ---------------------------------------------------------------------------
// Shared sub-schemas
// ---------------------------------------------------------------------------

const latinVariantSchema = z.object({
  text: z.string(),
  note: z.string().optional(),
});

const translationSchema = z.object({
  version: z.string(),       // e.g. "Book of Common Prayer (1662)"
  text: z.string(),          // the rendered phrase in that version
  note: z.string().optional() // optional gloss (e.g. "both traditional and ecumenical forms")
});

// Interpretive tradition tags used on annotation pages.
// Keep this list short and meaningful; add tags as the corpus warrants,
// not preemptively. Extend in PRs that actually need the new tag.
const traditionEnum = z.enum([
  'patristic',
  'scholastic',
  'lutheran',
  'reformed',
  'anglican',
  'roman_catholic',
  'eastern_orthodox',
  'anabaptist',
  'wesleyan',
  'modern_ecumenical',
  'liberation',
  'evangelical',
]);

// Which sections of the standard template are present in this annotation.
// The renderer reads this list and skips empty sections cleanly.
const sectionEnum = z.enum([
  'translation_notes',
  'historical_context',
  'interpretation',
  'wesleyan_voice',
  'hymnody',
  'pastoral_use',
  'further_reading',
]);

// "How contested is this clause across the tradition?"
// Drives visual weight on the spine page. See README "The spine."
const contestedEnum = z.enum(['low', 'medium', 'high']);

// Slugs of the documents in the corpus. Add to this enum when a new
// document is added (and only then — typos in `document` should fail the build).
const documentEnum = z.enum([
  'apostles-creed',
  'nicene-creed',
  'athanasian-creed',
  'general-rules',
  'articles-of-religion',
]);

// ---------------------------------------------------------------------------
// Annotations collection
// ---------------------------------------------------------------------------
//
// One file per annotated phrase. Lives at:
//   content/annotations/<document-slug>/<order>-<phrase-slug>.md
//
// The body of the file is the prose; the frontmatter below is structured.

// Localization. English is the source; es/fr/pt/sw are translations.
// `lang` defaults to 'en' so every existing source file validates untouched.
const langEnum = z.enum(['en', 'es', 'fr', 'pt', 'sw']);
// Provenance of a translated file. Source English is 'source'.
// Machine drafts are flagged until a native speaker reviews them.
const translationStatusEnum = z.enum([
  'source',
  'machine-draft',
  'native-reviewed',
]);

const annotations = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/annotations' }),
  schema: z.object({

    // --- Localization -------------------------------------------------------
    lang: langEnum.default('en'),
    translation_status: translationStatusEnum.default('source'),
    // True when the creed/document text or apparatus could not be verified
    // against an official received translation and needs a native reviewer.
    needs_native_review: z.boolean().default(false),


    // --- Identity -----------------------------------------------------------

    document: documentEnum,
    section: z.string().optional(),            // e.g. "second-article"; optional sub-grouping
    phrase_slug: z.string(),                   // kebab-case URL slug
    order: z.number().int().nonnegative(),     // position within the document
    phrase_display: z.string(),                // canonical English form, used by the spine page

    // --- Source languages ---------------------------------------------------
    //
    // Both `latin` and `greek` are optional because some documents only have
    // one (the Apostles' Creed is Latin-only; the original Nicene is Greek).
    // Variants capture meaningful textual divergence in the source language.

    latin: z.string().optional(),
    latin_variants: z.array(latinVariantSchema).optional(),
    latin_note: z.string().optional(),

    greek: z.string().optional(),
    greek_variants: z.array(latinVariantSchema).optional(),
    greek_note: z.string().optional(),

    // Reserved for documents in English originally (General Rules, Articles
    // of Religion). The "original" then is a particular edition, e.g.
    // "1743 Nature, Design, and General Rules of the United Societies."
    original_english: z.string().optional(),
    original_english_note: z.string().optional(),

    // --- Translations -------------------------------------------------------
    //
    // Rendered as a side-by-side table in the page header. Order matters:
    // put the canonical / most-recognized rendering first. The renderer
    // does not re-sort.

    translations: z.array(translationSchema).min(1),

    // --- Section presence ---------------------------------------------------
    //
    // Which template sections this annotation includes. Lets the renderer
    // skip empty headers cleanly. See CONTRIBUTING.md for which to use.

    sections: z.array(sectionEnum).min(1),

    // --- Interpretive coverage ---------------------------------------------

    traditions: z.array(traditionEnum).default([]),

    // --- Cross-references --------------------------------------------------
    //
    // Paths of related annotations, given as "<document>/<phrase_slug>".
    // The build resolves these and renders a "Related" block; broken refs
    // fail the build.

    related: z.array(z.string()).default([]),

    // --- Lay-reader abstract -----------------------------------------------
    //
    // Optional "What it says" on-ramp rendered above the scholarly body.
    // Hand-written per annotation in a plainer, pastoral register: a one-line
    // plain-language gloss of the phrase, then three short beats. Optional so
    // the build never breaks on un-backfilled entries; the renderer skips it
    // cleanly when absent.

    abstract: z
      .object({
        gloss: z.string(),    // one sentence: what the phrase means, plainly
        stake: z.string(),    // what is at stake here
        matters: z.string(),  // why it matters pastorally
        wesleyan: z.string(), // the Wesleyan take, in brief
      })
      .optional(),

    // --- Editorial metadata ------------------------------------------------

    contested: contestedEnum,
    word_count: z.number().int().positive().optional(), // auto-filled by a build hook
    last_updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),

  }),
});

// ---------------------------------------------------------------------------
// Documents collection
// ---------------------------------------------------------------------------
//
// One file per creed or confessional document. The "About this document"
// essay — origin, dating, function in worship, why it matters. Lives at:
//   content/documents/<document-slug>.md

const documents = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/documents' }),
  schema: z.object({
    slug: documentEnum,
    lang: langEnum.default('en'),
    translation_status: translationStatusEnum.default('source'),
    needs_native_review: z.boolean().default(false),
    title: z.string(),                    // "The Apostles' Creed"
    subtitle: z.string().optional(),      // "Symbolum Apostolorum"
    date: z.string(),                     // free-form, e.g. "Old Roman Symbol c. 215; Textus Receptus c. 750"
    family: z.enum(['ecumenical', 'wesleyan']),
    summary: z.string(),                  // one-sentence description for the index page
    order: z.number().int().nonnegative(),
    draft: z.boolean().default(false),
  }),
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export const collections = {
  annotations,
  documents,
};
