export interface Game {
  slug: string;
  title: string;
  rating: number;
  reviews: number;
  categories: string[];
  description: string[];
  thumbnail: string;
  videoUrl?: string;
  playUrl: string;
}

export const CATEGORIES = [
  { id: "all", label: "All Games" },
  { id: "arcade", label: "Arcade" },
  { id: "reflex", label: "Reflex" },
  { id: "skill", label: "Skill" },
  { id: "puzzle", label: "Puzzle" },
  { id: "sports", label: "Sports" },
  { id: "racing", label: "Racing" },
  { id: "casual", label: "Casual" }
];

export const GAMES: Game[] = [
  {
    slug: "coconut-catch",
    title: "coconut catch",
    rating: 9.2,
    reviews: 94,
    categories: ["arcade", "reflex", "skill", "casual"],
    description: [
      "Coconut Catch is a fun tropical arcade game that tests your timing and hand-eye coordination.",
      "Move quickly and catch falling coconuts before they hit the ground, but stay alert for heavy decoy objects that can cost you points.",
      "Each wave gets faster, forcing you to react with precision while planning your movement across the beach.",
      "Use boosters, build combos, and beat your best score in this sunny skill challenge.",
      "With bright island visuals, simple controls, and addictive score-chasing gameplay, Coconut Catch is easy to start and hard to stop.",
      "Jump in now and see how many coconuts you can catch! 🥥🌴"
    ],
    thumbnail: "https://vancedgames.com/images/jpg/coconut-catch.jpg",
    playUrl: "https://vancedgames.com/games/coconut-catch/index.html"
  },
  {
    slug: "concrete-rush",
    title: "concrete rush",
    rating: 8.9,
    reviews: 78,
    categories: ["arcade", "reflex", "skill", "racing"],
    description: [
      "Concrete Rush is a high-speed urban runner where you dart through busy construction yards and high-rises.",
      "Jump over barrels, slide under scaffolding, and dodge moving cranes in a split-second race.",
      "Collect blueprints and power-ups to unlock special gear and increase your run multiplier.",
      "Test your reflexes as the environment changes dynamically and speed keeps rising."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/concrete-rush.jpg",
    playUrl: "https://vancedgames.com/games/concrete-rush/index.html"
  },
  {
    slug: "frost-fire-dragon",
    title: "frost fire dragon",
    rating: 9.4,
    reviews: 142,
    categories: ["arcade", "skill", "casual"],
    description: [
      "Frost Fire Dragon puts you in control of a legendary dragon wielding elemental powers.",
      "Engage in epic air battles, switching between frost blasts and flame bursts to counter different enemy types.",
      "Collect dragon gems to upgrade your armor, wing speed, and breath intensity.",
      "Test your survival instincts in this fantasy action challenge with mesmerizing particle effects."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/frost-fire-dragon.jpg",
    playUrl: "https://vancedgames.com/games/frost-fire-dragon/index.html"
  },
  {
    slug: "munchy-monster",
    title: "munchy monster",
    rating: 8.7,
    reviews: 65,
    categories: ["arcade", "puzzle", "casual"],
    description: [
      "Munchy Monster is a charming puzzle game where you feed a hungry little critter its favorite treats.",
      "Solve physics-based puzzles, cut ropes, and trigger levers to roll cookies into the monster's mouth.",
      "Avoid feeding him bitter foods and traps that will make him lose health.",
      "Fun visual feedback, cute animations, and brain-teasing levels await you."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/munchy-monster.jpg",
    playUrl: "https://vancedgames.com/games/munchy-monster/index.html"
  },
  {
    slug: "pearl-blaster",
    title: "pearl blaster",
    rating: 9.1,
    reviews: 110,
    categories: ["arcade", "skill", "puzzle"],
    description: [
      "Pearl Blaster is a classic marble-shooter game set in a beautiful deep-sea environment.",
      "Launch colored pearls into a moving track to match three or more of the same color and clear the chain.",
      "Utilize special powerups like freeze, bomb, and reverse to save yourself in tight situations.",
      "Clear all pearls before they reach the ocean vortex to succeed!"
    ],
    thumbnail: "https://vancedgames.com/images/jpg/pearl-blaster.jpg",
    playUrl: "https://vancedgames.com/games/pearl-blaster/index.html"
  },
  {
    slug: "basketarena",
    title: "basket arena",
    rating: 8.8,
    reviews: 82,
    categories: ["sports", "skill", "casual"],
    description: [
      "Basket Arena is a fast-paced 1v1 casual basketball challenge with physics-driven dunks.",
      "Dribble past your opponent, trigger acrobatic jumps, and perform jaw-dropping slam dunks.",
      "Unlock new courts, custom balls, and character skins to stand out.",
      "Compete against smart AI opponents or chase high scores in the time-attack mode."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/basketarena.jpg",
    playUrl: "https://vancedgames.com/games/basketarena/index.html"
  },
  {
    slug: "goalkeeper",
    title: "goalkeeper",
    rating: 9.0,
    reviews: 103,
    categories: ["sports", "skill", "reflex"],
    description: [
      "Goalkeeper puts you right in front of the net in a high-stakes football shootout.",
      "Swipe to move the goalie gloves and block incoming soccer balls, curves, and fireballs.",
      "Earn coins for consecutive clean sheets and unlock legendary gloves.",
      "Be careful: you only have three lives, and the striker gets faster with every kick!"
    ],
    thumbnail: "https://vancedgames.com/images/jpg/goalkeeper.jpg",
    playUrl: "https://vancedgames.com/games/goalkeeper/index.html"
  },
  {
    slug: "princess-dress-up",
    title: "princess dress up",
    rating: 8.6,
    reviews: 57,
    categories: ["casual", "girls", "dress up"],
    description: [
      "Princess Dress Up lets your creativity run wild with high-fashion designs and styles.",
      "Choose from hundreds of gowns, accessories, hairstyles, and makeups to design the perfect look.",
      "Save your creations to your device or showcase them in mock fashion contests.",
      "A soothing and fun experience designed for fashion enthusiasts of all ages."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/princess-dress-up.jpg",
    playUrl: "https://vancedgames.com/games/princess-dress-up/index.html"
  },
  {
    slug: "snow-riders",
    title: "snow riders",
    rating: 9.3,
    reviews: 128,
    categories: ["racing", "sports", "skill"],
    description: [
      "Snow Riders is a thrilling winter sports simulator featuring downhill snowboarding.",
      "Race down steep slopes, execute cool spins and flips off ramps, and avoid rock slide hazards.",
      "Unlock high-performance boards and winter suits with the coins you collect.",
      "Beat the timer to reach the chalet before nightfall!"
    ],
    thumbnail: "https://vancedgames.com/images/jpg/snow-riders.jpg",
    playUrl: "https://vancedgames.com/games/snow-riders/index.html"
  },
  {
    slug: "water-color-sort",
    title: "water color sort",
    rating: 8.9,
    reviews: 95,
    categories: ["puzzle", "casual"],
    description: [
      "Water Color Sort is a highly addictive, relaxing brain-teaser.",
      "Sort the colored liquids in the glasses until all colors are separated into their own containers.",
      "Plan your moves carefully—you can only pour water if it matches the color at the top of the destination glass.",
      "Featuring thousands of levels, this game is perfect for training your spatial logic."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/water-color-sort.jpg",
    playUrl: "https://vancedgames.com/games/water-color-sort/index.html"
  },
  {
    slug: "adorable-sushi-sizzle",
    title: "adorable sushi sizzle",
    rating: 8.8,
    reviews: 45,
    categories: ["puzzle", "casual"],
    description: [
      "Adorable Sushi Sizzle is a sweet matching game filled with delicious sushi rolls.",
      "Swap and match 3 or more cute sushi items to complete board objectives before running out of turns.",
      "Create special combos to trigger soy-sauce explosions and ginger clears.",
      "Dozens of colorful levels with delightful sound effects and animations."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/adorable_sushi_sizzle.jpg",
    playUrl: "https://vancedgames.com/games/adorable-sushi-sizzle/index.html"
  },
  {
    slug: "aquanaut-rescue",
    title: "aquanaut rescue",
    rating: 9.0,
    reviews: 74,
    categories: ["arcade", "skill", "casual"],
    description: [
      "Aquanaut Rescue is an underwater navigation skill game.",
      "Guide your deep-sea submarine past dangerous jellyfish reefs, volcanic vents, and sea monsters to rescue stranded divers.",
      "Keep an eye on your oxygen tank and hull integrity, collecting repair kits and gas canisters along the way.",
      "A tense yet beautiful underwater experience."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/aquanaut_rescue.jpg",
    playUrl: "https://vancedgames.com/games/aquanaut-rescue/index.html"
  },
  {
    slug: "baby-toddler-care",
    title: "baby toddler care",
    rating: 8.5,
    reviews: 38,
    categories: ["casual"],
    description: [
      "Baby Toddler Care is a friendly babysitting simulation game.",
      "Feed, bathe, dress, and play with cute toddlers, keeping them happy and content.",
      "Learn to manage different requests at the same time to earn high ratings and progress to new nursery levels.",
      "A heartwarming simulation with intuitive drag-and-drop gameplay."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/baby_toddler_care.jpg",
    playUrl: "https://vancedgames.com/games/baby-toddler-care/index.html"
  },
  {
    slug: "ball-adventure",
    title: "ball adventure",
    rating: 8.9,
    reviews: 62,
    categories: ["arcade", "puzzle", "casual"],
    description: [
      "Ball Adventure is a physics-based rolling puzzle platformer.",
      "Control a spherical hero, navigate narrow wooden bridges, swing platforms, and avoid laser traps.",
      "Switch the ball material between wood, stone, and paper to solve weight-dependent puzzle gates.",
      "A solid challenge that requires steady fingers and sharp wits."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/ball_adventure.jpg",
    playUrl: "https://vancedgames.com/games/ball-adventure/index.html"
  },
  {
    slug: "bike-blitz-bonanza",
    title: "bike blitz bonanza",
    rating: 9.2,
    reviews: 118,
    categories: ["racing", "skill"],
    description: [
      "Bike Blitz Bonanza is an intense 2D physics motorcycle stunting game.",
      "Accelerate over giant jumps, time your backflips and frontflips, and land safely to earn speed boosts.",
      "Balance your bike carefully to avoid crashing into obstacles or landing on your head.",
      "Dozens of challenging tracks with gravity-defying loops and ramps."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/bike_blitz_bonanza.jpg",
    playUrl: "https://vancedgames.com/games/bike-blitz-bonanza/index.html"
  },
  {
    slug: "block-breaker-challenge",
    title: "block breaker challenge",
    rating: 8.7,
    reviews: 54,
    categories: ["arcade", "skill"],
    description: [
      "Block Breaker Challenge is a modern take on the classic arcade brick-breaking genre.",
      "Bounce the ball off your paddle to shatter blocks, collecting fallen powerups like laser fire, multi-ball, and paddle expanders.",
      "Avoid catching negative modifiers that shrink your paddle or speed up the ball.",
      "Face off against giant boss blocks at the end of each stage."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/block_breaker_challenge.jpg",
    playUrl: "https://vancedgames.com/games/block-breaker-challenge/index.html"
  },
  {
    slug: "block-matchup",
    title: "block matchup",
    rating: 8.9,
    reviews: 80,
    categories: ["puzzle", "casual"],
    description: [
      "Block Matchup is a brain-training block puzzle game.",
      "Drag and fit different grid shapes onto a 10x10 board, forming complete horizontal or vertical lines to clear them.",
      "The game ends when you no longer have space to place incoming block shapes.",
      "No time limit, giving you room to strategize and achieve massive high scores."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/block_matchup.jpg",
    playUrl: "https://vancedgames.com/games/block-matchup/index.html"
  },
  {
    slug: "bounce-hoop",
    title: "bounce hoop",
    rating: 8.6,
    reviews: 49,
    categories: ["sports", "skill", "casual"],
    description: [
      "Bounce Hoop is a bouncy, minimalist basketball shooting game.",
      "Tap to bounce the basketball through the air, guiding it into the hoop without hitting the floor.",
      "Perform swishes (entering without hitting the rim) to multiply your score and earn coins.",
      "Unlock a wide library of fun sports skins and colorful trail effects."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/bounce_hoop.jpg",
    playUrl: "https://vancedgames.com/games/bounce-hoop/index.html"
  },
  {
    slug: "bowling-ball-brawl",
    title: "bowling ball brawl",
    rating: 9.0,
    reviews: 88,
    categories: ["sports", "arcade", "casual"],
    description: [
      "Bowling Ball Brawl is an explosive, non-traditional take on bowling.",
      "Steer a giant, fast-moving bowling ball down obstacle-filled obstacle courses to crash into pins.",
      "Dodge barriers, launch off booster ramps, and break through walls to maintain maximum velocity.",
      "Collect coins to unlock custom balls like soccer designs, fireballs, and custom emojis."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/bowling_ball_brawl.jpg",
    playUrl: "https://vancedgames.com/games/bowling-ball-brawl/index.html"
  },
  {
    slug: "break-lines",
    title: "break lines",
    rating: 8.7,
    reviews: 41,
    categories: ["puzzle", "casual"],
    description: [
      "Break Lines is a clean, minimal puzzle game focused on line connections.",
      "Rotate node segments to connect laser paths, matching corresponding colors and breaking blocking gates.",
      "Includes hundreds of relaxing, ambient levels designed to calm your mind while keeping your brain engaged."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/break_lines.jpg",
    playUrl: "https://vancedgames.com/games/break-lines/index.html"
  },
  {
    slug: "bullseye-challenge",
    title: "bullseye challenge",
    rating: 8.9,
    reviews: 73,
    categories: ["arcade", "skill"],
    description: [
      "Bullseye Challenge tests your target archery skills.",
      "Aim your bow, account for changing wind speeds and directions, and release to shoot the bullseye.",
      "Compete in moving targets, popping balloons, and distance shoots.",
      "Earn trophies to unlock premium compound bows and carbon arrows."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/bullseye_challenge.jpg",
    playUrl: "https://vancedgames.com/games/bullseye-challenge/index.html"
  },
  {
    slug: "candy-cascade-quest",
    title: "candy cascade quest",
    rating: 9.1,
    reviews: 130,
    categories: ["puzzle", "casual"],
    description: [
      "Candy Cascade Quest is a vibrant match-3 game set in a sweet candy land.",
      "Match delicious candies, create striped sweets, and trigger spectacular cascade combos.",
      "Help the candy chef collect ingredients and clear chocolate bars across 200+ stages.",
      "Featuring daily bonuses and challenges to keep your sweet tooth satisfied."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/candy_cascade_quest.jpg",
    playUrl: "https://vancedgames.com/games/candy-cascade-quest/index.html"
  },
  {
    slug: "caring-corner-tale",
    title: "caring corner tale",
    rating: 8.6,
    reviews: 31,
    categories: ["casual"],
    description: [
      "Caring Corner Tale is a pet rescue and shelter simulation.",
      "Take care of sick and abandoned puppies and kittens, clean them, treat their injuries, and play with them.",
      "Upgrade your shelter rooms and find the perfect adoptive homes for your furry friends.",
      "A sweet, educational game about pet care."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/caring_corner_tale.jpg",
    playUrl: "https://vancedgames.com/games/caring-corner-tale/index.html"
  },
  {
    slug: "classic-puzzle-game",
    title: "classic puzzle game",
    rating: 8.8,
    reviews: 67,
    categories: ["puzzle", "casual"],
    description: [
      "Classic Puzzle Game features a compilation of traditional puzzles like Sudoku, Nonograms, and Sliding tiles.",
      "Keep your mind sharp with customizable difficulties, daily challenges, and tracking progress statistics.",
      "An offline-friendly, clean interface designed for puzzle purists."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/classic_puzzle_game.jpg",
    playUrl: "https://vancedgames.com/games/classic-puzzle-game/index.html"
  },
  {
    slug: "cluck-crossing",
    title: "cluck crossing",
    rating: 8.8,
    reviews: 66,
    categories: ["arcade", "reflex", "casual"],
    description: [
      "Cluck Crossing is a fun frogger-style traffic dodging challenge.",
      "Guide a brave chicken across busy highways, floating river logs, and railway lines.",
      "Time your jumps perfectly to avoid speeding trucks, trains, and hungry eagles.",
      "Compete to reach the highest distance score in the global hall of fame!"
    ],
    thumbnail: "https://vancedgames.com/images/jpg/cluck_crossing.jpg",
    playUrl: "https://vancedgames.com/games/cluck-crossing/index.html"
  },
  {
    slug: "cop-sprinter",
    title: "cop sprinter",
    rating: 9.0,
    reviews: 92,
    categories: ["arcade", "reflex", "skill"],
    description: [
      "Cop Sprinter is a high-speed endless running chase.",
      "Outrun the law, leap across rooftops, slide under police blockades, and collect golden badges.",
      "Use hoverboards and jetpacks to zoom ahead and escape tight situations.",
      "Responsive controls make running, dodging, and dashing feel fluid."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/cop_sprinter.jpg",
    playUrl: "https://vancedgames.com/games/cop-sprinter/index.html"
  },
  {
    slug: "cosmic-cyclone",
    title: "cosmic cyclone",
    rating: 9.1,
    reviews: 104,
    categories: ["arcade", "skill"],
    description: [
      "Cosmic Cyclone is a retro space shooter featuring bullet-hell action.",
      "Pilot a state-of-the-art starfighter to defend against waves of alien invaders.",
      "Upgrade your plasma cannons, shield generators, and secondary missiles dynamically.",
      "A intense challenge for retro arcade fans."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/cosmic_cyclone.jpg",
    playUrl: "https://vancedgames.com/games/cosmic-cyclone/index.html"
  },
  {
    slug: "cosmic-glide",
    title: "cosmic glide",
    rating: 8.7,
    reviews: 58,
    categories: ["arcade", "casual"],
    description: [
      "Cosmic Glide is a relaxing endless flyer set in a colorful neon nebula.",
      "Glide your ship through orbit rings, collecting stellar dust while avoiding asteroid dust clouds.",
      "A soothing synthwave soundtrack and gorgeous visual feedback make this perfect for relaxing."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/cosmic_glide.jpg",
    playUrl: "https://vancedgames.com/games/cosmic-glide/index.html"
  },
  {
    slug: "cube-fest",
    title: "cube fest",
    rating: 8.9,
    reviews: 81,
    categories: ["arcade", "reflex", "skill"],
    description: [
      "Cube Fest is a rhythm-based dash platformer.",
      "Tap in sync with the beat to jump over spikes, flip gravity, and dash through block obstacles.",
      "Unlock custom cube designs and trails as you conquer challenging electronic music levels."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/cube_fest.jpg",
    playUrl: "https://vancedgames.com/games/cube-fest/index.html"
  },
  {
    slug: "jump-ascend",
    title: "jump ascend",
    rating: 9.1,
    reviews: 99,
    categories: ["arcade", "skill", "reflex"],
    description: [
      "Jump Ascend is an endless vertical jumping game.",
      "Bounce off tiny platforms, collect spring boosters, and avoid crumbling ledges and falling rocks.",
      "How high can you climb before falling into the void?"
    ],
    thumbnail: "https://vancedgames.com/images/jpg/jump-ascend.jpg",
    playUrl: "https://vancedgames.com/games/jump-ascend/index.html"
  },
  {
    slug: "knife-cutter",
    title: "knife cutter",
    rating: 8.8,
    reviews: 112,
    categories: ["arcade", "reflex", "skill"],
    description: [
      "Knife Cutter is the ultimate knife throwing reflex challenge.",
      "Throw knives into rotating wooden targets, breaking them into pieces.",
      "Be careful: do not hit the knives that are already stuck in the targets.",
      "Slash apples to unlock custom sword designs, daggers, and axes!"
    ],
    thumbnail: "https://vancedgames.com/images/jpg/knife-cutter.jpg",
    playUrl: "https://vancedgames.com/games/knife-cutter/index.html"
  },
  {
    slug: "pixel-shuffle",
    title: "pixel shuffle",
    rating: 8.6,
    reviews: 44,
    categories: ["puzzle", "casual"],
    description: [
      "Pixel Shuffle is a retro jigsaw puzzle game.",
      "Reassemble scrambled pixel-art images within a set move limit.",
      "Discover cute classic game characters, monsters, and scenes as you solve levels."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/pixel-shuffle.jpg",
    playUrl: "https://vancedgames.com/games/pixel-shuffle/index.html"
  },
  {
    slug: "tom-runner",
    title: "tom runner",
    rating: 9.3,
    reviews: 215,
    categories: ["arcade", "reflex", "skill"],
    description: [
      "Tom Runner is an endless runner featuring a mischievous raccoon escaping the park ranger.",
      "Swipe to switch lanes, jump over fences, and slide under banners.",
      "Collect tasty berries and unlock cool outfits, skateboards, and helmets."
    ],
    thumbnail: "https://vancedgames.com/images/jpg/tom-runner.jpg",
    playUrl: "https://vancedgames.com/games/tom-runner/index.html"
  }
];

export function getRandomGameSlug(): string {
  const randomIndex = Math.floor(Math.random() * GAMES.length);
  return GAMES[randomIndex].slug;
}
