// Reading paths: a curated order through the corpus's /brief pages for a
// specific audience, with one sentence of "why" per stop. Generic mechanism —
// add a guide here and it renders at /guides/<slug> and appears in the
// /guides index, with no page code to touch.
//
// Each entry's `document` must be a live slug in the `documents` collection;
// the page build resolves title/subtitle from there so this file never goes
// stale on a rename.

export interface GuideEntry {
  document: string; // documents collection slug
  why: string; // one sentence: why this document, at this point in the path
}

export interface Guide {
  slug: string;
  title: string;
  audience: string; // who this path is for, shown as a short standfirst
  intro: string; // 1-2 sentences of context
  entries: GuideEntry[];
}

export const guides: Guide[] = [
  {
    slug: 'lay-servant',
    title: 'For Lay Servant Ministries',
    audience: 'A reading path for the Lay Servant Ministries Basic Course',
    intro:
      "Three documents from the corpus, each landing near a session of the Basic Course. None of this replaces the course's own curriculum — these are companion readings for anyone who wants a little more ground under their feet, in the plain-language “brief” register rather than the full scholarly annotation.",
    entries: [
      {
        document: 'apostles-creed',
        why: "Session 1, Ministry of the Baptized, starts with what your baptism already declared. The Apostles' Creed is the oldest plain statement of that faith — read it as the thing you were claimed by, not a test to pass.",
      },
      {
        document: 'general-rules',
        why: 'Session 2, Leading, and the General Rules are close to the same document in two forms. This is the actual rule of life a lay servant is stepping into — one condition to get in, and three plain rules for staying: do no harm, do good, attend the ordinances of God.',
      },
      {
        document: 'articles-of-religion',
        why: "By Session 5, Into the World, you may be the only theologically-trained voice some people ever talk to. The Articles are Wesley's own abridgment of what the church believes — worth knowing plainly before you're the one explaining it.",
      },
    ],
  },
];

export function guideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
