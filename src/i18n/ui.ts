// Localized UI strings and label maps.
//
// English is the source. Other locales are translations of the editorial
// chrome only — the creed/document text and the annotation prose live in the
// content collections, not here. Keep the `en` block byte-identical to the
// strings the original (unprefixed) routes hardcoded, so English output never
// shifts when a route reads from this module.

export type Locale = 'en' | 'es' | 'fr' | 'pt' | 'sw';

// Locales served under a /<lang>/ prefix (English stays unprefixed).
// getStaticPaths runs hoisted, so route files import this rather than
// declaring it in component scope.
export const TRANSLATED_LOCALES: Locale[] = ['es', 'fr', 'pt', 'sw'];

export interface UIStrings {
  bannerDraft: string;
  bannerReviewed: string;
  brand: string;
  navCreeds: string;
  navAbout: string;
  footer: { lead: string; difficultPassages: string };

  crumbDoctrine: string;
  crumbCreeds: string;
  crumbWesleyan: string;
  crumbInBrief: string;
  crumbAbout: string;

  briefCta: string;
  spineLegendLead: string;
  contested: Record<'high' | 'medium' | 'low', string>;
  contestedSwatch: Record<'high' | 'medium' | 'low', string>;

  abstractLabel: string;
  abstractStake: string;
  abstractMatters: string;
  abstractWesleyan: string;

  srcLatin: string;
  srcGreek: string;
  srcOriginalEnglish: string;
  srcVariant: string;

  tableVersion: string;
  tableRendering: string;

  traditionsCited: string;
  related: string;

  prev: string;
  next: string;
  tocLabel: string;
  tocBackToSpine: string;

  briefTitleSuffix: string;
  briefIntro: string;
  briefSeeFullCreed: string;
  briefSeeFullDocument: string;
  briefReadFull: string;
}

const en: UIStrings = {
  bannerDraft:
    'Machine-assisted translation, pending review by a native speaker. The English is the authoritative text.',
  bannerReviewed:
    'Translation reviewed by a native speaker. The English remains the authoritative text.',
  brand: 'Doctrine',
  navCreeds: 'Creeds',
  navAbout: 'About',
  footer: {
    lead: 'A Wroot Press reference companion to',
    difficultPassages: 'Difficult Passages',
  },

  crumbDoctrine: 'Doctrine',
  crumbCreeds: 'Creeds',
  crumbWesleyan: 'Wesleyan',
  crumbInBrief: 'In Brief',
  crumbAbout: 'About',

  briefCta: 'In brief — every phrase, the quick answer →',
  spineLegendLead:
    'Visual weight reflects how contested the phrase is across the tradition:',
  contested: {
    high: 'highly contested',
    medium: 'moderately contested',
    low: 'well-settled',
  },
  contestedSwatch: {
    high: 'highly contested',
    medium: 'moderately contested',
    low: 'well-settled',
  },

  abstractLabel: 'What it says',
  abstractStake: 'The stake',
  abstractMatters: 'Why it matters',
  abstractWesleyan: 'The Wesleyan take',

  srcLatin: 'Latin',
  srcGreek: 'Greek',
  srcOriginalEnglish: 'Original English',
  srcVariant: 'variant',

  tableVersion: 'Version',
  tableRendering: 'Rendering',

  traditionsCited: 'Traditions cited',
  related: 'Related',

  prev: 'Previous',
  next: 'Next',
  tocLabel: 'On this page',
  tocBackToSpine: '← Back to spine',

  briefTitleSuffix: 'In Brief',
  briefIntro:
    'The plain sense of every phrase and what is at stake — for those who want the quick answer. Each entry links to the full annotation, where the same phrase is treated at length.',
  briefSeeFullCreed: 'See the full creed →',
  briefSeeFullDocument: 'See the full document →',
  briefReadFull: 'Read the full annotation →',
};

const es: UIStrings = {
  bannerDraft:
    'Traducción asistida por máquina, pendiente de revisión por un hablante nativo. El texto en inglés es el autoritativo.',
  bannerReviewed:
    'Traducción revisada por un hablante nativo. El texto en inglés sigue siendo el autoritativo.',
  brand: 'Doctrine',
  navCreeds: 'Credos',
  navAbout: 'Acerca de',
  footer: {
    lead: 'Una obra de referencia de Wroot Press, compañera de',
    difficultPassages: 'Difficult Passages',
  },

  crumbDoctrine: 'Doctrine',
  crumbCreeds: 'Credos',
  crumbWesleyan: 'Wesleyana',
  crumbInBrief: 'En breve',
  crumbAbout: 'Acerca de',

  briefCta: 'En breve — cada frase, la respuesta rápida →',
  spineLegendLead:
    'El peso visual refleja cuán debatida ha sido la frase a lo largo de la tradición:',
  contested: {
    high: 'muy debatida',
    medium: 'moderadamente debatida',
    low: 'bien asentada',
  },
  contestedSwatch: {
    high: 'muy debatida',
    medium: 'moderadamente debatida',
    low: 'bien asentada',
  },

  abstractLabel: 'Lo que dice',
  abstractStake: 'Lo que está en juego',
  abstractMatters: 'Por qué importa',
  abstractWesleyan: 'La lectura wesleyana',

  srcLatin: 'Latín',
  srcGreek: 'Griego',
  srcOriginalEnglish: 'Inglés original',
  srcVariant: 'variante',

  tableVersion: 'Versión',
  tableRendering: 'Texto',

  traditionsCited: 'Tradiciones citadas',
  related: 'Relacionado',

  prev: 'Anterior',
  next: 'Siguiente',
  tocLabel: 'En esta página',
  tocBackToSpine: '← Volver al esquema',

  briefTitleSuffix: 'En breve',
  briefIntro:
    'El sentido llano de cada frase y lo que está en juego — para quien quiere la respuesta rápida. Cada entrada enlaza con la anotación completa, donde la misma frase se trata con amplitud.',
  briefSeeFullCreed: 'Ver el credo completo →',
  briefSeeFullDocument: 'Ver el documento completo →',
  briefReadFull: 'Leer la anotación completa →',
};

