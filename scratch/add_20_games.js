const fs = require('fs');
const path = require('path');

const new20Games = [
  {
    id: 22,
    title: "Black Myth: Wukong",
    subtitle: "Action RPG Rooted in Chinese Mythology & The Legend of the Destined One",
    originalPrice: 59.99,
    salePrice: 49.99,
    taxIncluded: true,
    genre: ["Action", "RPG", "Souls-like"],
    categories: ["Action", "RPG"],
    developer: "Game Science",
    languages: ["English[US]", "Chinese", "Japanese", "French"],
    platform: ["PC", "PS5"],
    description: "Black Myth: Wukong is an action RPG rooted in Chinese mythology. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.",
    cartImage: {
      id: 1,
      alt: "Black Myth Wukong cover",
      src: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Black Myth Wukong gameplay",
        src: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 3400,
    stock: 500,
    timeLeft: { hours: 24 },
    reviews: [
      {
        user: "Chen Wei",
        rating: 4.9,
        comment: "Breathtaking visuals, deep combat mechanics, and incredible boss fights!",
        date: "2026-01-15",
        userImage: "/images/users/alex-morgan.jpg"
      }
    ],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 17
  },
  {
    id: 23,
    title: "Elden Ring: Shadow of the Erdtree",
    subtitle: "Epic Fantasy Open-World Masterpiece Expansion in the Realm of Shadow",
    originalPrice: 39.99,
    salePrice: 34.99,
    taxIncluded: true,
    genre: ["Open World", "RPG", "Dark Fantasy"],
    categories: ["RPG", "Adventure"],
    developer: "FromSoftware Inc.",
    languages: ["English[US]", "Spanish", "Japanese", "German"],
    platform: ["PC", "PS5", "Xbox Series X"],
    description: "Guided by Miquella, players step into the Realm of Shadow, a place obscured by the Erdtree where the goddess Marika first set foot. Uncover dark secrets and defeat ferocious new bosses with mysterious weapons and armor.",
    cartImage: {
      id: 1,
      alt: "Elden Ring Shadow of Erdtree cover",
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Elden Ring Shadow of Erdtree gameplay",
        src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 4800,
    stock: 650,
    timeLeft: { hours: 48 },
    reviews: [
      {
        user: "Marcus Vance",
        rating: 5.0,
        comment: "FromSoftware did it again. Masterpiece level design and challenge.",
        date: "2026-02-01",
        userImage: "/images/users/jordan-lee.jpg"
      }
    ],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 12
  },
  {
    id: 24,
    title: "Helldivers 2: Galactic Freedom",
    subtitle: "Co-op Third-Person Shooter for Super Earth & Managed Democracy",
    originalPrice: 39.99,
    salePrice: 29.99,
    taxIncluded: true,
    genre: ["Co-op", "Shooter", "Action"],
    categories: ["Action", "PvP"],
    developer: "Arrowhead Game Studios",
    languages: ["English[US]", "French", "Italian"],
    platform: ["PC", "PS5"],
    description: "The galaxy's last line of offense. Enlist in the Helldivers and join the fight for freedom across a hostile galaxy in a fast, frantic, and ferocious third-person shooter.",
    cartImage: {
      id: 1,
      alt: "Helldivers 2 cover",
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Helldivers 2 gameplay",
        src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 5200,
    stock: 800,
    timeLeft: { hours: 12 },
    reviews: [
      {
        user: "Tyler Durden",
        rating: 4.8,
        comment: "For Managed Democracy! Hilarious friendly fire and epic co-op moments.",
        date: "2026-01-28",
        userImage: "/images/users/sami-rahman.jpg"
      }
    ],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 25
  },
  {
    id: 25,
    title: "Ghost of Tsushima: Director's Cut",
    subtitle: "Samurai Action Adventure Across Feudal Japan & Iki Island",
    originalPrice: 59.99,
    salePrice: 39.99,
    taxIncluded: true,
    genre: ["Open World", "Action", "Stealth"],
    categories: ["Adventure", "Action"],
    developer: "Sucker Punch Productions",
    languages: ["English[US]", "Japanese", "French", "Spanish"],
    platform: ["PC", "PS5"],
    description: "Forge a new path and wage an unconventional war for the freedom of Tsushima. Challenge opponents with your katana, master the bow, and develop stealth tactics to eliminate enemies as Jin Sakai.",
    cartImage: {
      id: 1,
      alt: "Ghost of Tsushima cover",
      src: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Ghost of Tsushima gameplay",
        src: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 2900,
    stock: 420,
    timeLeft: { hours: 36 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 33
  },
  {
    id: 26,
    title: "Baldur's Gate 3: Definitive Edition",
    subtitle: "Turn-Based RPG in Dungeons & Dragons Forgotten Realms",
    originalPrice: 59.99,
    salePrice: 44.99,
    taxIncluded: true,
    genre: ["RPG", "Strategy", "Story-Rich"],
    categories: ["RPG", "Strategy"],
    developer: "Larian Studios",
    languages: ["English[US]", "German", "Spanish", "Chinese"],
    platform: ["PC", "PS5", "Xbox Series X"],
    description: "Gather your party and return to the Forgotten Realms in a tale of fellowship, betrayal, sacrifice, survival, and the lure of absolute power. Unmatched freedom to explore, experiment, and interact.",
    cartImage: {
      id: 1,
      alt: "Baldur's Gate 3 cover",
      src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Baldur's Gate 3 gameplay",
        src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 6100,
    stock: 900,
    timeLeft: { hours: 18 },
    reviews: [
      {
        user: "Elena Rostova",
        rating: 5.0,
        comment: "Game of the generation. Endless choices and incredible companion writing.",
        date: "2026-02-10",
        userImage: "/images/users/mia-chen.jpg"
      }
    ],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 25
  },
  {
    id: 27,
    title: "Grand Theft Auto V: Premium Edition",
    subtitle: "Open-World Crime Saga in Los Santos & GTA Online Access",
    originalPrice: 29.99,
    salePrice: 14.99,
    taxIncluded: true,
    genre: ["Open World", "Action", "Crime"],
    categories: ["Action", "Open World"],
    developer: "Rockstar Games",
    languages: ["English[US]", "Spanish", "French", "German"],
    platform: ["PC", "PS5", "Xbox Series X"],
    description: "When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with the criminal underworld, they must pull off a series of dangerous heists to survive.",
    cartImage: {
      id: 1,
      alt: "GTA V cover",
      src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "GTA V gameplay",
        src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 15000,
    stock: 2000,
    timeLeft: { hours: 72 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 50
  },
  {
    id: 28,
    title: "Red Dead Redemption 2: Ultimate Edition",
    subtitle: "America's Wild West Outlaw Epic Story of Arthur Morgan",
    originalPrice: 59.99,
    salePrice: 19.99,
    taxIncluded: true,
    genre: ["Open World", "Western", "Story-Rich"],
    categories: ["Adventure", "Open World"],
    developer: "Rockstar Games",
    languages: ["English[US]", "Spanish", "Italian"],
    platform: ["PC", "PS5", "Xbox Series X"],
    description: "Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight across rugged America.",
    cartImage: {
      id: 1,
      alt: "Red Dead Redemption 2 cover",
      src: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Red Dead Redemption 2 gameplay",
        src: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 9800,
    stock: 1200,
    timeLeft: { hours: 24 },
    reviews: [
      {
        user: "Arthur Pendelton",
        rating: 5.0,
        comment: "Emotional masterpiece. The detail in this game world is unmatched.",
        date: "2026-01-05",
        userImage: "/images/users/alex-morgan.jpg"
      }
    ],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 67
  },
  {
    id: 29,
    title: "God of War Ragnarök",
    subtitle: "Kratos and Atreus Norse Mythological Journey to Stop Ragnarök",
    originalPrice: 59.99,
    salePrice: 49.99,
    taxIncluded: true,
    genre: ["Action", "Adventure", "Mythology"],
    categories: ["Action", "Adventure"],
    developer: "Santa Monica Studio",
    languages: ["English[US]", "French", "Spanish"],
    platform: ["PC", "PS5"],
    description: "Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go. Journey through dangerous and stunning landscapes while facing hostile Norse gods and monsters.",
    cartImage: {
      id: 1,
      alt: "God of War Ragnarök cover",
      src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "God of War Ragnarök gameplay",
        src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 4300,
    stock: 600,
    timeLeft: { hours: 16 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 17
  },
  {
    id: 30,
    title: "Cyberpunk 2077: Phantom Liberty",
    subtitle: "Spy-Thriller Expansion Set in Dogtown Night City",
    originalPrice: 29.99,
    salePrice: 24.99,
    taxIncluded: true,
    genre: ["Cyberpunk", "RPG", "Open World"],
    categories: ["RPG", "Action"],
    developer: "CD Projekt Red",
    languages: ["English[US]", "Japanese", "German"],
    platform: ["PC", "PS5", "Xbox Series X"],
    description: "Phantom Liberty is a spy-thriller expansion for Cyberpunk 2077. Return as cyber-enhanced mercenary V and embark on a high-stakes mission of espionage and intrigue to save the NUSA President.",
    cartImage: {
      id: 1,
      alt: "Cyberpunk 2077 Phantom Liberty cover",
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Cyberpunk 2077 Phantom Liberty gameplay",
        src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 3700,
    stock: 450,
    timeLeft: { hours: 20 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 17
  },
  {
    id: 31,
    title: "Palworld: Monster Taming Survival",
    subtitle: "Open-World Survival Crafting & Pal Collection Adventure",
    originalPrice: 29.99,
    salePrice: 23.99,
    taxIncluded: true,
    genre: ["Survival", "Open World", "Co-op"],
    categories: ["Simulation", "Adventure"],
    developer: "Pocketpair",
    languages: ["English[US]", "Japanese", "Chinese"],
    platform: ["PC", "Xbox Series X"],
    description: "Fight, farm, build and work alongside mysterious creatures called 'Pals' in this completely new multiplayer open-world survival crafting game.",
    cartImage: {
      id: 1,
      alt: "Palworld cover",
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Palworld gameplay",
        src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 8400,
    stock: 1000,
    timeLeft: { hours: 14 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 20
  },
  {
    id: 32,
    title: "Forza Horizon 5: Premium Edition",
    subtitle: "Ultimate Open-World Racing Tour Across Mexico",
    originalPrice: 99.99,
    salePrice: 49.99,
    taxIncluded: true,
    genre: ["Racing", "Open World", "Simulation"],
    categories: ["Racing", "Simulation"],
    developer: "Playground Games",
    languages: ["English[US]", "Spanish", "German"],
    platform: ["PC", "Xbox Series X"],
    description: "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.",
    cartImage: {
      id: 1,
      alt: "Forza Horizon 5 cover",
      src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Forza Horizon 5 gameplay",
        src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 4100,
    stock: 500,
    timeLeft: { hours: 30 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 50
  },
  {
    id: 33,
    title: "Starfield: Constellation Edition",
    subtitle: "Next-Gen Space Exploration RPG Across 1000 Planets",
    originalPrice: 69.99,
    salePrice: 39.99,
    taxIncluded: true,
    genre: ["Sci-Fi", "RPG", "Space"],
    categories: ["RPG", "Simulation"],
    developer: "Bethesda Game Studios",
    languages: ["English[US]", "French", "German"],
    platform: ["PC", "Xbox Series X"],
    description: "Starfield is the first new universe in 25 years from Bethesda Game Studios. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom.",
    cartImage: {
      id: 1,
      alt: "Starfield cover",
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Starfield gameplay",
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 3100,
    stock: 350,
    timeLeft: { hours: 22 },
    reviews: [],
    isRecent: false,
    isTrending: false,
    isDiscounted: true,
    discountPercent: 43
  },
  {
    id: 34,
    title: "Resident Evil 4 Remake",
    subtitle: "Reimagined Survival Horror Action Masterpiece in Rural Europe",
    originalPrice: 59.99,
    salePrice: 29.99,
    taxIncluded: true,
    genre: ["Horror", "Survival", "Action"],
    categories: ["Horror", "Action"],
    developer: "Capcom",
    languages: ["English[US]", "Japanese", "Spanish"],
    platform: ["PC", "PS5", "Xbox Series X"],
    description: "Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Agent Leon S. Kennedy is sent on a mission to rescue the president's kidnapped daughter from a secluded European village.",
    cartImage: {
      id: 1,
      alt: "Resident Evil 4 Remake cover",
      src: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Resident Evil 4 Remake gameplay",
        src: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 2800,
    stock: 400,
    timeLeft: { hours: 15 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 50
  },
  {
    id: 35,
    title: "Horizon Forbidden West: Complete Edition",
    subtitle: "Aloy's Post-Apocalyptic Frontier Adventure & Burning Shores",
    originalPrice: 59.99,
    salePrice: 39.99,
    taxIncluded: true,
    genre: ["Open World", "Action", "Sci-Fi"],
    categories: ["Adventure", "Action"],
    developer: "Guerrilla Games",
    languages: ["English[US]", "Dutch", "German"],
    platform: ["PC", "PS5"],
    description: "Brave the expansive Forbidden West, confront terrifying majestic machines, and encounter mysterious new tribes as Aloy returns to discover the secret behind the dying biosphere.",
    cartImage: {
      id: 1,
      alt: "Horizon Forbidden West cover",
      src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Horizon Forbidden West gameplay",
        src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 2600,
    stock: 320,
    timeLeft: { hours: 26 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 33
  },
  {
    id: 36,
    title: "Marvel's Spider-Man 2",
    subtitle: "Peter Parker & Miles Morales Symbiote Saga in New York City",
    originalPrice: 69.99,
    salePrice: 49.99,
    taxIncluded: true,
    genre: ["Action", "Superhero", "Open World"],
    categories: ["Action", "Adventure"],
    developer: "Insomniac Games",
    languages: ["English[US]", "Spanish", "French"],
    platform: ["PC", "PS5"],
    description: "Spider-Men Peter Parker and Miles Morales face the ultimate test of strength inside and outside the mask as they fight to save the city, each other and the ones they love from the monstrous Venom.",
    cartImage: {
      id: 1,
      alt: "Spider-Man 2 cover",
      src: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Spider-Man 2 gameplay",
        src: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 3900,
    stock: 500,
    timeLeft: { hours: 32 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 28
  },
  {
    id: 37,
    title: "EA Sports FC 25",
    subtitle: "The World's Game Real-World Football Simulation & FC IQ",
    originalPrice: 69.99,
    salePrice: 34.99,
    taxIncluded: true,
    genre: ["Sports", "Simulation", "Multiplayer"],
    categories: ["Sports", "Simulation"],
    developer: "EA Vancouver",
    languages: ["English[US]", "Spanish", "Portuguese"],
    platform: ["PC", "PS5", "Xbox Series X"],
    description: "EA SPORTS FC 25 gives you more ways to win for the club. Team up with friends in 5v5 Rush, and manage your club to victory with FC IQ delivering tactical control like never before.",
    cartImage: {
      id: 1,
      alt: "EA Sports FC 25 cover",
      src: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "EA Sports FC 25 gameplay",
        src: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 7200,
    stock: 1500,
    timeLeft: { hours: 40 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 50
  },
  {
    id: 38,
    title: "Assassin's Creed Shadows",
    subtitle: "Shinobi Naoe & Samurai Yasuke in Feudal Japan Open World",
    originalPrice: 69.99,
    salePrice: 59.99,
    taxIncluded: true,
    genre: ["Stealth", "Action", "Historical"],
    categories: ["Adventure", "Action"],
    developer: "Ubisoft Quebec",
    languages: ["English[US]", "Japanese", "French"],
    platform: ["PC", "PS5", "Xbox Series X"],
    description: "Experience an epic historical action-adventure set in feudal Japan! Become a lethal shinobi assassin and a powerful legendary samurai as you explore a beautiful open world.",
    cartImage: {
      id: 1,
      alt: "Assassin's Creed Shadows cover",
      src: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Assassin's Creed Shadows gameplay",
        src: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 1900,
    stock: 450,
    timeLeft: { hours: 48 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 14
  },
  {
    id: 39,
    title: "Call of Duty: Black Ops 6",
    subtitle: "Mind-Bending Gulf War Spy Action Campaign & Round-Based Zombies",
    originalPrice: 69.99,
    salePrice: 54.99,
    taxIncluded: true,
    genre: ["FPS", "Shooter", "Multiplayer"],
    categories: ["Action", "PvP"],
    developer: "Treyarch & Raven Software",
    languages: ["English[US]", "French", "German"],
    platform: ["PC", "PS5", "Xbox Series X"],
    description: "Black Ops 6 is a spy action thriller set in the early 90s, a period of transition and upheaval in global politics. Featuring omnimovement, a cinematic campaign, best-in-class multiplayer, and Zombies.",
    cartImage: {
      id: 1,
      alt: "Call of Duty Black Ops 6 cover",
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Call of Duty Black Ops 6 gameplay",
        src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 6800,
    stock: 1200,
    timeLeft: { hours: 24 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 21
  },
  {
    id: 40,
    title: "Monster Hunter Wilds",
    subtitle: "Dynamic Ecosystem Apex Hunting Adventure in the Forbidden Lands",
    originalPrice: 69.99,
    salePrice: 59.99,
    taxIncluded: true,
    genre: ["Action", "RPG", "Co-op"],
    categories: ["Action", "RPG"],
    developer: "Capcom",
    languages: ["English[US]", "Japanese", "Spanish"],
    platform: ["PC", "PS5", "Xbox Series X"],
    description: "The unbridled force of wild nature runs fierce and relentless, with environments transforming dynamically from one moment to the next. Embark on hunts to defeat colossal wild monsters.",
    cartImage: {
      id: 1,
      alt: "Monster Hunter Wilds cover",
      src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Monster Hunter Wilds gameplay",
        src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 2100,
    stock: 550,
    timeLeft: { hours: 36 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 14
  },
  {
    id: 41,
    title: "Tekken 8: Ultimate Edition",
    subtitle: "Aggressive Fighting Game Mishima Saga Powered by Unreal Engine 5",
    originalPrice: 69.99,
    salePrice: 44.99,
    taxIncluded: true,
    genre: ["Fighting", "Action", "PvP"],
    categories: ["Action", "PvP"],
    developer: "Bandai Namco Studios",
    languages: ["English[US]", "Japanese", "French"],
    platform: ["PC", "PS5", "Xbox Series X"],
    description: "Fist Meets Fate! TEKKEN 8 continues the tragic saga of the Mishima bloodline and its world-shaking father-son grudge matches. Powered by Unreal Engine 5 with the brand new Heat System.",
    cartImage: {
      id: 1,
      alt: "Tekken 8 cover",
      src: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Tekken 8 gameplay",
        src: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 3100,
    stock: 400,
    timeLeft: { hours: 18 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 36
  }
];

const jsonPath = path.join(__dirname, '..', 'public', 'data', 'products.json');
const currentGames = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Filter out any IDs already present in new20Games to avoid duplicates
const currentFiltered = currentGames.filter(game => game.id < 22 || game.id > 41);

const combinedGames = [...currentFiltered, ...new20Games];

fs.writeFileSync(jsonPath, JSON.stringify(combinedGames, null, 2), 'utf8');
console.log('Successfully added 20 new games to public/data/products.json. Total count:', combinedGames.length);

const jsPath = path.join(__dirname, '..', 'src', 'data', 'products.js');
const jsContent = `const products = ${JSON.stringify(combinedGames, null, 2)};\n\nexport default products;\n`;
fs.writeFileSync(jsPath, jsContent, 'utf8');
console.log('Successfully updated src/data/products.js');
