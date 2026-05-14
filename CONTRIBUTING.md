# Contributing

This document is the editorial style guide for writing annotations. It tells you — and any collaborator, and any AI assistant generating drafts — what the template requires, what the tone should be, and what kinds of citations to prefer.

## Before you start

Read the two reference annotations end to end:

- `content/annotations/apostles-creed/11-and-was-buried.md` (the floor)
- `content/annotations/apostles-creed/12-descended-into-hell.md` (the ceiling)

These define the template. Copy one as your starting point and edit. Do not start from a blank file.

## The annotation template

Every annotation has the same top-level shape. Sections are present only when they have something to say; an empty section is not rendered. Drop any section you have nothing meaningful to add to — but ask yourself first whether the absence is itself information (see "Naming silence" below).

1. **Title** — H1, the phrase as displayed
2. **Identity block** — document / section / order, set in frontmatter, rendered at the top of the page
3. **The Text** — source languages and translation table
4. **Translation Notes** — what the original actually says; where translations diverge and why
5. **Historical Context** — what controversy or pastoral need this phrase was answering
6. **Lines of Interpretation** — 2–4 traditions of reading, each with strengths and weaknesses
7. **Wesleyan Voice** — its own section, always present
8. **Hymnody** — its own section when warranted; otherwise omitted, or folded into Wesleyan Voice as a paragraph
9. **Pastoral and Liturgical Use** — a congregation has just prayed this; what are they saying?
10. **Further Reading** — primary sources first

## Tone

The reader is a literate adult who may or may not have formal theological training. They have just prayed the creed at a Sunday service and want to know more. They are not being argued with. They are being shown what the tradition has said, with the warts and the wonders, and trusted to draw their own conclusions.

Specifically:

- **Calm, not breathless.** No exclamation points. No "remarkably." No "stunningly."
- **Confident, not hedged.** Where the tradition is clear, say so. Where it is contested, say so. Do not split every difference.
- **Pastoral, not polemical.** This is a reference for those who pray the words, not a battleground.
- **Honest about weakness.** Every interpretive tradition gets a "weaknesses" list. If you cannot name two real weaknesses in a position, you have not understood it well enough to write about it yet.

## Primary sources first

Further Reading is weighted toward primary texts: the Fathers, the conciliar documents, Aquinas, Luther, Calvin, Wesley's own works, Charles Wesley's hymns, the Articles of Religion in their various editions. Modern secondary literature appears when it is genuinely indispensable — Pitstick on Balthasar, Maddox on Wesley's practical theology, Bauckham on the eyewitness question — not as a default.

A useful test: if a contemporary scholar's name appears in Further Reading, can you also point to a primary source that does similar work? If yes, the modern citation earns its place. If no, ask whether it earns its place by being indispensable or merely by being recent.

## Citation style

Inline references in prose:

- Patristic: *Author, Work* (date or section), e.g., Rufinus, *Commentary on the Apostles' Creed* (c. 404)
- Scholastic: Aquinas, *Summa Theologiae* III, q. 52, a. 1
- Reformation: Calvin, *Institutes* II.16.8; Luther, *Smalcald Articles* II.1
- Wesley: Wesley, *Explanatory Notes upon the New Testament* on 1 Pet 3:19; Wesley, "On Sin in Believers" §III.7
- Charles Wesley hymns: title, year, and where they appear in the 1780 *Collection*

In Further Reading: include enough bibliographic information that the reader can find the source. For patristic texts, cite a standard edition (NPNF, ANF, SC) where useful.

## Naming silence

If a tradition is silent on a clause, name the silence and ask why. Wesley silently dropping Article III in 1784 is more interesting than any commentary he could have written. The 1780 *Collection* having no hymn on the burial is more interesting than a workmanlike treatment would have been. Negative evidence is evidence.

## The Wesleyan Voice section

This section is always present. It tells the reader where Wesley himself, the Articles of Religion, contemporary Methodist theology, and the Methodist liturgical tradition land on the clause.

Look for material in:

- John Wesley, *Explanatory Notes upon the New Testament*
- John Wesley, *Sermons* (especially the 44 / 53 Standard Sermons)
- John Wesley, his Journal, where it bears on a clause
- The Articles of Religion (1784) and the 39 Articles Wesley was abridging — what did he keep, what did he cut, what did he silently modify?
- Charles Wesley's hymns (see below)
- Contemporary Methodist systematic theology: Thomas Oden, Randy Maddox, Kenneth Collins, Theodore Runyon, Albert Outler, where genuinely useful
- The *United Methodist Hymnal* (1989) and its predecessors — what translation choices were made and what do they signal?