export const UI: Record<Locale, UIStrings> = {
  en,
  es,
  // Placeholders until FR/PT/SW corpora land; falling back to English keeps
  // the build green if a stray translated file appears before its chrome.
  fr: en,
  pt: en,
  sw: en,
};

// Section-grouping labels for the spine and the brief pages, per locale.
// The English map is verbatim from the original route files.
const SECTION_LABELS_EN: Record<string, string> = {
  'first-article': 'First Article',
  'second-article': 'Second Article',
  'third-article': 'Third Article',
  'the-trinity': 'The Trinity',
  'the-incarnation': 'The Incarnation',
  'warning-clauses': 'The Warning Clauses',
  preamble: 'The Preamble',
  'the-one-condition': 'The One Condition',
  'first-rule': 'The First Rule — Do No Harm',
  'second-rule': 'The Second Rule — Do Good',
  'third-rule': 'The Third Rule — The Ordinances of God',
  closing: 'The Closing',
  'god-and-the-holy-trinity': 'God and the Holy Trinity',
  'holy-scripture': 'Holy Scripture',
  'sin-and-justification': 'Sin and Justification',
  'the-christian-life': 'The Christian Life',
  'the-church-and-sacraments': 'The Church and the Sacraments',
  'the-christian-and-civil-order': 'The Christian and Civil Order',
  'appended-1939': 'Appended 1939 — Not Constitutionally Protected',
};

const SECTION_LABELS_ES: Record<string, string> = {
  'first-article': 'Primer artículo',
  'second-article': 'Segundo artículo',
  'third-article': 'Tercer artículo',
  'the-trinity': 'La Trinidad',
  'the-incarnation': 'La Encarnación',
  'warning-clauses': 'Las cláusulas de advertencia',
  preamble: 'El preámbulo',
  'the-one-condition': 'La única condición',
  'first-rule': 'La primera regla — No hacer daño',
  'second-rule': 'La segunda regla — Hacer el bien',
  'third-rule': 'La tercera regla — Las ordenanzas de Dios',
  closing: 'El cierre',
  'god-and-the-holy-trinity': 'Dios y la Santísima Trinidad',
  'holy-scripture': 'La Sagrada Escritura',
  'sin-and-justification': 'El pecado y la justificación',
  'the-christian-life': 'La vida cristiana',
  'the-church-and-sacraments': 'La Iglesia y los sacramentos',
  'the-christian-and-civil-order': 'El cristiano y el orden civil',
  'appended-1939': 'Añadido en 1939 — Sin protección constitucional',
};

const SECTION_LABELS: Record<Locale, Record<string, string>> = {
  en: SECTION_LABELS_EN,
  es: SECTION_LABELS_ES,
  fr: SECTION_LABELS_EN,
  pt: SECTION_LABELS_EN,
  sw: SECTION_LABELS_EN,
};

export function sectionLabel(locale: Locale, slug?: string): string | null {
  if (!slug) return null;
  const map = SECTION_LABELS[locale] ?? SECTION_LABELS_EN;
  return (
    map[slug] ??
    SECTION_LABELS_EN[slug] ??
    slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

// Interpretive-tradition tag labels (the `traditions` enum), per locale.
const TRADITIONS_ES: Record<string, string> = {
  patristic: 'patrística',
  scholastic: 'escolástica',
  lutheran: 'luterana',
  reformed: 'reformada',
  anglican: 'anglicana',
  roman_catholic: 'católica romana',
  eastern_orthodox: 'ortodoxa oriental',
  anabaptist: 'anabautista',
  wesleyan: 'wesleyana',
  modern_ecumenical: 'ecuménica moderna',
  liberation: 'de la liberación',
  evangelical: 'evangélica',
};

export function traditionLabel(locale: Locale, tag: string): string {
  if (locale === 'es') return TRADITIONS_ES[tag] ?? tag.replace(/_/g, ' ');
  return tag.replace(/_/g, ' ');
}
