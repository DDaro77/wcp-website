export const SITE = {
  name: "West Coast Production",
  short: "WCP",
  tagline: "The most cinematic capture on the Atlantic edge",
  manifesto:
    "West Coast Production closes the gap between the Ireland you can walk and the Ireland only the sky can see — a west that still belongs to weather, stone, and light.",
  motto: "Capture. Create. Inspire.",
  location: "Lisdoonvarna, County Clare · Ireland",
  coords: "53.2707° N, 9.0568° W",
  phoneDisplay: "086 055 3070",
  phoneTel: "+353860553070",
  instagram: "https://www.instagram.com/west_coast_production/",
  youtube: "https://www.youtube.com/@west.coast.production",
  facebook: "https://www.facebook.com/westcoastproduction/",
  instagramHandle: "@west_coast_production",
};

export const NAV = [
  { href: "#craft", label: "Craft" },
  { href: "#work", label: "Work" },
  { href: "#scale", label: "Scale" },
  { href: "#contact", label: "Contact" },
] as const;

export const SCALE = [
  {
    n: "01",
    title: "Still",
    body: "8K frames from the air. Campaigns, print, the image that holds when the weather will not.",
  },
  {
    n: "02",
    title: "Motion",
    body: "Cinematic aerial and FPV. The west coast as a moving picture — cliff, spray, and line.",
  },
  {
    n: "03",
    title: "Immersion",
    body: "360° worlds you can stand inside. Places no tripod, no crane, no walk can reach.",
  },
] as const;

export const LIGHT_PILLARS = [
  "Maximize the last light on the Wild Atlantic Way",
  "Produce 8K stills and cinematic reels at scale",
  "Unlock places only a drone can reach",
] as const;

export const ACHIEVEMENTS = [
  "Licensed by the Irish Aviation Authority",
  "Fully insured commercial operations",
  "Hotels and tourism films along the west",
  "Property and estate aerials for campaigns",
  "FPV through stone, spray, and sky",
  "360° capture for places you cannot walk",
  "8K stills for print and global campaigns",
  "Historical and narrative film support",
  "Reels cut for the platforms that matter",
  "Based on the Atlantic edge, Ireland",
] as const;

export const STATS = [
  { value: "8K", label: "Stills we deliver from the air" },
  { value: "360°", label: "Worlds you can stand inside" },
  { value: "2,500 km", label: "Wild Atlantic Way we fly" },
] as const;

export const SERVICES = [
  {
    id: "aerial",
    name: "Aerial",
    kicker: "Cinematic camera drones",
    line: "Powering tourism & campaigns",
    body: "Stabilized aerial cinematography for hotels, tourism boards, and brands that need the west coast at its true scale.",
    image: "/cliffs.jpg",
    alt: "Cliffs of Moher at golden hour, Atlantic swell against dark limestone",
  },
  {
    id: "fpv",
    name: "FPV",
    kicker: "High-speed narrative",
    line: "Powering story at speed",
    body: "First-person flight along the rock face. The shot that walks the cliff instead of looking at it.",
    image: "/fpv.jpg",
    alt: "FPV view racing along an Irish limestone cliff with ocean far below",
  },
  {
    id: "360",
    name: "360°",
    kicker: "Worlds, not frames",
    line: "Powering place",
    body: "Immersive capture for destinations and estates. A complete horizon, not a single angle.",
    image: "/atlantic.jpg",
    alt: "High-altitude aerial of the Wild Atlantic Way coastline",
  },
  {
    id: "stills",
    name: "8K Stills",
    kicker: "Print-grade frames",
    line: "Powering campaigns",
    body: "High-resolution stills from the air for property, hospitality, and the image that has to hold a billboard.",
    image: "/burren.jpg",
    alt: "Aerial of the Burren limestone pavement meeting the Atlantic",
  },
  {
    id: "reels",
    name: "Reels",
    kicker: "Cut for the screen",
    line: "Powering the feed",
    body: "Short-form cut from the same flights. One operation, every ratio the platforms ask for.",
    image: "/drone.jpg",
    alt: "Cinema camera drone in flight over the Atlantic at golden hour",
  },
] as const;

export const WORK = [
  {
    src: "/hero.jpg",
    title: "Atlantic Edge",
    meta: "Aerial · County Clare",
    alt: "Camera drone over the Cliffs of Moher at sunset",
  },
  {
    src: "/fpv.jpg",
    title: "The Line",
    meta: "FPV · West Coast",
    alt: "FPV flight along a sheer Irish cliff",
  },
  {
    src: "/property.jpg",
    title: "Heritage Stay",
    meta: "Hotels · Tourism",
    alt: "Aerial of a coastal Irish castle hotel at dusk",
  },
  {
    src: "/operator.jpg",
    title: "On Station",
    meta: "Production · Ireland",
    alt: "Drone operator on an Irish cliff edge at blue hour",
  },
  {
    src: "/storm.jpg",
    title: "Force of Weather",
    meta: "Aerial · Atlantic",
    alt: "Storm waves exploding against Irish west-coast cliffs",
  },
  {
    src: "/burren.jpg",
    title: "The Burren",
    meta: "8K Still · Clare",
    alt: "Karst limestone of the Burren meeting the ocean",
  },
] as const;

export const PROJECT_TYPES = [
  "Hotel & Tourism",
  "Property",
  "Commercial",
  "Documentary",
  "FPV",
  "360°",
  "Reels",
] as const;

export const GROUND_VS_AIR = {
  ground: {
    title: "From the ground",
    items: [
      "Heights you cannot stand",
      "Roads that stop at the gate",
      "Weather windows lost to access",
      "A frame that never finds the coast",
    ],
  },
  air: {
    title: "From the air",
    items: [
      "A licensed aircraft",
      "The whole Atlantic edge",
      "Light as it actually is",
      "A west that finally holds still",
    ],
  },
} as const;
