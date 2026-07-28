export const ARTICLES = [
  // {
  //   slug: "pregatirea-pentru-scoala",
  //   title: "Cum pregătim copilul pentru începutul școlii",
  //   description:
  //     "Ghiozdanul e gata, dar copilul tău e pregătit? Dincolo de litere și cifre, iată ce contează cu adevărat în prima zi de clasa I.",
  //   category: "Idei pentru părinți",
  //   publishDate: "2026-08-20",
  //   image: "/blog/pregatirea-pentru-scoala.jpg",
  //   imageAlt: "Copil zâmbitor cu ghiozdan în prima zi de școală",
  //   readingTimeMinutes: 7,
  // },
  // {
  //   slug: "de-ce-uita-copiii",
  //   title: "De ce uită copiii atât de repede ceea ce învață?",
  //   description:
  //     "Nu este lene, nu este rea-voință — este biologie. Curba uitării lui Ebbinghaus explică totul, iar soluția nu este să repeți mai mult, ci mai inteligent.",
  //   category: "Educație",
  //   publishDate: "2026-10-01",
  //   image: "/blog/de-ce-uita-copiii.jpg",
  //   imageAlt: "Copil care privește nedumerit un caiet cu lecții",
  //   readingTimeMinutes: 6,
  // },
  // {
  //   slug: "ajutor-teme-eficient",
  //   title: "Cum îl ajuți pe copil la teme fără certuri — 7 strategii dovedite",
  //   description:
  //     "Ajutorul la teme nu trebuie să fie o luptă. Descoperă 7 tehnici validate de psihologi pentru a transforma ora de teme într-un moment calm și productiv.",
  //   category: "Teme și învățare",
  //   publishDate: "2026-09-10",
  //   image: "/blog/ajutor-teme-eficient.jpg",
  //   imageAlt: "Copil care face teme la birou, calm și concentrat",
  //   readingTimeMinutes: 6,
  // },
  // {
  //   slug: "rutina-dupa-scoala",
  //   title: "Rutina de după școală: teme, odihnă și timp pentru joacă",
  //   description:
  //     "Un program previzibil de după-amiază nu este un moft — este o nevoie neurobiologică. Cum construiești o rutină care funcționează cu adevărat.",
  //   category: "Idei pentru părinți",
  //   publishDate: "2026-09-15",
  //   image: "/blog/rutina-dupa-scoala.jpg",
  //   imageAlt: "Copil care citește calm la birou după-amiaza",
  //   readingTimeMinutes: 5,
  // },
  // {
  //   slug: "dezvoltarea-emotionala",
  //   title: "Cum dezvoltăm autonomia și inteligența emoțională a copilului pas cu pas",
  //   description:
  //     "IQ-ul explică mai puțin de 25% din succesul în viață. Restul se construiește zilnic, între 6 și 10 ani. Iată cum.",
  //   category: "Dezvoltarea copilului",
  //   publishDate: "2026-09-18",
  //   image: "/blog/dezvoltarea-emotionala.jpg",
  //   imageAlt: "Copii care colaborează la o activitate în grup",
  //   readingTimeMinutes: 7,
  // },
  {
    slug: "invatarea-limbilor-straine",
    title:
      "De ce vârsta 6–10 ani este cea mai bună perioadă pentru a învăța o limbă străină",
    description:
      "Fereastra critică pentru limbaj se închide în jurul vârstei de 12 ani. Iată ce spune neuroștiința și cum poți profita de ea acasă.",
    category: "Educație",
    publishDate: "2026-07-28",
    image: "/blog/invatarea-limbilor-straine.jpg",
    imageAlt: "Copil care învață engleză cu flashcards colorate",
    readingTimeMinutes: 6,
  },
  // {
  //   slug: "jocuri-educative-acasa",
  //   title: "Joaca fără ecrane: 15 jocuri educative de acasă pe care copiii le adoră",
  //   description:
  //     "Copiii supra-stimulați de ecrane uită cum să se joace. Iată 15 idei concrete, fără tehnologie, grupate pe tipul de abilitate dezvoltată.",
  //   category: "Idei pentru părinți",
  //   publishDate: "2026-09-25",
  //   image: "/blog/jocuri-educative-acasa.jpg",
  //   imageAlt: "Copii care se joacă un joc de societate pe podea",
  //   readingTimeMinutes: 5,
  // },
];

export const CATEGORIES = [
  "Toate",
  "Educație",
  "Teme și învățare",
  "Dezvoltarea copilului",
  "Idei pentru părinți",
  "Viața la after-school",
];

export function getArticleBySlug(slug) {
  return ARTICLES.find((a) => a.slug === slug) || null;
}

export function getRelatedArticles(slug, count = 3) {
  const current = getArticleBySlug(slug);
  if (!current) return ARTICLES.slice(0, count);
  const sameCategory = ARTICLES.filter(
    (a) => a.slug !== slug && a.category === current.category,
  );
  const others = ARTICLES.filter(
    (a) => a.slug !== slug && a.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, count);
}

export function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString("ro-RO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
