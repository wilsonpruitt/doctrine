# Creeds & Confessions

An annotated reference for the Great Christian Tradition and the Wesleyan Tradition.

This project presents the historic creeds of the Church — together with foundational Wesleyan documents — as fully annotated texts in the spirit of Genius-style line-by-line commentary. The creed is the spine; each phrase is a door into translation history, controversy, interpretation across traditions, and pastoral use.

A companion to [Difficult Passages](https://difficult-passages.netlify.app).

## What this is

A pastoral and theological reference for those who pray the creeds and want to know what they are praying. Every phrase is annotated with:

- Source-language text (Latin, Greek, where applicable) with variant readings
- Major English translations side-by-side
- Translation notes
- Historical context — what was the phrase added to answer?
- Lines of interpretation across traditions (patristic, scholastic, Reformation, Wesleyan, modern)
- A dedicated **Wesleyan Voice** section
- A dedicated **Hymnody** section where the hymnic tradition is doing meaningful doctrinal work
- Pastoral and liturgical use
- Further reading, weighted toward primary sources

## What this is not

- An apologetic. The annotations present what the tradition has said, with strengths and weaknesses, not what the reader must conclude.
- Exhaustive. Always growing.
- A theological textbook. Annotations are written for someone who has just prayed the creed at a Sunday service and wants to know more.

## Corpus

### Ecumenical Creeds
- The Apostles' Creed
- The Nicene Creed (Constantinopolitan, 381) — with notes on the *filioque*
- The Athanasian Creed (*Quicunque Vult*)

### Wesleyan Tradition
- Wesley's General Rules (1743)
- The Articles of Religion (Wesley's 1784 abridgment of the Thirty-Nine Articles for the American Methodists)

## Editorial principles

1. **Primary sources first.** Further Reading is weighted toward the texts themselves — Rufinus, Augustine, Aquinas, Calvin, Wesley, conciliar documents, Charles Wesley's hymns — rather than modern secondary literature. Modern works appear when they are genuinely indispensable.
2. **Wesleyan voice as its own section.** Not folded into a list of "traditions." This is a Wesleyan project; the Wesleyan reading is named and given room.
3. **Hymnody when warranted.** Charles Wesley's hymns are treated as a parallel doctrinal corpus. The 1780 *Collection of Hymns for the Use of the People Called Methodists* is a recurring source. Where hymnic treatment is thin or absent, that absence is itself information and is named.
4. **Granular.** Annotations are per-phrase, not per-article — except for the Articles of Religion, where per-article is the natural unit and Wesley's editorial choices are themselves the interesting content.
5. **Strengths and weaknesses, named honestly.** Following the Difficult Passages pattern. Every interpretive tradition gets its case and its counter-case.
6. **Pastoral, not polemical.** A congregation has just prayed this. What are they saying?

## Site structure

```
/                                          → landing
/creeds                                    → index of ecumenical creeds
/wesleyan                                  → index of Wesleyan documents
/about                                     → this project

/creeds/apostles-creed                     → spine (full creed, every phrase tappable)
/creeds/apostles-creed/about               → essay on the document
/creeds/apostles-creed/descended-into-hell → annotation page

/wesleyan/general-rules                    → spine
/wesleyan/general-rules/do-no-harm         → annotation
/wesleyan/articles-of-religion             → spine
/wesleyan/articles-of-religion/article-ii  → annotation per article
```

## The spine

Each creed has a top-level page that displays the full text, phrase by phrase, with every annotated phrase tappable. The spine is generated from the frontmatter of the annotation files (the `phrase_display` field), so the creed text is not maintained in two places.

Phrases are visually weighted by their `contested` level — `high` (well-attested controversy across traditions), `medium`, or `low` (well-settled but worth reading) — so the reader sees at a glance which phrases are doors and which are walls.

## Content model

Annotations are markdown files with structured YAML frontmatter. See `CONTRIBUTING.md` for the full template and editorial style guide. See `src/content/config.ts` for the Astro content collection schema (Zod) that validates every file at build time.

Two reference annotations live in `content/annotations/apostles-creed/`:
- `11-and-was-buried.md` — the floor of the template (short, well-settled clause)
- `12-descended-into-hell.md` — the ceiling (long, highly contested clause with rich Wesleyan reception)

New annotations should copy one of these as a starting point.

## Stack

- Astro with content collections
- MDX for annotations
- Static export
- Hosted on Netlify

## Writing order

For coherence and speed, annotations should be written in document-sequence rather than picked at random:

1. **Apostles' Creed** complete, end to end
2. **Nicene Creed** — most clauses now have an Apostles' parallel to cross-reference
3. **General Rules**
4. **Athanasian Creed**
5. **Articles of Religion**

## Project name

Working title only. Suggestions welcome.

## License

Content: TBD (likely CC BY-NC 4.0).
Code: MIT.
