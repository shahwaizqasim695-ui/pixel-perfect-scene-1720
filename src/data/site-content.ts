export type SitePath =
  | "/"
  | "/about"
  | "/the-book"
  | "/my-journey"
  | "/recovery-resources"
  | "/contact";

export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "The Book", href: "/the-book" },
  { label: "My Journey", href: "/my-journey" },
  { label: "Resources", href: "/recovery-resources" },
  { label: "Contact", href: "/contact" },
] as const satisfies ReadonlyArray<{ label: string; href: SitePath }>;

export const book = {
  title: "Believing While Broken",
  fullTitle: "Believing While Broken: A Memoir of Falling, Faith, and Rising Again",
  subtitle: "A Memoir of Falling, Faith, and Rising Again",
  author: "Laura Jerlinski",
  tagline: "She got sober. Then she had to go to jail anyway.",
  publisher: "Parker Publishers",
  synopsis:
    "After years of struggling with alcohol and repeated attempts at rehabilitation, Laura moved to Florida and found sobriety. Two years sober, she returned to New Jersey to face a sentence she could no longer outrun. Between the Big Book and a worn-out Bible, she began to discover that faith does not wait for you to be whole.",
  longSynopsis:
    "Raw and honest, Believing While Broken follows Laura through addiction, recovery, incarceration, and faith. From early years in New Jersey to the long road back to herself, this memoir holds space for accountability, the hard work of rebuilding, and the quiet strength that can emerge in the darkest places.",
  excerpt:
    "This memoir traces Laura’s journey through incarceration, addiction, and the long road back to herself. It begins with her early years in New Jersey, where addiction took root and slowly unraveled the life she once knew.",
  hopeExcerpt: "Recovery isn’t about perfection; it’s about willingness.",
} as const;

export const authorBiography = [
  "Laura Jerlinski is the author of Believing While Broken, a deeply personal memoir about addiction, recovery, incarceration, and the transformative power of faith.",
  "After years of struggling with alcohol addiction and multiple attempts at rehabilitation, Laura began rebuilding her life through sobriety, spiritual growth, and the support of others. Her journey eventually brought her back to New Jersey, where she had to confront the consequences of her past while holding on to the life she had fought to reclaim.",
  "Through her writing, Laura hopes to share the strength, love, and hope she discovered along the way.",
] as const;

export const bookThemes = [
  { title: "Addiction & Recovery", description: "The long, imperfect work of finding sobriety and beginning again." },
  { title: "Incarceration & Accountability", description: "Facing the consequences of the past while holding on to change." },
  { title: "Faith & Spiritual Growth", description: "A belief that can endure even in the hardest places." },
  { title: "Healing & New Beginnings", description: "The small, steady steps that make room for hope." },
] as const;

export const journeyStages = [
  {
    number: "01",
    title: "The Beginning",
    description: "Growing up in New Jersey, early struggles, and the beginning of alcohol addiction.",
    note: "A story that starts before Laura understood how much alcohol would come to shape her life.",
  },
  {
    number: "02",
    title: "The Breaking Point",
    description: "Years of addiction, loss, and unsuccessful attempts at recovery.",
    note: "Repeated attempts to change did not make the next step easy, but they kept the possibility of change alive.",
  },
  {
    number: "03",
    title: "Choosing Sobriety",
    description: "Seeking help, embracing recovery, and rebuilding life through faith and fellowship.",
    note: "Recovery took willingness, support, and the courage to begin again one day at a time.",
  },
  {
    number: "04",
    title: "Facing the Past",
    description: "Returning to New Jersey to face incarceration despite having found sobriety.",
    note: "Sobriety did not erase the past; Laura had to meet it with honesty and accountability.",
  },
  {
    number: "05",
    title: "Rising Again",
    description: "Discovering purpose, gratitude, resilience, and the desire to help others through sharing her story.",
    note: "The story turns toward what can be carried forward: faith, resilience, and a hand offered to others.",
  },
] as const;

export const chapters = [
  {
    number: "01",
    title: "Sentenced",
    description: "The court date, the fear, and the moment everything changed.",
  },
  {
    number: "02",
    title: "The East Side",
    description: "Chaos, survival, and learning the rhythms of jail life.",
  },
  {
    number: "03",
    title: "The Fight and Solitary",
    description: "The incident that led to solitary confinement, and the silence that brought Laura face to face with herself.",
  },
  {
    number: "04",
    title: "The West Side",
    description: "The hardest conditions, deepest struggles, and the faith that carried her through.",
  },
] as const;

export const readers = [
  "People in recovery, and the people who love them",
  "Readers who grew up in a home shaped by alcohol",
  "Anyone seeking an honest memoir about addiction and incarceration",
  "People holding on to faith through a difficult season",
  "Anyone searching for hope and a second chance",
] as const;

export const recoveryResources = [
  {
    name: "Alcoholics Anonymous",
    detail: "Find information and support from the AA fellowship.",
    href: "https://www.aa.org/",
    contact: "Visit aa.org",
  },
  {
    name: "Crisis Text Line",
    detail: "Free, confidential support by text in the United States.",
    href: "https://www.crisistextline.org/",
    contact: "Visit crisistextline.org",
  },
  {
    name: "988 Suicide & Crisis Lifeline",
    detail: "Call or text 988 for immediate crisis support in the United States.",
    href: "https://988lifeline.org/",
    contact: "Call or text 988",
    phone: "988",
  },
  {
    name: "RAINN National Sexual Assault Hotline",
    detail: "Confidential support for survivors of sexual violence in the United States.",
    href: "https://www.rainn.org/",
    contact: "Call 800-656-4673",
    phone: "800-656-4673",
  },
  {
    name: "SAMHSA National Helpline",
    detail: "Free, confidential treatment-referral and information service for substance use and mental health concerns in the United States.",
    href: "https://www.samhsa.gov/find-help/helplines/national-helpline",
    contact: "Call 800-662-4357",
    phone: "800-662-4357",
  },
] as const;

export const retailerLinks: ReadonlyArray<{ label: string; href: string }> = [];

export const pageMetadata = {
  home: {
    title: "Laura Jerlinski | Believing While Broken",
    description:
      "Meet author Laura Jerlinski and discover Believing While Broken, a memoir of addiction, recovery, incarceration, faith, and rising again.",
  },
  about: {
    title: "About Laura Jerlinski | Author of Believing While Broken",
    description:
      "Read Laura Jerlinski’s story of recovery, faith, accountability, and the experiences behind her memoir, Believing While Broken.",
  },
  book: {
    title: "The Book | Believing While Broken by Laura Jerlinski",
    description:
      "Explore Believing While Broken: its story, themes, chapter previews, and a short excerpt from Laura Jerlinski’s memoir.",
  },
  journey: {
    title: "My Journey | Laura Jerlinski",
    description:
      "Follow Laura Jerlinski’s journey through addiction, sobriety, incarceration, faith, and the work of beginning again.",
  },
  resources: {
    title: "Recovery Resources | Laura Jerlinski",
    description:
      "Find US-based recovery, crisis, and support resources shared alongside Laura Jerlinski’s personal story.",
  },
  contact: {
    title: "Contact | Laura Jerlinski",
    description:
      "Contact information for general, media, book, speaking, and event inquiries for author Laura Jerlinski.",
  },
} as const;

export function getPageMeta(page: keyof typeof pageMetadata) {
  const { title, description } = pageMetadata[page];
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}