When Wesley is silent, name it. "Wesley does not treat this clause directly" is a complete sentence and an honest one.

## The Hymnody section

Charles Wesley wrote roughly 6,000 hymns; together with John they shaped Methodist doctrinal formation through singing more than through preaching. Where a clause has substantial hymnic treatment, this gets its own section. Where it does not, this is itself information and is often best noted as a sentence inside Wesleyan Voice.

Primary sources:

- *A Collection of Hymns for the Use of the People Called Methodists* (1780) — John Wesley's selection, with his preface calling it "a little body of experimental and practical divinity"
- *Hymns and Sacred Poems* (1739, 1740, 1742) — the Wesley brothers' earlier collections
- *Hymns on the Lord's Supper* (1745)
- The standard scholarly edition: *The Bicentennial Edition of the Works of John Wesley*, vol. 7 (Kingswood / Abingdon)

When citing a hymn:

- Give title, year, and where it appears in the 1780 *Collection* if relevant
- Quote at most one short stanza (under 15 words is safest for fair use; never reproduce more than is strictly necessary)
- Paraphrase or describe rather than quote at length

## The Strengths / Weaknesses pattern

Every interpretive tradition entry has both. Follow the Difficult Passages model:

```markdown
### Reformation — Reformed

**Tradition:** Calvin, *Institutes* II.16.8–12; Heidelberg Catechism Q.44

[prose body, 1–3 paragraphs]

**Strengths**
- [bullet]
- [bullet]

**Weaknesses**
- [bullet]
- [bullet]
```

Strengths and weaknesses are bullet points, two to four each. Each bullet is one sentence or one well-shaped phrase. Avoid hedging language like "some might argue."

## Length

The two reference annotations bracket the range:

- **Floor** (~1,000 words): well-settled clause, brief translation note, one or two interpretive traditions, short Wesleyan section. Example: "and was buried."
- **Ceiling** (~2,500 words): contested clause, full translation history, four interpretive traditions, substantive Wesleyan section, hymnody as its own section. Example: "he descended into hell."

Most annotations will land between 1,200 and 1,800 words. Resist the impulse to pad a well-settled clause to look thorough. Resist the impulse to truncate a contested clause to stay symmetric. Length follows substance.

## Frontmatter

See `src/content/config.ts` for the Zod schema. Every annotation must include:

- `document` — slug for the parent (e.g., `apostles-creed`)
- `section` — optional sub-section slug (e.g., `second-article`)
- `phrase_slug` — the URL slug, kebab-case
- `order` — position in the creed; integer
- `phrase_display` — the canonical English form of the phrase, used by the spine page to render the creed
- `contested` — `low`, `medium`, or `high`
- `traditions` — list of tags for interpretive coverage
- `sections` — list of which template sections are present, for clean skipping
- `related` — list of `document/phrase-slug` paths for cross-references

Source-language text (`latin`, `greek`) goes in frontmatter so it can be rendered in the page header; the `translations` array is also frontmatter so the renderer can produce the translation table.

Substantive prose — Translation Notes, Historical Context, Lines of Interpretation, etc. — goes in the markdown body. Do not duplicate body content in frontmatter.

The build will fail if the frontmatter is malformed. This is by design.

## File naming

```
content/annotations/<document-slug>/<order>-<phrase-slug>.md
```

The numeric prefix preserves order on the filesystem and makes navigation predictable. Use two digits (`01`, `02`, … `25`) for documents with ≤ 99 phrases; three digits if a document ever exceeds that. Pad consistently within a document.

## Linking

Cross-references between annotations are declared in `related` in frontmatter and resolved at build time. Do not write inline `<a href="...">` links between annotations in the markdown body; let the build do it.

Inline external links (to Internet Archive scans, Christian Classics Ethereal Library, etc.) are written in the markdown body as normal links.

## What does not belong

- Original arguments. This is a reference; if a position is not already in the tradition, do not invent it.
- Devotional padding. The annotations are pastoral but not devotional; they describe what is prayed, they do not pray.
- Apologetics. Strengths and weaknesses are descriptive, not advocacy.
- Footnotes. Inline citation is enough; Further Reading does the rest.
- Long quotations from copyrighted material. Paraphrase. Where a direct quotation is essential, keep it under 15 words and attribute it.

## Workflow

1. Pick the next clause in the document you're working on (per the writing order in `README.md`).
2. Copy one of the two reference annotations to the new file path.
3. Fill in frontmatter.
4. Write the body, section by section, in template order.
5. Run the build locally; the Zod schema will tell you about frontmatter problems.
6. Read it out loud once before committing. If a sentence cannot survive being read aloud in a sanctuary, rewrite it.
