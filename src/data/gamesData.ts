export interface Game {
  slug: string;
  title: string;
  rating: number;
  reviews: number;
  categories: string[];
  description: string[];
  thumbnail: string;
  playUrl: string;
}

const GAME_DEFS = [
  { slug: "coconut-catch", title: "coconut catch" },
  { slug: "concrete-rush", title: "concrete rush" },
  { slug: "frost-fire-dragon", title: "frost fire dragon" },
  { slug: "munchy-monster", title: "munchy monster" },
  { slug: "pearl-blaster", title: "pearl blaster" },
  { slug: "basketarena", title: "basket arena" },
  { slug: "goalkeeper", title: "goalkeeper" },
  { slug: "princess-dress-up", title: "princess dress up" },
  { slug: "snow-riders", title: "snow riders" },
  { slug: "water-color-sort", title: "water color sort" },
  { slug: "adorable-sushi-sizzle", title: "adorable sushi sizzle" },
  { slug: "aquanaut-rescue", title: "aquanaut rescue" },
  { slug: "baby-toddler-care", title: "baby toddler care" },
  { slug: "ball-adventure", title: "ball adventure" },
  { slug: "bike-blitz-bonanza", title: "bike blitz bonanza" },
  { slug: "block-breaker-challenge", title: "block breaker challenge" },
  { slug: "block-matchup", title: "block matchup" },
  { slug: "bounce-hoop", title: "bounce hoop" },
  { slug: "bowling-ball-brawl", title: "bowling ball brawl" },
  { slug: "break-lines", title: "break lines" },
  { slug: "bullseye-challenge", title: "bullseye challenge" },
  { slug: "candy-cascade-quest", title: "candy cascade quest" },
  { slug: "caring-corner-tale", title: "caring corner tale" },
  { slug: "classic-puzzle-game", title: "classic puzzle game" },
  { slug: "cluck-crossing", title: "cluck crossing" },
  { slug: "cop-sprinter", title: "cop sprinter" },
  { slug: "cosmic-cyclone", title: "cosmic cyclone" },
  { slug: "cosmic-glide", title: "cosmic glide" },
  { slug: "cube-fest", title: "cube fest" },
  { slug: "cyber-sentinel", title: "cyber sentinel" },
  { slug: "cycle-dash", title: "cycle dash" },
  { slug: "dark-flight-dash", title: "dark flight dash" },
  { slug: "divine-adventure", title: "divine adventure" },
  { slug: "doll-cake-maker", title: "doll cake maker" },
  { slug: "draw-crawler", title: "draw crawler" },
  { slug: "duck-dive-dash", title: "duck dive dash" },
  { slug: "dunk-land", title: "dunk land" },
  { slug: "dunk-line", title: "dunk line" },
  { slug: "energy-reserves", title: "energy reserves" },
  { slug: "escape-volcano-lava", title: "escape volcano lava" },
  { slug: "extraterrestrial-serpent", title: "extraterrestrial serpent" },
  { slug: "frosty-new-years-fest", title: "frosty new years fest" },
  { slug: "fuzzy-blend-bash", title: "fuzzy blend bash" },
  { slug: "gem-blast", title: "gem blast" },
  { slug: "gem-blocks-quest", title: "gem blocks quest" },
  { slug: "geometry-dash", title: "geometry dash" },
  { slug: "goal-strike", title: "goal strike" },
  { slug: "guardian-battalion", title: "guardian battalion" },
  { slug: "hexa-quest", title: "hexa quest" },
  { slug: "jingle-bell-beats", title: "jingle bell beats" },
  { slug: "jump-ascend", title: "jump ascend" },
  { slug: "kids-cooking-game", title: "kids cooking game" },
  { slug: "knife-cutter", title: "knife cutter" },
  { slug: "little-hands-helper", title: "little hands helper" },
  { slug: "lure-legends", title: "lure legends" },
  { slug: "malware-defense", title: "malware defense" },
  { slug: "match-master", title: "match master" },
  { slug: "minecraft-landing", title: "minecraft landing" },
  { slug: "monster-truck", title: "monster truck" },
  { slug: "mystic-matchup", title: "mystic matchup" },
  { slug: "ninja-slice", title: "ninja slice" },
  { slug: "pixel-shuffle", title: "pixel shuffle" },
  { slug: "princess-dressing", title: "princess dressing" },
  { slug: "racing-ramp", title: "racing ramp" },
  { slug: "rally-car-racing", title: "rally car racing" },
  { slug: "revenge-road-rush", title: "revenge road rush" },
  { slug: "rings-rumble", title: "rings rumble" },
  { slug: "rolling-whiskers", title: "rolling whiskers" },
  { slug: "save-the-cowboy", title: "save the cowboy" },
  { slug: "silent-strike", title: "silent strike" },
  { slug: "slam-dunk-showdown", title: "slam-dunk showdown" },
  { slug: "soccer-sages", title: "soccer sages" },
  { slug: "solitaire-classic", title: "solitaire classic" },
  { slug: "spikes-master", title: "spikes master" },
  { slug: "spin-shot", title: "spin shot" },
  { slug: "spin-spectrum", title: "spin spectrum" },
  { slug: "steering-master", title: "steering master" },
  { slug: "subway-footrace", title: "subway footrace" },
  { slug: "tactical-strike", title: "tactical strike" },
  { slug: "tail-thrash", title: "tail thrash" },
  { slug: "target-triumph", title: "target triumph" },
  { slug: "taylors-party-parade", title: "taylors party parade" },
  { slug: "thrill-seeker-racers", title: "thrill seeker racers" },
  { slug: "tiny-world-traveler", title: "tiny world traveler" },
  { slug: "tom-runner", title: "tom runner" },
  { slug: "traffic-tycoon-triumph", title: "traffic tycoon triumph" },
  { slug: "virtual-voyage", title: "virtual voyage" },
  { slug: "wrathful-warriors", title: "wrathful warriors" }
];

