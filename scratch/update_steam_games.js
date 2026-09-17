const fs = require('fs');
const path = require('path');

const steamGames = [
  {
    id: 1,
    title: "Black Myth: Wukong",
    subtitle: "Action RPG Rooted in Chinese Mythology & The Legend of the Destined One",
    originalPrice: 59.99,
    salePrice: 49.99,
    taxIncluded: true,
    genre: ["Action", "RPG", "Souls-like"],
    categories: ["Action", "RPG"],
    developer: "Game Science",
    languages: ["English", "Simplified Chinese", "Japanese", "French", "German"],
    platform: ["Steam", "PC", "PS5"],
    description: "Black Myth: Wukong is an action RPG rooted in Chinese mythology. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.",
    cartImage: {
      id: 1,
      alt: "Black Myth Wukong Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Black Myth Wukong Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg"
      },
      {
        id: 2,
        alt: "Black Myth Wukong Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/capsule_616x353.jpg"
      }
    ],
    sold: 4200,
    stock: 500,
    timeLeft: { hours: 24 },
    reviews: [
      {
        user: "WukongFan99",
        rating: 4.9,
        comment: "Breathtaking visuals, incredible boss fights, and peak combat experience!",
        date: "2026-02-14",
        userImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
      }
    ],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 17
  },
  {
    id: 2,
    title: "Elden Ring: Shadow of the Erdtree",
    subtitle: "Epic Fantasy Open-World Masterpiece in the Realm of Shadow",
    originalPrice: 39.99,
    salePrice: 34.99,
    taxIncluded: true,
    genre: ["Open World", "RPG", "Dark Fantasy"],
    categories: ["RPG", "Adventure"],
    developer: "FromSoftware Inc.",
    languages: ["English", "Spanish", "Japanese", "German", "French"],
    platform: ["Steam", "PC", "PS5", "Xbox Series X"],
    description: "Guided by Miquella, players step into the Realm of Shadow, a place obscured by the Erdtree where the goddess Marika first set foot. Uncover dark secrets and defeat ferocious new bosses with mysterious weapons and armor.",
    cartImage: {
      id: 1,
      alt: "Elden Ring Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Elden Ring Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg"
      },
      {
        id: 2,
        alt: "Elden Ring Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg"
      }
    ],
    sold: 5800,
    stock: 650,
    timeLeft: { hours: 48 },
    reviews: [
      {
        user: "Tarnished_One",
        rating: 5.0,
        comment: "FromSoftware pinnacle creation. Level design and boss music are flawless.",
        date: "2026-02-18",
        userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
      }
    ],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 12
  },
  {
    id: 3,
    title: "Helldivers 2",
    subtitle: "Co-op Third-Person Shooter for Super Earth & Managed Democracy",
    originalPrice: 39.99,
    salePrice: 29.99,
    taxIncluded: true,
    genre: ["Co-op", "Shooter", "Action"],
    categories: ["Action", "Multiplayer"],
    developer: "Arrowhead Game Studios",
    languages: ["English", "French", "Italian", "German"],
    platform: ["Steam", "PC", "PS5"],
    description: "The galaxy's last line of offense. Enlist in the Helldivers and join the fight for freedom across a hostile galaxy in a fast, frantic, and ferocious third-person shooter.",
    cartImage: {
      id: 1,
      alt: "Helldivers 2 Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Helldivers 2 Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg"
      },
      {
        id: 2,
        alt: "Helldivers 2 Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/capsule_616x353.jpg"
      }
    ],
    sold: 6200,
    stock: 800,
    timeLeft: { hours: 12 },
    reviews: [
      {
        user: "SuperEarthHero",
        rating: 4.8,
        comment: "For Managed Democracy! Best co-op game in years.",
        date: "2026-01-28",
        userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
      }
    ],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 25
  },
  {
    id: 4,
    title: "Cyberpunk 2077",
    subtitle: "Open-World Action-Adventure RPG Set in Dystopian Night City",
    originalPrice: 59.99,
    salePrice: 29.99,
    taxIncluded: true,
    genre: ["Cyberpunk", "RPG", "Open World"],
    categories: ["RPG", "Action"],
    developer: "CD PROJEKT RED",
    languages: ["English", "Japanese", "German", "Spanish", "French"],
    platform: ["Steam", "PC", "PS5", "Xbox Series X"],
    description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in Night City, a megalopolis obsessed with power, glamour, and body modification. Play as V, a mercenary outlaw, and go after a one-of-a-kind implant.",
    cartImage: {
      id: 1,
      alt: "Cyberpunk 2077 Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Cyberpunk 2077 Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg"
      },
      {
        id: 2,
        alt: "Cyberpunk 2077 Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/capsule_616x353.jpg"
      }
    ],
    sold: 7500,
    stock: 900,
    timeLeft: { hours: 36 },
    reviews: [
      {
        user: "V_NightCity",
        rating: 4.9,
        comment: "With 2.0 update and Ray Tracing, Night City is unmatched in detail!",
        date: "2026-02-10",
        userImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop"
      }
    ],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 50
  },
  {
    id: 5,
    title: "Baldur's Gate 3",
    subtitle: "Next-Generation RPG in Dungeons & Dragons Forgotten Realms",
    originalPrice: 59.99,
    salePrice: 44.99,
    taxIncluded: true,
    genre: ["RPG", "Strategy", "Story-Rich"],
    categories: ["RPG", "Strategy"],
    developer: "Larian Studios",
    languages: ["English", "German", "Spanish", "Simplified Chinese"],
    platform: ["Steam", "PC", "PS5", "Mac"],
    description: "Gather your party and return to the Forgotten Realms in a tale of fellowship, betrayal, sacrifice, survival, and the lure of absolute power. Choose from 12 classes and 11 races from the D&D Player's Handbook.",
    cartImage: {
      id: 1,
      alt: "Baldur's Gate 3 Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Baldur's Gate 3 Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg"
      },
      {
        id: 2,
        alt: "Baldur's Gate 3 Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/capsule_616x353.jpg"
      }
    ],
    sold: 8100,
    stock: 1200,
    timeLeft: { hours: 18 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 25
  },
  {
    id: 6,
    title: "Grand Theft Auto V",
    subtitle: "Open-World Crime Action & Grand Theft Auto Online",
    originalPrice: 29.99,
    salePrice: 14.99,
    taxIncluded: true,
    genre: ["Open World", "Action", "Crime"],
    categories: ["Action", "Open World"],
    developer: "Rockstar North",
    languages: ["English", "French", "Italian", "German", "Spanish"],
    platform: ["Steam", "PC", "PS5", "Xbox Series X"],
    description: "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.",
    cartImage: {
      id: 1,
      alt: "GTA V Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "GTA V Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg"
      },
      {
        id: 2,
        alt: "GTA V Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/capsule_616x353.jpg"
      }
    ],
    sold: 18000,
    stock: 3000,
    timeLeft: { hours: 72 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 50
  },
  {
    id: 7,
    title: "Red Dead Redemption 2",
    subtitle: "America's Wild West Outlaw Story of Arthur Morgan and Van der Linde Gang",
    originalPrice: 59.99,
    salePrice: 19.99,
    taxIncluded: true,
    genre: ["Open World", "Western", "Story-Rich"],
    categories: ["Adventure", "Open World"],
    developer: "Rockstar Games",
    languages: ["English", "Spanish", "Italian", "French"],
    platform: ["Steam", "PC", "PS5", "Xbox Series X"],
    description: "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is an epic tale of honor and loyalty at the dawn of the modern age.",
    cartImage: {
      id: 1,
      alt: "Red Dead Redemption 2 Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Red Dead Redemption 2 Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg"
      },
      {
        id: 2,
        alt: "Red Dead Redemption 2 Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/capsule_616x353.jpg"
      }
    ],
    sold: 12000,
    stock: 1500,
    timeLeft: { hours: 24 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 67
  },
  {
    id: 8,
    title: "God of War Ragnarök",
    subtitle: "Kratos and Atreus Norse Mythological Epic Journey",
    originalPrice: 59.99,
    salePrice: 49.99,
    taxIncluded: true,
    genre: ["Action", "Adventure", "Mythology"],
    categories: ["Action", "Adventure"],
    developer: "Santa Monica Studio / Jetpack Interactive",
    languages: ["English", "French", "Spanish", "German"],
    platform: ["Steam", "PC", "PS5"],
    description: "From Santa Monica Studio comes the sequel to the critically acclaimed God of War (2018). Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go.",
    cartImage: {
      id: 1,
      alt: "God of War Ragnarök Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "God of War Ragnarök Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg"
      },
      {
        id: 2,
        alt: "God of War Ragnarök Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/capsule_616x353.jpg"
      }
    ],
    sold: 4900,
    stock: 700,
    timeLeft: { hours: 16 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 17
  },
  {
    id: 9,
    title: "Counter-Strike 2",
    subtitle: "The Premier Competitive FPS Powered by Source 2 Engine",
    originalPrice: 0,
    salePrice: 0,
    taxIncluded: true,
    genre: ["FPS", "Competitive", "Tactical"],
    categories: ["Action", "PvP", "Free to Play"],
    developer: "Valve",
    languages: ["English", "Spanish", "Russian", "Simplified Chinese"],
    platform: ["Steam", "PC", "Linux"],
    description: "For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. Now the next chapter in the CS saga is here: Counter-Strike 2.",
    cartImage: {
      id: 1,
      alt: "Counter-Strike 2 Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Counter-Strike 2 Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg"
      },
      {
        id: 2,
        alt: "Counter-Strike 2 Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/capsule_616x353.jpg"
      }
    ],
    sold: 9999,
    stock: 9999,
    timeLeft: { hours: 0 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: false,
    discountPercent: 0
  },
  {
    id: 10,
    title: "Dota 2",
    subtitle: "Massive Action RTS MOBA Played by Millions Worldwide",
    originalPrice: 0,
    salePrice: 0,
    taxIncluded: true,
    genre: ["MOBA", "Strategy", "Multiplayer"],
    categories: ["Strategy", "PvP", "Free to Play"],
    developer: "Valve",
    languages: ["English", "Russian", "Simplified Chinese", "Spanish"],
    platform: ["Steam", "PC", "Mac", "Linux"],
    description: "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1000th, there's always something new to discover.",
    cartImage: {
      id: 1,
      alt: "Dota 2 Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Dota 2 Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/header.jpg"
      },
      {
        id: 2,
        alt: "Dota 2 Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/capsule_616x353.jpg"
      }
    ],
    sold: 9999,
    stock: 9999,
    timeLeft: { hours: 0 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: false,
    discountPercent: 0
  },
  {
    id: 11,
    title: "Palworld",
    subtitle: "Open-World Monster Taming & Survival Crafting Multiplayer Game",
    originalPrice: 29.99,
    salePrice: 23.99,
    taxIncluded: true,
    genre: ["Survival", "Open World", "Crafting"],
    categories: ["Simulation", "Adventure"],
    developer: "Pocketpair",
    languages: ["English", "Japanese", "Simplified Chinese"],
    platform: ["Steam", "PC", "Xbox Series X"],
    description: "Fight, farm, build and work alongside mysterious creatures called 'Pals' in this completely new multiplayer open-world survival crafting game.",
    cartImage: {
      id: 1,
      alt: "Palworld Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Palworld Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg"
      },
      {
        id: 2,
        alt: "Palworld Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/capsule_616x353.jpg"
      }
    ],
    sold: 8900,
    stock: 1200,
    timeLeft: { hours: 14 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 20
  },
  {
    id: 12,
    title: "Forza Horizon 5",
    subtitle: "Your Ultimate Horizon Adventure Across Vibrant Mexico Landscapes",
    originalPrice: 59.99,
    salePrice: 29.99,
    taxIncluded: true,
    genre: ["Racing", "Open World", "Simulation"],
    categories: ["Racing", "Simulation"],
    developer: "Playground Games",
    languages: ["English", "Spanish", "German", "French"],
    platform: ["Steam", "PC", "Xbox Series X"],
    description: "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.",
    cartImage: {
      id: 1,
      alt: "Forza Horizon 5 Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Forza Horizon 5 Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg"
      },
      {
        id: 2,
        alt: "Forza Horizon 5 Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/capsule_616x353.jpg"
      }
    ],
    sold: 5100,
    stock: 600,
    timeLeft: { hours: 30 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 50
  },
  {
    id: 13,
    title: "Starfield",
    subtitle: "Next-Gen Space Exploration RPG by Bethesda Game Studios",
    originalPrice: 69.99,
    salePrice: 39.99,
    taxIncluded: true,
    genre: ["Sci-Fi", "RPG", "Space"],
    categories: ["RPG", "Simulation"],
    developer: "Bethesda Game Studios",
    languages: ["English", "French", "German", "Spanish"],
    platform: ["Steam", "PC", "Xbox Series X"],
    description: "Starfield is the first new universe in over 25 years from Bethesda Game Studios. Create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity’s greatest mystery.",
    cartImage: {
      id: 1,
      alt: "Starfield Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Starfield Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/header.jpg"
      },
      {
        id: 2,
        alt: "Starfield Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/capsule_616x353.jpg"
      }
    ],
    sold: 3800,
    stock: 450,
    timeLeft: { hours: 22 },
    reviews: [],
    isRecent: false,
    isTrending: false,
    isDiscounted: true,
    discountPercent: 43
  },
  {
    id: 14,
    title: "Resident Evil 4 Remake",
    subtitle: "Survival Horror Reimagined for Modern Generation",
    originalPrice: 59.99,
    salePrice: 29.99,
    taxIncluded: true,
    genre: ["Horror", "Survival", "Action"],
    categories: ["Horror", "Action"],
    developer: "CAPCOM Co., Ltd.",
    languages: ["English", "Japanese", "Spanish", "French"],
    platform: ["Steam", "PC", "PS5", "Xbox Series X"],
    description: "Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy is sent to rescue the president's kidnapped daughter from a secluded European village.",
    cartImage: {
      id: 1,
      alt: "Resident Evil 4 Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Resident Evil 4 Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg"
      },
      {
        id: 2,
        alt: "Resident Evil 4 Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/capsule_616x353.jpg"
      }
    ],
    sold: 3200,
    stock: 500,
    timeLeft: { hours: 15 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 50
  },
  {
    id: 15,
    title: "Horizon Forbidden West: Complete Edition",
    subtitle: "Explore Distant Lands & Battle Bigger Machines in Post-Apocalyptic Frontier",
    originalPrice: 59.99,
    salePrice: 39.99,
    taxIncluded: true,
    genre: ["Open World", "Action", "Sci-Fi"],
    categories: ["Adventure", "Action"],
    developer: "Guerrilla / Nixxes Software",
    languages: ["English", "Dutch", "German", "French"],
    platform: ["Steam", "PC", "PS5"],
    description: "Brave the expansive Forbidden West, confront terrifying majestic machines, and encounter mysterious new tribes as Aloy returns to discover the secret behind the dying biosphere.",
    cartImage: {
      id: 1,
      alt: "Horizon Forbidden West Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2420110/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Horizon Forbidden West Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2420110/header.jpg"
      },
      {
        id: 2,
        alt: "Horizon Forbidden West Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2420110/capsule_616x353.jpg"
      }
    ],
    sold: 2900,
    stock: 400,
    timeLeft: { hours: 26 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 33
  },
  {
    id: 16,
    title: "Marvel's Spider-Man Remastered",
    subtitle: "Swing Through New York as Experienced Peter Parker",
    originalPrice: 59.99,
    salePrice: 29.99,
    taxIncluded: true,
    genre: ["Action", "Superhero", "Open World"],
    categories: ["Action", "Adventure"],
    developer: "Insomniac Games / Nixxes Software",
    languages: ["English", "Spanish", "French", "German"],
    platform: ["Steam", "PC", "PS5"],
    description: "In Marvel’s Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story. Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel’s New York.",
    cartImage: {
      id: 1,
      alt: "Spider-Man Remastered Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Spider-Man Remastered Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg"
      },
      {
        id: 2,
        alt: "Spider-Man Remastered Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/capsule_616x353.jpg"
      }
    ],
    sold: 4500,
    stock: 600,
    timeLeft: { hours: 32 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 50
  },
  {
    id: 17,
    title: "EA SPORTS FC 25",
    subtitle: "The World's Game Real-World Football Simulation with FC IQ & 5v5 Rush",
    originalPrice: 69.99,
    salePrice: 34.99,
    taxIncluded: true,
    genre: ["Sports", "Simulation", "Multiplayer"],
    categories: ["Sports", "Simulation"],
    developer: "EA Canada",
    languages: ["English", "Spanish", "Portuguese", "French"],
    platform: ["Steam", "PC", "PS5", "Xbox Series X"],
    description: "EA SPORTS FC 25 gives you more ways to win for the club. Team up with friends in 5v5 Rush, and manage your club to victory with FC IQ delivering tactical control like never before.",
    cartImage: {
      id: 1,
      alt: "EA Sports FC 25 Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "EA Sports FC 25 Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg"
      },
      {
        id: 2,
        alt: "EA Sports FC 25 Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/capsule_616x353.jpg"
      }
    ],
    sold: 8200,
    stock: 1500,
    timeLeft: { hours: 40 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 50
  },
  {
    id: 18,
    title: "Call of Duty: Black Ops 6",
    subtitle: "Mind-Bending Gulf War Spy Action Campaign & Round-Based Zombies",
    originalPrice: 69.99,
    salePrice: 54.99,
    taxIncluded: true,
    genre: ["FPS", "Shooter", "Multiplayer"],
    categories: ["Action", "PvP"],
    developer: "Treyarch / Raven Software",
    languages: ["English", "French", "German", "Spanish"],
    platform: ["Steam", "PC", "PS5", "Xbox Series X"],
    description: "Black Ops 6 is a spy action thriller set in the early 90s, a period of transition and upheaval in global politics. Featuring omnimovement, a cinematic campaign, best-in-class multiplayer, and Zombies.",
    cartImage: {
      id: 1,
      alt: "Call of Duty Black Ops 6 Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Call of Duty Black Ops 6 Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg"
      },
      {
        id: 2,
        alt: "Call of Duty Black Ops 6 Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/capsule_616x353.jpg"
      }
    ],
    sold: 7100,
    stock: 1300,
    timeLeft: { hours: 24 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 21
  },
  {
    id: 19,
    title: "Monster Hunter Wilds",
    subtitle: "Dynamic Ecosystem Apex Hunting Adventure in the Forbidden Lands",
    originalPrice: 69.99,
    salePrice: 59.99,
    taxIncluded: true,
    genre: ["Action", "RPG", "Co-op"],
    categories: ["Action", "RPG"],
    developer: "CAPCOM Co., Ltd.",
    languages: ["English", "Japanese", "Spanish", "French"],
    platform: ["Steam", "PC", "PS5", "Xbox Series X"],
    description: "The unbridled force of wild nature runs fierce and relentless, with environments transforming dynamically from one moment to the next. Embark on hunts to defeat colossal wild monsters.",
    cartImage: {
      id: 1,
      alt: "Monster Hunter Wilds Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Monster Hunter Wilds Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/header.jpg"
      },
      {
        id: 2,
        alt: "Monster Hunter Wilds Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/capsule_616x353.jpg"
      }
    ],
    sold: 2300,
    stock: 600,
    timeLeft: { hours: 36 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 14
  },
  {
    id: 20,
    title: "Tekken 8",
    subtitle: "Aggressive Fighting Game Mishima Saga Powered by Unreal Engine 5",
    originalPrice: 69.99,
    salePrice: 44.99,
    taxIncluded: true,
    genre: ["Fighting", "Action", "PvP"],
    categories: ["Action", "PvP"],
    developer: "Bandai Namco Studios Inc.",
    languages: ["English", "Japanese", "French", "Spanish"],
    platform: ["Steam", "PC", "PS5", "Xbox Series X"],
    description: "Fist Meets Fate! TEKKEN 8 continues the tragic saga of the Mishima bloodline and its world-shaking father-son grudge matches. Powered by Unreal Engine 5 with the brand new Heat System.",
    cartImage: {
      id: 1,
      alt: "Tekken 8 Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Tekken 8 Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/header.jpg"
      },
      {
        id: 2,
        alt: "Tekken 8 Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/capsule_616x353.jpg"
      }
    ],
    sold: 3400,
    stock: 450,
    timeLeft: { hours: 18 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 36
  },
  {
    id: 21,
    title: "Ghost of Tsushima DIRECTOR'S CUT",
    subtitle: "Samurai Action Adventure Across Feudal Japan & Iki Island",
    originalPrice: 59.99,
    salePrice: 39.99,
    taxIncluded: true,
    genre: ["Open World", "Action", "Stealth"],
    categories: ["Adventure", "Action"],
    developer: "Sucker Punch Productions / Nixxes Software",
    languages: ["English", "Japanese", "French", "Spanish"],
    platform: ["Steam", "PC", "PS5"],
    description: "Forge a new path and wage an unconventional war for the freedom of Tsushima. Challenge opponents with your katana, master the bow, and develop stealth tactics to eliminate enemies as Jin Sakai.",
    cartImage: {
      id: 1,
      alt: "Ghost of Tsushima Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Ghost of Tsushima Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg"
      },
      {
        id: 2,
        alt: "Ghost of Tsushima Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/capsule_616x353.jpg"
      }
    ],
    sold: 3900,
    stock: 500,
    timeLeft: { hours: 36 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 33
  },
  {
    id: 22,
    title: "The Witcher 3: Wild Hunt",
    subtitle: "Story-Driven Open-World RPG Monster Slayer Geralt of Rivia",
    originalPrice: 39.99,
    salePrice: 9.99,
    taxIncluded: true,
    genre: ["RPG", "Open World", "Fantasy"],
    categories: ["RPG", "Adventure"],
    developer: "CD PROJEKT RED",
    languages: ["English", "Polish", "German", "French", "Spanish"],
    platform: ["Steam", "PC", "PS5", "Xbox Series X"],
    description: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy.",
    cartImage: {
      id: 1,
      alt: "The Witcher 3 Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "The Witcher 3 Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg"
      },
      {
        id: 2,
        alt: "The Witcher 3 Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/capsule_616x353.jpg"
      }
    ],
    sold: 21000,
    stock: 3000,
    timeLeft: { hours: 48 },
    reviews: [
      {
        user: "GeraltFanatic",
        rating: 5.0,
        comment: "The greatest RPG ever made. Bloody Baron questline alone is legendary.",
        date: "2026-01-10",
        userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
      }
    ],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 75
  },
  {
    id: 23,
    title: "Apex Legends",
    subtitle: "Free-to-Play Hero Shooter & Battle Royale",
    originalPrice: 0,
    salePrice: 0,
    taxIncluded: true,
    genre: ["Battle Royale", "FPS", "Hero Shooter"],
    categories: ["Action", "PvP", "Free to Play"],
    developer: "Respawn Entertainment",
    languages: ["English", "Japanese", "French", "Spanish"],
    platform: ["Steam", "PC", "PS5", "Xbox Series X"],
    description: "Conquer with character in Apex Legends, a free-to-play Hero shooter where legendary characters with powerful abilities team up to battle for fame & fortune on the fringes of the Frontier.",
    cartImage: {
      id: 1,
      alt: "Apex Legends Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Apex Legends Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg"
      },
      {
        id: 2,
        alt: "Apex Legends Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/capsule_616x353.jpg"
      }
    ],
    sold: 9999,
    stock: 9999,
    timeLeft: { hours: 0 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: false,
    discountPercent: 0
  },
  {
    id: 24,
    title: "Stardew Valley",
    subtitle: "Charming Countryside Life Sim & Farming RPG",
    originalPrice: 14.99,
    salePrice: 9.99,
    taxIncluded: true,
    genre: ["Farming", "Life Sim", "RPG"],
    categories: ["Simulation", "Casual"],
    developer: "ConcernedApe",
    languages: ["English", "Japanese", "German", "Spanish", "French"],
    platform: ["Steam", "PC", "Mac", "Switch"],
    description: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life in the country!",
    cartImage: {
      id: 1,
      alt: "Stardew Valley Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Stardew Valley Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg"
      },
      {
        id: 2,
        alt: "Stardew Valley Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg"
      }
    ],
    sold: 14000,
    stock: 2500,
    timeLeft: { hours: 10 },
    reviews: [
      {
        user: "CozyGamer",
        rating: 5.0,
        comment: "Pure perfection. Hundreds of hours of comforting gameplay.",
        date: "2026-02-05",
        userImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
      }
    ],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 33
  },
  {
    id: 25,
    title: "Rust",
    subtitle: "Brutal Multiplayer Open-World Survival & Base Building",
    originalPrice: 39.99,
    salePrice: 26.79,
    taxIncluded: true,
    genre: ["Survival", "Crafting", "Open World"],
    categories: ["Simulation", "PvP"],
    developer: "Facepunch Studios",
    languages: ["English", "Russian", "French", "German"],
    platform: ["Steam", "PC", "PS5"],
    description: "The only goal in Rust is to survive. Overcome struggles such as hunger, thirst and cold. Build a fire. Build a shelter. Kill animals for meat. Protect yourself from other players, and kill them for meat. Create alliances with other players and form a town.",
    cartImage: {
      id: 1,
      alt: "Rust Steam cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Rust Steam header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg"
      },
      {
        id: 2,
        alt: "Rust Steam capsule",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/capsule_616x353.jpg"
      }
    ],
    sold: 9100,
    stock: 1100,
    timeLeft: { hours: 16 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 33
  }
];

const jsonPath = path.join(__dirname, '..', 'public', 'data', 'products.json');
fs.writeFileSync(jsonPath, JSON.stringify(steamGames, null, 2), 'utf8');
console.log('Successfully updated public/data/products.json with official Steam CDN images. Total:', steamGames.length);

const jsPath = path.join(__dirname, '..', 'src', 'data', 'products.js');
const jsContent = `const products = ${JSON.stringify(steamGames, null, 2)};\n\nexport default products;\n`;
fs.writeFileSync(jsPath, jsContent, 'utf8');
console.log('Successfully updated src/data/products.js');
