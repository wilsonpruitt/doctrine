// Localized long-form prose for the landing page and the About page.
//
// The English landing/About routes stay hardcoded and byte-stable; these
// entries drive only the /<lang>/ mirrors. Add a locale here when its corpus
// lands. Anything absent simply does not generate a localized page.

import type { Locale } from './ui';

export interface LandingContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: { lead: string; companionLink: string };
  ecumenicalHead: string;
  wesleyanHead: string;
  forthcoming: string;
}

export interface AboutContent {
  title: string;
  metaDescription: string;
  lede: string;
  paras: string[]; // top matter, before "How it is made"
  howMadeHead: string;
  howMadeParas: string[];
  howReadHead: string;
  howReadIntro: string;
  sections: { term: string; def: string }[];
  howReadOutro: string;
  corpusHead: string;
  corpusPara: string; // may contain inline links rendered by the route
  closing: string;
}

export interface PageContent {
  landing: LandingContent;
  about: AboutContent;
}

const es: PageContent = {
  landing: {
    eyebrow: 'Una obra de referencia de Wroot Press',
    title: 'Doctrine',
    subtitle:
      'Una referencia anotada de la Gran Tradición Cristiana y la Tradición Wesleyana.',
    intro: {
      lead: 'El credo es la columna vertebral; cada frase es una puerta a la historia de su traducción, a la controversia, a la interpretación entre las tradiciones y al uso pastoral. Escrito para quienes rezan los credos y quieren saber qué es lo que rezan. Compañera de',
      companionLink: 'Difficult Passages',
    },
    ecumenicalHead: 'Credos ecuménicos',
    wesleyanHead: 'Tradición wesleyana',
    forthcoming: 'Próximamente',
  },
  about: {
    title: 'Acerca de este proyecto',
    metaDescription:
      'Qué es este proyecto, cómo está hecho y cómo leer una anotación.',
    lede: 'Una referencia anotada de la Gran Tradición Cristiana y la Tradición Wesleyana — escrita para quienes rezan estos textos y quieren saber qué es lo que rezan.',
    paras: [
      '<strong>Doctrine</strong> es una obra de referencia de Wroot Press, compañera de <a href="https://difficult-passages.netlify.app">Difficult Passages</a>. Difficult Passages aborda los versículos difíciles de la Escritura uno por uno; Doctrine hace lo mismo con los credos y los documentos confesionales que la iglesia ha rezado, debatido y transmitido. Cada documento se presenta como una <em>columna vertebral</em> — su texto completo — donde cada frase es una puerta a la historia de su traducción, a sus controversias, a cómo se ha leído entre las tradiciones y a cómo se usa en el culto y en la cura de almas.',
      'El propósito es pastoral, no polémico. Estos textos no son piezas de museo; todavía se dicen en voz alta los domingos por la mañana. El sentido de anotarlos no es ganar una discusión, sino permitir que quien confiesa «creo en la resurrección de la carne», o a quien se le pide «no hacer daño», entienda lo que está diciendo: su peso, su historia, los lugares donde ha dividido a los cristianos y los lugares donde todavía los mantiene unidos.',
    ],
    howMadeHead: 'Cómo está hecho',
    howMadeParas: [
      'Cada anotación está escrita a mano, una frase a la vez. El texto fuente se da en su lengua original — latín o griego para los credos, la edición inglesa original para los documentos wesleyanos — junto al inglés canónico y a las versiones que han importado (el Book of Common Prayer, el texto ecuménico contemporáneo, el <em>Book of Discipline</em> de la Iglesia Metodista Unida, etc.). Las decisiones de traducción se argumentan, no se afirman sin más. Donde las tradiciones discrepan, se exponen con claridad tanto las fortalezas como las debilidades de cada lectura; donde una cláusula es la razón por la que los cristianos se dividieron, eso se nombra, no se suaviza. Las fuentes primarias van primero en las lecturas adicionales. La voz wesleyana recibe su propia sección en lugar de plegarse como una opinión más entre otras, porque esta es una referencia wesleyana; la himnodia se nombra con honestidad, incluso cuando es escasa o nada wesleyana.',
      'Cada frase lleva un peso de controversia — cuánto ha contendido la tradición sobre ella — y ese peso determina cómo se ve en la columna vertebral: las frases muy debatidas aparecen en el color de acento y en negrita, las moderadamente debatidas en tinta llana, las bien asentadas tenues y discontinuas. La columna vertebral está pensada para leerse como un mapa de dónde está la presión.',
    ],
    howReadHead: 'Cómo leer una anotación',
    howReadIntro:
      'Cada anotación abre con un breve bloque en lenguaje llano, <strong>«Lo que dice»</strong> — una glosa de una línea de la frase, y luego tres apuntes rápidos: <em>lo que está en juego</em> (cuál es la cuestión real), <em>por qué importa</em> (el punto pastoral) y <em>la lectura wesleyana</em> (dónde se sitúa nuestra propia tradición). Es la rampa de acceso; el cuerpo erudito viene debajo. Bajo eso está el texto fuente y las traducciones paralelas. Luego el ensayo mismo, en un conjunto fijo de secciones:',
    sections: [
      {
        term: 'Notas de traducción',
        def: 'Las palabras mismas — qué dice realmente el latín, el griego o el inglés original, dónde divergen las versiones inglesas estándar y qué se juega en la diferencia. El trabajo filológico cercano sobre el que descansa el resto de la anotación.',
      },
      {
        term: 'Contexto histórico',
        def: 'De dónde vino la frase y por qué está redactada como está — el concilio, la controversia, la edición, la crisis a la que respondía. Qué estaba en juego cuando se fijó por primera vez.',
      },
      {
        term: 'Líneas de interpretación',
        def: 'Cómo se ha leído la frase entre las tradiciones — lecturas patrística, escolástica, luterana, reformada, anglicana, católica romana, ortodoxa, y modernas o ecuménicas según lo amerite la frase. Cada lectura recibe tanto sus fortalezas como sus debilidades; ninguna se presenta como la ganadora evidente.',
      },
      {
        term: 'Voz wesleyana',
        def: 'Dónde se sitúan los Wesley y la tradición metodista — qué conservó Wesley, qué cambió, qué suprimió o qué subrayó, y por qué. Su propia sección, no un inciso, porque esta es una referencia wesleyana y la lectura wesleyana suele ser el dato más interesante de la página.',
      },
      {
        term: 'Himnodia',
        def: 'Qué canta la iglesia en este punto del texto. La tradición se transmite tanto en sus himnos como en sus argumentos; esta sección nombra los himnos con honestidad, incluso cuando la tradición cantada es escasa, o no es wesleyana, o calla deliberadamente.',
      },
      {
        term: 'Uso pastoral y litúrgico',
        def: 'Cómo aterriza realmente la frase en el culto, la predicación y la cura de almas — la única sección donde se permite que la propia experiencia pastoral del autor dé forma a la página. Qué se hace con esta cláusula junto a una tumba, en una reunión de clase o desde el púlpito.',
      },
      {
        term: 'Lecturas adicionales',
        def: 'Adónde ir después. Las fuentes primarias primero — la Escritura, los concilios, los reformadores, los propios sermones de Wesley — y luego la erudición estándar. Hecho para seguirse, no solo para admirarse.',
      },
    ],
    howReadOutro:
      'No toda anotación usa todas las secciones; el renderizador omite las que una frase dada no necesita. El orden, sin embargo, es siempre el mismo: desde las palabras, hacia su historia, a través de las tradiciones, de vuelta a la voz wesleyana, hacia el canto, hacia el uso pastoral y, en adelante, hacia las fuentes.',
    corpusHead: 'El corpus',
    corpusPara:
      'La referencia se construye en orden editorial, no de una sola vez. Los credos ecuménicos — el <a href="/es/creeds/apostles-creed">Apostólico</a>, el <a href="/es/creeds/nicene-creed">Niceno</a> y el <a href="/es/creeds/athanasian-creed">Atanasiano</a> — vienen primero, porque son la herencia compartida. Los documentos wesleyanos — las <a href="/es/wesleyan/general-rules">Reglas Generales</a> de Wesley y los Artículos de Religión — siguen, porque son el modo en que esta tradición recibió y disciplinó esa herencia. Los documentos nuevos se añaden cuando se escriben, no se reservan de antemano.',
    closing:
      'Compañera de <a href="https://difficult-passages.netlify.app">Difficult Passages</a>, de <a href="https://wrootpress.com">Wroot Press</a>.',
  },
};

export const PAGES: Partial<Record<Locale, PageContent>> = { es };