function getThumbnailPath(slug: string): string {
  const dashSlugs = [
    "coconut-catch",
    "concrete-rush",
    "frost-fire-dragon",
    "munchy-monster",
    "pearl-blaster",
    "basketarena",
    "goalkeeper",
    "princess-dress-up",
    "snow-riders",
    "water-color-sort"
  ];
  if (dashSlugs.includes(slug)) {
    return `https://vancedgames.com/images/jpg/${slug}.jpg`;
  }
  const underSlug = slug.replace(/-/g, "_");
  return `https://vancedgames.com/images/jpg/${underSlug}.jpg`;
}

function generateDescription(title: string): string[] {
  return [
    `${title.charAt(0).toUpperCase() + title.slice(1)} is a fun casual online game that tests your reflexes and coordination.`,
    "Play instantly in your browser with simple controls and modern visuals.",
    "Face progressive waves or levels that challenge your skills dynamically.",
    "Beat your best score, try different approaches, and enjoy the adventure!"
  ];
}

export const GAMES: Game[] = GAME_DEFS.map((g) => {
  // Deterministic ratings/reviews based on name lengths
  const rating = 8.5 + ((g.title.length + g.slug.length) % 15) * 0.1;
  const reviews = 35 + ((g.slug.length * g.title.length) % 25) * 8;

  let categories = ["arcade", "casual"];
  if (g.slug.includes("rush") || g.slug.includes("runner") || g.slug.includes("dash") || g.slug.includes("escape") || g.slug.includes("sprinter")) {
    categories = ["arcade", "reflex"];
  } else if (g.slug.includes("puzzle") || g.slug.includes("match") || g.slug.includes("sort") || g.slug.includes("classic") || g.slug.includes("logic") || g.slug.includes("break")) {
    categories = ["puzzle", "casual"];
  } else if (g.slug.includes("dress") || g.slug.includes("cake") || g.slug.includes("care") || g.slug.includes("helper") || g.slug.includes("cook")) {
    categories = ["casual", "girls"];
  } else if (g.slug.includes("ball") || g.slug.includes("strike") || g.slug.includes("dunk") || g.slug.includes("goal") || g.slug.includes("rider") || g.slug.includes("arena")) {
    categories = ["sports", "skill"];
  }

  return {
    slug: g.slug,
    title: g.title,
    rating: parseFloat(rating.toFixed(1)),
    reviews,
    categories,
    description: generateDescription(g.title),
    thumbnail: getThumbnailPath(g.slug),
    playUrl: `https://vancedgames.com/games/${g.slug}/index.html`
  };
});

export function getRandomGameSlug(): string {
  const randomIndex = Math.floor(Math.random() * GAMES.length);
  return GAMES[randomIndex].slug;
}
