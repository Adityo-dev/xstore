const fs = require('fs');
const path = require('path');

const fullStoreProducts = [
  // -------------------------------------------------------------
  // 1. DIGITAL GAMES & KEYS
  // -------------------------------------------------------------
  {
    id: 1,
    title: "Black Myth: Wukong",
    subtitle: "Action RPG Rooted in Chinese Mythology & The Legend of Wukong",
    originalPrice: 59.99,
    salePrice: 49.99,
    taxIncluded: true,
    genre: ["Action", "RPG", "Souls-like"],
    categories: ["Digital Games", "Action", "RPG"],
    developer: "Game Science",
    languages: ["English", "Simplified Chinese", "Japanese", "French"],
    platform: ["Steam", "PC", "PS5"],
    description: "Black Myth: Wukong is an action RPG rooted in Chinese mythology. Set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath a glorious legend.",
    cartImage: {
      id: 1,
      alt: "Black Myth Wukong Steam Cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Black Myth Wukong Steam Header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg"
      },
      {
        id: 2,
        alt: "Black Myth Wukong Capsule",
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
    categories: ["Digital Games", "RPG"],
    developer: "FromSoftware Inc.",
    languages: ["English", "Spanish", "Japanese", "German"],
    platform: ["Steam", "PC", "PS5", "Xbox Series X"],
    description: "Guided by Miquella, players step into the Realm of Shadow, a place obscured by the Erdtree where goddess Marika first set foot. Uncover dark secrets and defeat ferocious new bosses.",
    cartImage: {
      id: 1,
      alt: "Elden Ring Steam Cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Elden Ring Header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg"
      }
    ],
    sold: 5800,
    stock: 650,
    timeLeft: { hours: 48 },
    reviews: [],
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
    categories: ["Digital Games", "Action"],
    developer: "Arrowhead Game Studios",
    languages: ["English", "French", "Italian", "German"],
    platform: ["Steam", "PC", "PS5"],
    description: "The galaxy's last line of offense. Enlist in the Helldivers and join the fight for freedom across a hostile galaxy in a fast, frantic, and ferocious third-person shooter.",
    cartImage: {
      id: 1,
      alt: "Helldivers 2 Steam Cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Helldivers 2 Header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg"
      }
    ],
    sold: 6200,
    stock: 800,
    timeLeft: { hours: 12 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 25
  },
  {
    id: 4,
    title: "Cyberpunk 2077: Phantom Liberty",
    subtitle: "Open-World Spy Thriller Expansion Set in Dogtown Night City",
    originalPrice: 59.99,
    salePrice: 29.99,
    taxIncluded: true,
    genre: ["Cyberpunk", "RPG", "Open World"],
    categories: ["Digital Games", "RPG"],
    developer: "CD PROJEKT RED",
    languages: ["English", "Japanese", "German", "Spanish"],
    platform: ["Steam", "PC", "PS5", "Xbox Series X"],
    description: "Return as cyber-enhanced mercenary V and embark on a high-stakes mission of espionage and intrigue to save the NUSA President in Dogtown.",
    cartImage: {
      id: 1,
      alt: "Cyberpunk 2077 Steam Cover",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Cyberpunk 2077 Header",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg"
      }
    ],
    sold: 7500,
    stock: 900,
    timeLeft: { hours: 36 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 50
  },

  // -------------------------------------------------------------
  // 2. GAMING GEAR & PERIPHERALS
  // -------------------------------------------------------------
  {
    id: 101,
    title: "Razer Viper V3 Pro Ultra-Lightweight Wireless Gaming Mouse",
    subtitle: "54g Ultra-Light Esports Mouse with 35K Focus Pro Sensor & 8000Hz Polling",
    originalPrice: 159.99,
    salePrice: 139.99,
    taxIncluded: true,
    genre: ["Gaming Gear", "Mice", "Wireless"],
    categories: ["Gaming Gear", "Mice"],
    developer: "Razer Inc.",
    languages: ["English"],
    platform: ["PC", "Mac"],
    description: "Engineered in collaboration with world-class esports pros, the Razer Viper V3 Pro offers ultra-lightweight ergonomics, a 35,000 DPI Focus Pro sensor, and up to 8000Hz wireless polling rate.",
    cartImage: {
      id: 1,
      alt: "Razer Viper V3 Pro",
      src: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Razer Viper V3 Pro",
        src: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 142,
    stock: 50,
    timeLeft: { hours: 18 },
    reviews: [
      {
        user: "Tanvir Hasan",
        rating: 4.9,
        comment: "Extremely lightweight and pinpoint accurate sensor. Fits the dark setup perfectly!",
        date: "2026-02-14",
        userImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
      }
    ],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 12
  },
  {
    id: 102,
    title: "Keychron Q1 Max Wireless Custom Mechanical Keyboard (RGB)",
    subtitle: "Full CNC Aluminum 75% Layout with QMK/VIA & Hot-Swap Gateron Switches",
    originalPrice: 219.99,
    salePrice: 189.99,
    taxIncluded: true,
    genre: ["Gaming Gear", "Keyboards", "Mechanical"],
    categories: ["Gaming Gear", "Keyboards"],
    developer: "Keychron",
    languages: ["English"],
    platform: ["PC", "Mac", "Linux"],
    description: "CNC machined aluminum body, 2.4GHz wireless & Bluetooth 5.1, double-gasket acoustic design, pre-lubed Gateron Jupiter mechanical switches, and customizable south-facing RGB lighting.",
    cartImage: {
      id: 1,
      alt: "Keychron Q1 Max Keyboard",
      src: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Keychron Q1 Max Keyboard",
        src: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 88,
    stock: 20,
    timeLeft: { hours: 36 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 14
  },
  {
    id: 103,
    title: "SteelSeries Arctis Nova Pro Wireless Gaming Headset",
    subtitle: "Active Noise Cancellation (ANC) & Hot-Swappable Dual Battery System",
    originalPrice: 349.99,
    salePrice: 299.99,
    taxIncluded: true,
    genre: ["Gaming Gear", "Headsets", "Audio"],
    categories: ["Gaming Gear", "Headsets"],
    developer: "SteelSeries",
    languages: ["English"],
    platform: ["PC", "PS5", "Xbox", "Switch"],
    description: "Ultimate gaming audio system with Nova Pro Acoustic System, Active Noise Cancellation (ANC), infinite power system with hot-swappable batteries, and GameDAC Gen 2 multi-system OLED station.",
    cartImage: {
      id: 1,
      alt: "SteelSeries Arctis Nova Pro",
      src: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "SteelSeries Arctis Nova Pro",
        src: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 175,
    stock: 30,
    timeLeft: { hours: 20 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 14
  },
  {
    id: 104,
    title: "Corsair MM700 RGB Extended Cloth Gaming Desk Pad",
    subtitle: "930mm x 400mm 360-Degree 3-Zone Dynamic RGB Lighting Pad",
    originalPrice: 59.99,
    salePrice: 44.99,
    taxIncluded: true,
    genre: ["Gaming Gear", "RGB Accessories"],
    categories: ["Gaming Gear", "RGB Accessories"],
    developer: "Corsair",
    languages: ["English"],
    platform: ["PC", "Mac"],
    description: "Massive 930mm x 400mm surface easily accommodates your mouse and keyboard, featuring 360-degree 3-zone RGB illumination, integrated 2-port USB hub, and glide-enhanced woven textile surface.",
    cartImage: {
      id: 1,
      alt: "Corsair MM700 RGB Mouse Pad",
      src: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Corsair MM700 RGB Mouse Pad",
        src: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 215,
    stock: 60,
    timeLeft: { hours: 40 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 25
  },

  // -------------------------------------------------------------
  // 3. STREAMING & CONTENT CREATOR EQUIPMENT
  // -------------------------------------------------------------
  {
    id: 201,
    title: "Elgato Stream Deck MK.2 Studio Controller",
    subtitle: "15 Customizable LCD Keys for Live Stream Control & Studio Automation",
    originalPrice: 149.99,
    salePrice: 129.99,
    taxIncluded: true,
    genre: ["Streaming Gear", "Studio"],
    categories: ["Streaming Gear", "Studio Equipment"],
    developer: "Corsair / Elgato",
    languages: ["English"],
    platform: ["PC", "Mac"],
    description: "15 tactile LCD keys ready to trigger unlimited actions. One-touch tactile operation lets you control apps, launch social posts, adjust audio, mute mic, turn on lights, and switch scenes in OBS.",
    cartImage: {
      id: 1,
      alt: "Elgato Stream Deck MK.2",
      src: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Elgato Stream Deck MK.2",
        src: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 310,
    stock: 45,
    timeLeft: { hours: 15 },
    reviews: [
      {
        user: "StreamerPro",
        rating: 5.0,
        comment: "Essential tool for any live streamer. Speeds up my stream workflow tenfold.",
        date: "2026-03-02",
        userImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
      }
    ],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 13
  },
  {
    id: 202,
    title: "HyperX QuadCast S RGB USB Condenser Microphone",
    subtitle: "Anti-Vibration Shock Mount & Customizable RGB Lighting for Streaming",
    originalPrice: 159.99,
    salePrice: 129.99,
    taxIncluded: true,
    genre: ["Streaming Gear", "Microphones", "RGB Accessories"],
    categories: ["Streaming Gear", "Microphones"],
    developer: "HyperX",
    languages: ["English"],
    platform: ["PC", "PS5", "Mac"],
    description: "Stunning RGB condenser microphone with built-in anti-vibration shock mount, tap-to-mute sensor with LED indicator, 4 selectable polar patterns, and gain control adjustment dial.",
    cartImage: {
      id: 1,
      alt: "HyperX QuadCast S",
      src: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "HyperX QuadCast S",
        src: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 420,
    stock: 60,
    timeLeft: { hours: 22 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 19
  },

  // -------------------------------------------------------------
  // 4. TECH GADGETS & SUBSCRIPTIONS
  // -------------------------------------------------------------
  {
    id: 301,
    title: "Valve Steam Deck OLED (1TB Edition)",
    subtitle: "7.4-Inch HDR OLED Display 90Hz & 50Wh Battery Life Portable Gaming",
    originalPrice: 649.99,
    salePrice: 599.99,
    taxIncluded: true,
    genre: ["Handheld Console", "Tech Gadget"],
    categories: ["Tech Gadgets", "Handheld Consoles"],
    developer: "Valve",
    languages: ["English", "Japanese", "French", "German"],
    platform: ["SteamOS", "PC"],
    description: "The ultimate handheld gaming PC featuring a vibrant 7.4-inch 90Hz HDR OLED screen, custom 6nm AMD APU, Wi-Fi 6E connectivity, premium etched anti-glare glass, and carrying case.",
    cartImage: {
      id: 1,
      alt: "Steam Deck OLED",
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Steam Deck OLED",
        src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 520,
    stock: 30,
    timeLeft: { hours: 10 },
    reviews: [
      {
        user: "GamerOnTheGo",
        rating: 5.0,
        comment: "OLED display is gorgeous. Plays my entire Steam library seamlessly!",
        date: "2026-02-28",
        userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
      }
    ],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 8
  },
  {
    id: 302,
    title: "Xbox Game Pass Ultimate - 12 Month Subscription Key",
    subtitle: "Over 100+ High-Quality Games & Day-One Releases on PC & Console",
    originalPrice: 203.88,
    salePrice: 149.99,
    taxIncluded: true,
    genre: ["Subscription", "Digital Membership"],
    categories: ["Subscriptions", "Digital Keys"],
    developer: "Microsoft Xbox",
    languages: ["Global"],
    platform: ["PC", "Xbox", "Cloud"],
    description: "Get all the benefits of Xbox Game Pass Ultimate for 12 full months. Includes EA Play membership, day-one flagship releases, online multiplayer, and Xbox Cloud Gaming on all devices.",
    cartImage: {
      id: 1,
      alt: "Xbox Game Pass Ultimate",
      src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg"
    },
    images: [
      {
        id: 1,
        alt: "Xbox Game Pass Ultimate",
        src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg"
      }
    ],
    sold: 1250,
    stock: 500,
    timeLeft: { hours: 48 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 26
  }
];

const jsonPath = path.join(__dirname, '..', 'public', 'data', 'products.json');
fs.writeFileSync(jsonPath, JSON.stringify(fullStoreProducts, null, 2), 'utf8');
console.log('Successfully written full store dataset to public/data/products.json. Total count:', fullStoreProducts.length);

const jsPath = path.join(__dirname, '..', 'src', 'data', 'products.js');
const jsContent = `const products = ${JSON.stringify(fullStoreProducts, null, 2)};\n\nexport default products;\n`;
fs.writeFileSync(jsPath, jsContent, 'utf8');
console.log('Successfully updated src/data/products.js');
