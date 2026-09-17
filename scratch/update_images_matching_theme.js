const fs = require('fs');
const path = require('path');

// Curated high quality Unsplash dark-themed images matching #18191c background and #23262F cards
const darkThemeProducts = [
  {
    id: 101,
    title: "Razer Viper V3 Pro Ultra-Lightweight Wireless Gaming Mouse",
    subtitle: "54g Ultra-Light Esports Mouse with 35K Focus Pro Sensor",
    originalPrice: 159.99,
    salePrice: 139.99,
    taxIncluded: true,
    genre: ["Gaming Mouse", "Peripherals", "Wireless"],
    categories: ["Gaming Mouse", "Peripherals"],
    developer: "Razer Inc.",
    languages: ["English"],
    platform: ["PC", "Mac"],
    description: "Engineered in collaboration with world-class esports pros, the Razer Viper V3 Pro offers ultra-lightweight ergonomics, a 35,000 DPI Focus Pro sensor, and up to 8000Hz wireless polling rate.",
    cartImage: {
      id: 1,
      alt: "Razer Viper V3 Pro Gaming Mouse",
      src: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Razer Viper V3 Pro Gaming Mouse",
        src: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: 2,
        alt: "Gaming Mouse RGB setup",
        src: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop"
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
    title: "Logitech G PRO X Superlight 2 Lightspeed Gaming Mouse",
    subtitle: "LIGHTFORCE Hybrid Switches & HERO 2 Sensor",
    originalPrice: 149.99,
    salePrice: 129.99,
    taxIncluded: true,
    genre: ["Gaming Mouse", "Peripherals", "Wireless"],
    categories: ["Gaming Mouse", "Peripherals"],
    developer: "Logitech G",
    languages: ["English"],
    platform: ["PC", "Mac"],
    description: "Icon of esports evolution weighing under 60g, featuring HERO 2 sensor with sub-micron tracking, LIGHTFORCE hybrid optical-mechanical switches, and zero-additive PTFE feet.",
    cartImage: {
      id: 1,
      alt: "Logitech G PRO X Superlight 2",
      src: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Logitech G PRO X Superlight 2",
        src: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 210,
    stock: 35,
    timeLeft: { hours: 24 },
    reviews: [
      {
        user: "Abrar Chowdhury",
        rating: 5.0,
        comment: "Flawless battery life and smooth glide.",
        date: "2026-02-18",
        userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
      }
    ],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 13
  },
  {
    id: 103,
    title: "SteelSeries Rival 650 RGB Ergonomic Wireless Mouse",
    subtitle: "Quantum 2.0 Dual Sensor & 8-Zone Dynamic RGB",
    originalPrice: 119.99,
    salePrice: 89.99,
    taxIncluded: true,
    genre: ["Gaming Mouse", "RGB Accessories", "Peripherals"],
    categories: ["Gaming Mouse", "RGB Accessories"],
    developer: "SteelSeries",
    languages: ["English"],
    platform: ["PC", "Mac"],
    description: "Dual sensor system combines TrueMove3 optical sensor with depth sensor for true 1-to-1 tracking and instant lift-off detection. Features customizable weight tuning and 8-zone RGB lighting.",
    cartImage: {
      id: 1,
      alt: "SteelSeries Rival 650 RGB",
      src: "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "SteelSeries Rival 650 RGB",
        src: "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 95,
    stock: 40,
    timeLeft: { hours: 12 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 25
  },
  {
    id: 104,
    title: "Keychron Q1 Max Wireless Custom Mechanical Keyboard (RGB)",
    subtitle: "Full Aluminum 75% Layout with QMK/VIA & Hot-Swap",
    originalPrice: 219.99,
    salePrice: 189.99,
    taxIncluded: true,
    genre: ["Keyboard", "Mechanical Keyboard", "Wireless"],
    categories: ["Keyboard", "Peripherals"],
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
    reviews: [
      {
        user: "Nabil Ahmed",
        rating: 4.9,
        comment: "Sounds amazing right out of the box. Premium aluminum feel!",
        date: "2026-03-01",
        userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
      }
    ],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 14
  },
  {
    id: 105,
    title: "ASUS ROG Azoth 75% Custom Wireless Gaming Keyboard",
    subtitle: "OLED Smart Display & Tri-Mode Connectivity",
    originalPrice: 249.99,
    salePrice: 199.99,
    taxIncluded: true,
    genre: ["Keyboard", "Mechanical Keyboard", "RGB Accessories"],
    categories: ["Keyboard", "Peripherals"],
    developer: "ASUS ROG",
    languages: ["English"],
    platform: ["PC", "Mac"],
    description: "75% form factor keyboard with built-in OLED display, 3-way control knob, gasket mount structure with 3 layers of dampening foam, and hot-swappable ROG NX mechanical switches.",
    cartImage: {
      id: 1,
      alt: "ASUS ROG Azoth Keyboard",
      src: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "ASUS ROG Azoth Keyboard",
        src: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 64,
    stock: 15,
    timeLeft: { hours: 48 },
    reviews: [],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 20
  },
  {
    id: 106,
    title: "Corsair K100 RGB Optical-Mechanical Gaming Keyboard",
    subtitle: "OPX Switches & 44-Zone LightEdge Surround",
    originalPrice: 229.99,
    salePrice: 179.99,
    taxIncluded: true,
    genre: ["Keyboard", "RGB Accessories", "Peripherals"],
    categories: ["Keyboard", "RGB Accessories"],
    developer: "Corsair",
    languages: ["English"],
    platform: ["PC", "Mac"],
    description: "Cutting-edge optical-mechanical switches with 1.0mm actuation, iCUE control wheel, dedicated macro keys with Elgato Stream Deck integration, and 44-zone RGB ambient lighting surround.",
    cartImage: {
      id: 1,
      alt: "Corsair K100 RGB Keyboard",
      src: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Corsair K100 RGB Keyboard",
        src: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 110,
    stock: 25,
    timeLeft: { hours: 15 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 22
  },
  {
    id: 107,
    title: "SteelSeries Arctis Nova Pro Wireless Gaming Headset",
    subtitle: "Active Noise Cancellation & Dual Battery Swap",
    originalPrice: 349.99,
    salePrice: 299.99,
    taxIncluded: true,
    genre: ["Headset", "Audio", "Wireless"],
    categories: ["Headset", "Peripherals"],
    developer: "SteelSeries",
    languages: ["English"],
    platform: ["PC", "PS5", "Xbox", "Switch"],
    description: "Ultimate gaming audio system with Nova Pro Acoustic System, Active Noise Cancellation (ANC), infinite power system with hot-swappable batteries, and GameDAC Gen 2 multi-system OLED station.",
    cartImage: {
      id: 1,
      alt: "SteelSeries Arctis Nova Pro Headset",
      src: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "SteelSeries Arctis Nova Pro Headset",
        src: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 175,
    stock: 30,
    timeLeft: { hours: 20 },
    reviews: [
      {
        user: "Sajid Khan",
        rating: 5.0,
        comment: "Best noise cancellation and crystal clear audio balance for FPS games.",
        date: "2026-02-25",
        userImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop"
      }
    ],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 14
  },
  {
    id: 108,
    title: "Razer BlackShark V2 Pro Wireless Esports Headset",
    subtitle: "HyperClear Super Wideband Mic & 50mm Titanium Drivers",
    originalPrice: 199.99,
    salePrice: 169.99,
    taxIncluded: true,
    genre: ["Headset", "Audio", "Wireless"],
    categories: ["Headset", "Peripherals"],
    developer: "Razer Inc.",
    languages: ["English"],
    platform: ["PC", "PS5"],
    description: "Esports wireless headset featuring next-generation detachable wideband microphone, TriForce Titanium 50mm drivers, THX Spatial Audio, and up to 70 hours of battery life with Type-C fast charging.",
    cartImage: {
      id: 1,
      alt: "Razer BlackShark V2 Pro Headset",
      src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Razer BlackShark V2 Pro Headset",
        src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 130,
    stock: 45,
    timeLeft: { hours: 30 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 15
  },
  {
    id: 109,
    title: "Corsair MM700 RGB Extended Cloth Gaming Mouse Pad",
    subtitle: "930mm x 400mm 3-Zone Dynamic RGB Lighting",
    originalPrice: 59.99,
    salePrice: 44.99,
    taxIncluded: true,
    genre: ["RGB Accessories", "Gaming Setup", "Peripherals"],
    categories: ["RGB Accessories", "Peripherals"],
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
  {
    id: 110,
    title: "Govee RGBIC Neon Gaming LED Desk Light Bar & Strip Set",
    subtitle: "Razer Chroma RGB Sync & Smart App Control",
    originalPrice: 89.99,
    salePrice: 69.99,
    taxIncluded: true,
    genre: ["RGB Accessories", "Gaming Setup"],
    categories: ["RGB Accessories", "Setup"],
    developer: "Govee",
    languages: ["English"],
    platform: ["PC", "Mobile"],
    description: "Transform your gaming room atmosphere with customizable RGBIC neon rope light. Syncs seamlessly with PC games via Razer Chroma and Corsair iCUE, featuring real-time audio visualization.",
    cartImage: {
      id: 1,
      alt: "Govee RGBIC Neon Gaming Light",
      src: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Govee RGBIC Neon Gaming Light",
        src: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 190,
    stock: 75,
    timeLeft: { hours: 10 },
    reviews: [
      {
        user: "Rifat Karim",
        rating: 4.8,
        comment: "The lighting sync with gameplay is unreal! Looks insane at night.",
        date: "2026-03-05",
        userImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop"
      }
    ],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 22
  },
  {
    id: 111,
    title: "Razer Base Station V2 Chroma RGB Headset Stand",
    subtitle: "Integrated 7.1 Surround DAC & Dual USB 3.1 Hub",
    originalPrice: 79.99,
    salePrice: 59.99,
    taxIncluded: true,
    genre: ["RGB Accessories", "Headset", "Peripherals"],
    categories: ["RGB Accessories", "Headset"],
    developer: "Razer Inc.",
    languages: ["English"],
    platform: ["PC"],
    description: "Premium metallic headset stand with anti-slip base, built-in 3.5mm DAC with 7.1 surround sound, two USB 3.1 SuperSpeed ports, and 16.8 million color Razer Chroma RGB underglow.",
    cartImage: {
      id: 1,
      alt: "Razer Base Station V2 Chroma Stand",
      src: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "Razer Base Station V2 Chroma Stand",
        src: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 80,
    stock: 30,
    timeLeft: { hours: 24 },
    reviews: [],
    isRecent: false,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 25
  },
  {
    id: 112,
    title: "CyberSmith 2077: Phantom Protocol",
    subtitle: "Next-Gen Cyberpunk Action RPG & Ray Tracing Overdrive",
    originalPrice: 59.99,
    salePrice: 39.99,
    taxIncluded: true,
    genre: ["Action", "RPG", "Cyberpunk"],
    categories: ["Games", "Action", "RPG"],
    developer: "CD Projekt Red",
    languages: ["English", "Japanese", "German"],
    platform: ["PC", "PS5", "Xbox Series X"],
    description: "Immerse yourself in Night City's dark futuristic underground. Featuring next-gen Ray Tracing Overdrive, massive skill tree overhaul, cyberware enhancements, and intense shooter combat.",
    cartImage: {
      id: 1,
      alt: "CyberSmith 2077 Game Cover",
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
    },
    images: [
      {
        id: 1,
        alt: "CyberSmith 2077 Game Cover",
        src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
      }
    ],
    sold: 340,
    stock: 200,
    timeLeft: { hours: 48 },
    reviews: [
      {
        user: "Jordan Lee",
        rating: 4.9,
        comment: "Visual masterpiece with engaging story!",
        date: "2026-01-20",
        userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
      }
    ],
    isRecent: true,
    isTrending: true,
    isDiscounted: true,
    discountPercent: 33
  }
];

const jsonPath = path.join(__dirname, '..', 'public', 'data', 'products.json');
const existingJson = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Filter out old hardware IDs (101 to 112) if present and replace with color-matched ones
const filteredExisting = existingJson.filter(item => item.id < 101 || item.id > 112);

// Fix broken i.ibb.co images in existing items to high quality dark unsplash images
const fixedExisting = filteredExisting.map(item => {
  if (!item.cartImage || item.cartImage.src.includes('ibb.co')) {
    item.cartImage = {
      id: 1,
      alt: item.title,
      src: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop"
    };
  }
  if (item.images && Array.isArray(item.images)) {
    item.images = item.images.map(img => {
      if (img.src && img.src.includes('ibb.co')) {
        return { ...img, src: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop" };
      }
      return img;
    });
  }
  return item;
});

const combined = [...darkThemeProducts, ...fixedExisting];

fs.writeFileSync(jsonPath, JSON.stringify(combined, null, 2), 'utf8');
console.log('Updated public/data/products.json with theme color-matched images. Total:', combined.length);

const jsPath = path.join(__dirname, '..', 'src', 'data', 'products.js');
const jsContent = `const products = ${JSON.stringify(combined, null, 2)};\n\nexport default products;\n`;
fs.writeFileSync(jsPath, jsContent, 'utf8');
console.log('Updated src/data/products.js');
