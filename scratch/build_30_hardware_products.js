const fs = require('fs');
const path = require('path');

const products = [
  {
    id: 1,
    title: "Razer Viper V3 Pro Wireless Gaming Mouse",
    subtitle: "54g Ultra-lightweight Esports Wireless Gaming Mouse",
    regularPrice: 179.99,
    salePrice: 159.99,
    rating: 5.0,
    sold: 1850,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "Flagship",
    stock: 45,
    categories: ["Gaming Mice", "Gaming Gear"],
    platform: ["PC", "Mac"],
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=1600&auto=format&fit=crop&q=85",
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=1600&auto=format&fit=crop&q=85",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=1600&auto=format&fit=crop&q=85"
    ],
    description: "Designed with world-class esports pros. Features Focus Pro 35K Optical Sensor Gen-2, true 8000Hz wireless polling rate, zero smoothing acceleration, and smooth PTFE feet.",
    reviews: [
      { id: 101, user: "Alex Gaming", rating: 5, comment: "Insanely light and insanely accurate sensor. Best mouse I have ever used!" },
      { id: 102, user: "ProGamer99", rating: 5, comment: "Battery life easily lasts 90 hours. Flawless tracking." }
    ]
  },
  {
    id: 2,
    title: "Keychron Q1 Max Luxury Black Silk Custom Keyboard",
    subtitle: "Full CNC Machined Aluminum Board on Black Silk Cushion",
    regularPrice: 249.99,
    salePrice: 219.99,
    rating: 5.0,
    sold: 1940,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "Luxury Silk",
    stock: 22,
    categories: ["Keyboards", "Gaming Gear"],
    platform: ["PC", "Mac"],
    image: "/images/products/custom_keyboard_silk.png",
    images: [
      "/images/products/custom_keyboard_silk.png",
      "/images/products/rgb_keyboard_coiled.png"
    ],
    description: "Full CNC machined 6063 aluminum body custom keyboard presented on luxury black silk. Double-gasket acoustic design, rotary knob dial, and hot-swappable tactile switches.",
    reviews: [
      { id: 103, user: "TechEnthusiast", rating: 5, comment: "The dark silk commercial photo looks breathtaking! Super smooth typing sound." }
    ]
  },
  {
    id: 3,
    title: "Sony PlayStation 5 Water Splash Edition Console",
    subtitle: "High-Speed Liquid Water Splash Studio Edition Console",
    regularPrice: 699.99,
    salePrice: 649.99,
    rating: 5.0,
    sold: 5200,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "Cinematic Water",
    stock: 15,
    categories: ["Consoles", "Gaming Gear"],
    platform: ["PS5"],
    image: "/images/products/ps5_water_splash.png",
    images: [
      "/images/products/ps5_water_splash.png",
      "/images/products/ps6_concept_black.png"
    ],
    description: "Dramatic high-speed water splash studio render edition. Next-gen 4K 120FPS gaming, 2TB ultra-fast NVMe SSD, advanced ray tracing hardware, and DualSense controller.",
    reviews: [
      { id: 104, user: "GamerGirl2026", rating: 5, comment: "The water splash commercial photography is pure art! Runs super quiet and fast." }
    ]
  },
  {
    id: 4,
    title: "Xiaomi HyperOS Premium Wooden Stand Studio Headset",
    subtitle: "High-Fidelity Audio Custom Driver Studio Headphone",
    regularPrice: 299.99,
    salePrice: 249.99,
    rating: 5.0,
    sold: 1420,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "Ultra Commercial",
    stock: 25,
    categories: ["Headsets", "Audio"],
    platform: ["PC", "Mac", "Mobile"],
    image: "/images/products/xiaomi_hyperos_headphones.png",
    images: [
      "/images/products/xiaomi_hyperos_headphones.png",
      "/images/products/sony_red_headphones.png"
    ],
    description: "Handcrafted wooden acoustic stand featuring HyperOS lossless spatial audio, titanium diaphragm drivers, tactile luxury leather padding, and ambient illumination.",
    reviews: [
      { id: 105, user: "AudiophileKing", rating: 5, comment: "This studio shot looks straight out of a luxury commercial! Breathtaking sound." }
    ]
  },
  {
    id: 5,
    title: "DJI Osmo Pocket Floating Debris Gimbal Camera",
    subtitle: "4K 60FPS 3-Axis Gimbal Floating Debris Camera",
    regularPrice: 529.99,
    salePrice: 479.99,
    rating: 5.0,
    sold: 1890,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "3D Levitating",
    stock: 18,
    categories: ["Streaming Gear", "Tech Gadgets"],
    platform: ["PC", "Mac", "Mobile"],
    image: "/images/products/dji_osmo_floating.jpg",
    images: [
      "/images/products/dji_osmo_floating.jpg",
      "/images/products/sony_camera_floating.png"
    ],
    description: "Pocket-sized 3-axis mechanical gimbal camera surrounded by levitating dark asteroid debris. 1/1.7-inch sensor, 4K 60FPS video, ActiveTrack 3.0, and 2-inch OLED touchscreen.",
    reviews: [
      { id: 106, user: "VloggerPro", rating: 5, comment: "The levitating rock debris photo is mind-blowing! Smooth video stabilization." }
    ]
  },
  {
    id: 6,


    title: "Xbox Levitating Moss Edition Wireless Pro Controller",
    subtitle: "3D Levitating Stone Edition Controller with Neon Glow",
    regularPrice: 199.99,
    salePrice: 179.99,
    rating: 5.0,
    sold: 3800,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "3D Levitating",
    stock: 25,
    categories: ["Consoles", "Gaming Gear"],
    platform: ["Xbox", "PC"],
    image: "/images/products/xbox_controller_moss.png",
    images: [
      "/images/products/xbox_controller_moss.png"
    ],
    description: "Limited Edition Levitating Moss stone display controller. Features textured rubberized grips, adjustable trigger locks, Bluetooth & Xbox Wireless, and magnetic charge stand.",
    reviews: [
      { id: 117, user: "HaloMaster", rating: 5, comment: "The levitating green moss background shot is the coolest tech photo ever!" }
    ]
  },
  {
    id: 7,
    title: "Logitech G Pro X Superlight 2 Wireless Gaming Mouse",
    subtitle: "60g LIGHTFORCE Hybrid Optical Switches HERO 2 Sensor",
    regularPrice: 159.99,
    salePrice: 139.99,
    rating: 4.9,
    sold: 3400,
    isDiscounted: true,
    isRecent: false,
    isTrending: true,
    badge: "Bestseller",
    stock: 65,
    categories: ["Gaming Mice", "Gaming Gear"],
    platform: ["PC", "Mac"],
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=1600&auto=format&fit=crop&q=85",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=1600&auto=format&fit=crop&q=85",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=1600&auto=format&fit=crop&q=85"
    ],
    description: "Iconic pro gaming mouse evolved. 60g ultralight weight, hybrid optical-mechanical switches, sub-micron tracking HERO 2 sensor, and USB-C fast charge.",
    reviews: [
      { id: 108, user: "ShroudEnthusiast", rating: 5, comment: "The gold standard for competitive gaming. Light, solid, and reliable." }
    ]
  },
  {
    id: 8,
    title: "EvoFox Fireblade Custom Coiled Cable RGB Keyboard",
    subtitle: "Custom Coiled Cable Japanese Wave Desk Mat Keyboard",
    regularPrice: 189.99,
    salePrice: 159.99,
    rating: 5.0,
    sold: 2100,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "Coiled Cable",
    stock: 25,
    categories: ["Keyboards", "Gaming Gear"],
    platform: ["PC", "Mac"],
    image: "/images/products/rgb_keyboard_coiled.png",
    images: [
      "/images/products/rgb_keyboard_coiled.png",
      "/images/products/custom_keyboard_silk.png"
    ],
    description: "Custom Mechanical RGB keyboard presented on dark Japanese wave desk mat with pro aviator coiled cable, rotary volume knob, and tactile switches.",
    reviews: [
      { id: 115, user: "CustomBuildMaster", rating: 5, comment: "The coiled cable photo on wave desk mat looks top tier!" }
    ]
  },
  {
    id: 9,
    title: "Elgato Stream Deck MK.2 Studio Controller",
    subtitle: "15 LCD Macro Keys Studio Automation Console",
    regularPrice: 149.99,
    salePrice: 129.99,
    rating: 4.8,
    sold: 2200,
    isDiscounted: true,
    isRecent: false,
    isTrending: true,
    badge: "Streamer Essential",
    stock: 50,
    categories: ["Streaming Gear", "Tech Gadgets"],
    platform: ["PC", "Mac"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&auto=format&fit=crop&q=85",
    images: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&auto=format&fit=crop&q=85"
    ],
    description: "Take control of your stream, OBS studio, lighting, and workflow with 15 customizable LCD keys with visual feedback icons.",
    reviews: [
      { id: 110, user: "TwitchBroadcaster", rating: 5, comment: "Indispensable tool for streaming and workflow automation." }
    ]
  },
  {
    id: 10,
    title: "Steam Deck OLED 1TB Handheld Gaming PC",
    subtitle: "90Hz HDR OLED APU Handheld Console",
    regularPrice: 649.99,
    salePrice: 599.99,
    rating: 5.0,
    sold: 3900,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "Handheld King",
    stock: 18,
    categories: ["Consoles", "Gaming Gear"],
    platform: ["PC"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&auto=format&fit=crop&q=85",
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&auto=format&fit=crop&q=85"
    ],
    description: "7.4-inch 90Hz HDR OLED screen, custom AMD 6nm APU, 1TB NVMe high-speed SSD, etched anti-glare glass, and Wi-Fi 6E connectivity.",
    reviews: [
      { id: 111, user: "GamerOnTheGo", rating: 5, comment: "OLED display looks breathtaking and battery life is way better than original." }
    ]
  },
  {
    id: 11,
    title: "Govee RGBIC Glide Hexa Pro 3D LED Wall Panels",
    subtitle: "Smart 3D Light Panels Synced to Audio & Razer Chroma",
    regularPrice: 199.99,
    salePrice: 169.99,
    rating: 4.8,
    sold: 1680,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "Ambient Glow",
    stock: 35,
    categories: ["RGB Setup", "Tech Gadgets"],
    platform: ["PC", "Mobile"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&auto=format&fit=crop&q=85",
    images: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&auto=format&fit=crop&q=85"
    ],
    description: "3D cube optical effect RGBIC LED light panels with dynamic segment control, music sync visualizer, and Matter / Alexa integration.",
    reviews: [
      { id: 112, user: "DeskSetupGoals", rating: 5, comment: "Transformed my gaming room completely. App sync works like magic!" }
    ]
  },
  {
    id: 12,
    title: "Alienware AW3225QF 32\" 4K 240Hz QD-OLED Monitor",
    subtitle: "World's First 4K Curved QD-OLED Gaming Monitor",
    regularPrice: 1199.99,
    salePrice: 1049.99,
    rating: 4.9,
    sold: 840,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "Ultra Premium",
    stock: 10,
    categories: ["Monitors", "Gaming Gear"],
    platform: ["PC", "PS5", "Xbox"],
    image: "https://images.unsplash.com/photo-1547119957-637f8679db1e?w=1600&auto=format&fit=crop&q=85",
    images: [
      "https://images.unsplash.com/photo-1547119957-637f8679db1e?w=1600&auto=format&fit=crop&q=85"
    ],
    description: "32-inch 4K UHD 1700R curved Quantum Dot OLED panel, 240Hz refresh rate, 0.03ms gray-to-gray, Dolby Vision HDR, and HDMI 2.1 FRL.",
    reviews: [
      { id: 113, user: "OLED_Master", rating: 5, comment: "Deep blacks and 240Hz speed. Easily the best gaming display on Earth." }
    ]
  },
  {
    id: 13,
    title: "Sony WH-1000XM5 Red Edition ANC Headphones",
    subtitle: "Crimson Studio Edition Floating Rim-Light ANC Headphones",
    regularPrice: 399.99,
    salePrice: 349.99,
    rating: 5.0,
    sold: 4900,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "Cinematic Edition",
    stock: 30,
    categories: ["Audio", "Tech Gadgets"],
    platform: ["PC", "Mac", "Mobile"],
    image: "/images/products/sony_red_headphones.png",
    images: [
      "/images/products/sony_red_headphones.png",
      "/images/products/xiaomi_hyperos_headphones.png"
    ],
    description: "Exclusive Crimson Red Special Edition with dramatic studio rim lighting. Dual QN1 processors, 8 active microphones, 30-hour battery, and 360 Reality Audio.",
    reviews: [
      { id: 114, user: "AudioPro", rating: 5, comment: "The crimson red finish and floating lighting look unreal! Sound quality is stunning." }
    ]
  },
  {
    id: 14,
    title: "ASUS ROG Azoth 75% Custom Wireless Mechanical Keyboard",
    subtitle: "Gasket Mount Custom Keyboard with OLED Display",
    regularPrice: 249.99,
    salePrice: 219.99,
    rating: 4.9,
    sold: 1240,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "Custom Build",
    stock: 22,
    categories: ["Keyboards", "Gaming Gear"],
    platform: ["PC", "Mac"],
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1600&auto=format&fit=crop&q=85",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1600&auto=format&fit=crop&q=85"
    ],
    description: "75% wireless custom mechanical keyboard featuring built-in OLED display, three-layer sound dampening foam, hot-swappable pre-lubed ROG NX switches.",
    reviews: [
      { id: 109, user: "KeyboardEnthusiast", rating: 5, comment: "Thocky sound out of the box. Heavy CNC frame feels super premium." }
    ]
  },
  {
    id: 15,
    title: "Razer BlackShark V2 Pro Wireless Esports Headset",
    subtitle: "HyperClear Wideband Mic TriForce Titanium 50mm Drivers",
    regularPrice: 199.99,
    salePrice: 169.99,
    rating: 4.8,
    sold: 3100,
    isDiscounted: true,
    isRecent: false,
    isTrending: true,
    badge: "Pro Choice",
    stock: 42,
    categories: ["Headsets", "Audio"],
    platform: ["PC", "PS5", "Xbox"],
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1600&auto=format&fit=crop&q=85",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1600&auto=format&fit=crop&q=85"
    ],
    description: "Ultra-clear vocal broadcast detachable mic, tuned FPS audio profiles, passive noise isolation cushions, and 70 hours of non-stop battery life.",
    reviews: [
      { id: 116, user: "FPS_Sniper", rating: 5, comment: "Mic clarity sounds like a standalone USB condenser mic." }
    ]
  },
  {
    id: 16,
    title: "Samsung Odyssey OLED G9 49\" Curved Gaming Display",
    subtitle: "Dual QHD 240Hz 0.03ms Quantum Dot OLED Monitor",
    regularPrice: 1399.99,
    salePrice: 1199.99,
    rating: 4.9,
    sold: 760,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "Super Ultrawide",
    stock: 12,
    categories: ["Monitors", "Gaming Gear"],
    platform: ["PC", "Mac"],
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=1600&auto=format&fit=crop&q=85",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=1600&auto=format&fit=crop&q=85",
      "https://images.unsplash.com/photo-1547119957-637f8679db1e?w=1600&auto=format&fit=crop&q=85"
    ],
    description: "49-inch 1800R curved Neo Quantum Processor OLED monitor with 240Hz refresh rate, 0.03ms response time, DisplayHDR True Black 400, and built-in Gaming Hub.",
    reviews: [
      { id: 107, user: "MultiTasker", rating: 5, comment: "Replaced dual monitors with this clean setup. Best productivity & gaming buy." }
    ]
  },
  {
    id: 17,
    title: "Nintendo Switch OLED Model - Neon Edition",
    subtitle: "7-Inch OLED Screen Docked & Handheld Hybrid Console",
    regularPrice: 349.99,
    salePrice: 319.99,
    rating: 4.9,
    sold: 5800,
    isDiscounted: true,
    isRecent: false,
    isTrending: true,
    badge: "Top Seller",
    stock: 25,
    categories: ["Consoles", "Gaming Gear"],
    platform: ["Switch"],
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=1600&auto=format&fit=crop&q=85",
    images: [
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=1600&auto=format&fit=crop&q=85"
    ],
    description: "Gorgeous 7-inch OLED screen with vivid colors and high contrast, wide adjustable stand, LAN port dock, and 64GB storage.",
    reviews: [
      { id: 118, user: "MarioFan", rating: 5, comment: "Screen upgrade makes handheld gaming feel brand new." }
    ]
  },
  {
    id: 18,
    title: "Sony Alpha Floating Debris 4K Studio Vlogging Camera",
    subtitle: "Cinematic Floating Studio Debris 4K CamLink Kit",
    regularPrice: 949.99,
    salePrice: 849.99,
    rating: 5.0,
    sold: 920,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "Cinematic 4K",
    stock: 12,
    categories: ["Streaming Gear", "Tech Gadgets"],
    platform: ["PC", "Mac"],
    image: "/images/products/sony_camera_floating.png",
    images: [
      "/images/products/sony_camera_floating.png"
    ],
    description: "High-speed 4K streaming & vlogging camera rendered mid-air with levitating concrete debris. Ultra-fast Real-time Eye AF, clean HDMI output, and fur windscreen mic.",
    reviews: [
      { id: 119, user: "StreamLabPro", rating: 5, comment: "Unbelievable commercial photo! Autofocus is instant and video quality is 4K perfection." }
    ]
  },
  {
    id: 19,
    title: "Attack Shark X3 Pro Carbon Fiber Wireless Gaming Mouse",
    subtitle: "Carbon Fiber Damask Pattern RGB Charging Dock Esports Mouse",
    regularPrice: 549.99,
    salePrice: 499.99,
    rating: 5.0,
    sold: 2800,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "Carbon Edition",
    stock: 14,
    categories: ["Gaming Mice", "Gaming Gear"],
    platform: ["PC", "Mac"],
    image: "/images/products/attack_shark_mouse_1.jpg",
    images: [
      "/images/products/attack_shark_mouse_1.jpg",
      "/images/products/attack_shark_mouse_2.png",
      "/images/products/attack_shark_mouse_3.png"
    ],
    description: "Esports grade carbon fiber damask pattern ultralight wireless gaming mouse featuring magnetic fast-charging dock, PixArt PAW3395 sensor, and 8000Hz polling rate.",
    reviews: [
      { id: 120, user: "CarbonPro", rating: 5, comment: "The carbon fiber damask texture and magnetic charging dock look so premium!" }
    ]
  },
  {
    id: 20,
    title: "Attack Shark RGB Glass Reflection Desk Setup Gaming Mouse",
    subtitle: "Glass Surface Reflection 8000Hz Wireless Gaming Setup",
    regularPrice: 129.99,
    salePrice: 109.99,
    rating: 4.9,
    sold: 1950,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "Studio Reflection",
    stock: 40,
    categories: ["Gaming Mice", "Gaming Gear"],
    platform: ["PC", "Mac"],
    image: "/images/products/attack_shark_mouse_3.png",
    images: [
      "/images/products/attack_shark_mouse_3.png",
      "/images/products/attack_shark_mouse_2.png"
    ],
    description: "Cinematic studio dark desk reflection edition. PAW3395 26,000 DPI sensor, TTC Gold encoder, optical switches, and sub-1ms ultra-low latency wireless transceiver.",
    reviews: [
      { id: 121, user: "DeskSetupMaster", rating: 5, comment: "The glass reflection shot in front of the curved monitor looks phenomenal!" }
    ]
  },
  {
    id: 21,
    title: "Sony PlayStation 6 Matte Black Concept Console",
    subtitle: "Neon Blue LED Strip Stealth Matte Black Console & Controller",
    regularPrice: 899.99,
    salePrice: 799.99,
    rating: 5.0,
    sold: 4600,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "PS6 Stealth Concept",
    stock: 10,
    categories: ["Consoles", "Gaming Gear"],
    platform: ["PS5"],
    image: "/images/products/ps6_concept_black.png",
    images: [
      "/images/products/ps6_concept_black.png",
      "/images/products/ps5_water_splash.png"
    ],
    description: "Futuristic stealth matte black PS6 concept console with neon blue LED strip lighting and matched dark DualSense controller.",
    reviews: [
      { id: 122, user: "NextGenGamer", rating: 5, comment: "The matte black PS6 concept render looks like the future of console gaming!" }
    ]
  },
  {
    id: 22,
    title: "Apple iPad Pro 12.9\" M2 Retina XDR Studio Tablet",
    subtitle: "M2 Chip Liquid Retina XDR Mini-LED 256GB Tablet",
    regularPrice: 1099.99,
    salePrice: 999.99,
    rating: 4.9,
    sold: 1950,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "M2 Power",
    stock: 15,
    categories: ["Tech Gadgets"],
    platform: ["Mac", "Mobile"],
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1600&auto=format&fit=crop&q=85",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1600&auto=format&fit=crop&q=85"
    ],
    description: "Liquid Retina XDR display with 1,000,000:1 contrast ratio, M2 processor, 10-core GPU, ProRes video engine, and Apple Pencil Hover feature.",
    reviews: [
      { id: 123, user: "DigitalArtist", rating: 5, comment: "Best screen for digital drawing, photo editing, and portable work." }
    ]
  },
  {
    id: 23,
    title: "Nanoleaf Lines Ambient Smart RGB Light Bars",
    subtitle: "Modular Backlit RGB Smart Lighting Bars",
    regularPrice: 179.99,
    salePrice: 149.99,
    rating: 4.8,
    sold: 940,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "Cyber Light",
    stock: 28,
    categories: ["RGB Setup", "Tech Gadgets"],
    platform: ["PC", "Mobile"],
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=1600&auto=format&fit=crop&q=85",
    images: [
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=1600&auto=format&fit=crop&q=85"
    ],
    description: "Ultra-sleek modular backlit smart LED light bars that project vibrant RGB lighting onto your walls with music rhythm sync.",
    reviews: [
      { id: 124, user: "SetupInspiration", rating: 5, comment: "Backlight effect reduces eye strain and looks unbelievable on stream." }
    ]
  },
  {
    id: 24,
    title: "Glorious Model O 2 Wireless Ultralight RGB Mouse",
    subtitle: "68g Honeycomb Shell BAMF 2.0 Sensor Wireless Mouse",
    regularPrice: 99.99,
    salePrice: 79.99,
    rating: 4.7,
    sold: 2100,
    isDiscounted: true,
    isRecent: false,
    isTrending: false,
    badge: "Best Value",
    stock: 60,
    categories: ["Gaming Mice", "Gaming Gear"],
    platform: ["PC", "Mac"],
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=1600&auto=format&fit=crop&q=85",
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=1600&auto=format&fit=crop&q=85"
    ],
    description: "68g honeycomb mesh shell wireless gaming mouse with 26,000 DPI BAMF 2.0 sensor, optical switches, and 210-hour battery life.",
    reviews: [
      { id: 125, user: "ValueSeeker", rating: 5, comment: "Best budget wireless mouse with great RGB and crisp clicks." }
    ]
  },
  {
    id: 25,
    title: "JBL Flip Granite Stone Levitating Studio Speaker",
    subtitle: "Granite Rock Pedestal Studio Rim-Light Speaker",
    regularPrice: 179.99,
    salePrice: 149.99,
    rating: 5.0,
    sold: 3100,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "Granite Rock",
    stock: 35,
    categories: ["Audio", "Tech Gadgets"],
    platform: ["PC", "Mac", "Mobile"],
    image: "/images/products/jbl_speaker_granite.png",
    images: [
      "/images/products/jbl_speaker_granite.png"
    ],
    description: "Dark granite rock commercial studio pedestal edition. Dual passive radiators, PartyBoost stereo pairing, IP67 waterproof armor, and 12-hour continuous battery life.",
    reviews: [
      { id: 126, user: "BassLover", rating: 5, comment: "The granite rock shot looks like a high-end magazine cover! Deep punchy bass." }
    ]
  },
  {
    id: 26,
    title: "Corsair K100 RGB Hyper-Processing Optical Keyboard",
    subtitle: "AXON 4000Hz Hyper-Polling OPX Optical Switch Board",
    regularPrice: 229.99,
    salePrice: 189.99,
    rating: 4.8,
    sold: 1890,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "Optical Speed",
    stock: 30,
    categories: ["Keyboards", "Gaming Gear"],
    platform: ["PC", "Mac"],
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1600&auto=format&fit=crop&q=85",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1600&auto=format&fit=crop&q=85"
    ],
    description: "Flagship mechanical gaming keyboard powered by CORSAIR AXON hyper-processing technology with 4,000Hz hyper-polling and 44-zone RGB LightEdge.",
    reviews: [
      { id: 127, user: "GamerX", rating: 5, comment: "Fast key switches and top dial controls volume and lighting beautifully." }
    ]
  },
  {
    id: 28,
    title: "LG UltraGear 34\" Curved OLED 240Hz Ultrawide Display",
    subtitle: "WQHD 800R Curved OLED 0.03ms Gaming Monitor",
    regularPrice: 999.99,
    salePrice: 849.99,
    rating: 4.9,
    sold: 810,
    isDiscounted: true,
    isRecent: true,
    isTrending: true,
    badge: "OLED Curved",
    stock: 14,
    categories: ["Monitors", "Gaming Gear"],
    platform: ["PC", "Mac"],
    image: "https://images.unsplash.com/photo-1547119957-637f8679db1e?w=1600&auto=format&fit=crop&q=85",
    images: [
      "https://images.unsplash.com/photo-1547119957-637f8679db1e?w=1600&auto=format&fit=crop&q=85"
    ],
    description: "34-inch WQHD (3440x1440) 800R curved OLED screen with 240Hz refresh rate, 0.03ms response time, anti-glare low reflection coating, and DTS Headphone:X.",
    reviews: [
      { id: 129, user: "SimRacer", rating: 5, comment: "Immersion is unmatched for racing and open-world games." }
    ]
  },
  {
    id: 29,
    title: "Razer Goliathus Extended Chroma RGB Gaming Desk Mat",
    subtitle: "Micro-Textured Cloth Surface Razer Chroma RGB Lighting",
    regularPrice: 59.99,
    salePrice: 44.99,
    rating: 4.8,
    sold: 4300,
    isDiscounted: true,
    isRecent: false,
    isTrending: true,
    badge: "RGB Desk Mat",
    stock: 85,
    categories: ["RGB Setup", "Gaming Gear"],
    platform: ["PC", "Mac"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&auto=format&fit=crop&q=85",
    images: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&auto=format&fit=crop&q=85"
    ],
    description: "Extended micro-textured cloth desk mat optimized for all mouse sensors with 16.8 million color Razer Chroma RGB edge illumination.",
    reviews: [
      { id: 130, user: "CleanDesk", rating: 5, comment: "Smooth surface for mouse flicks and soft stitching around edges." }
    ]
  },
  {
    id: 30,
    title: "Logitech G FITZ Custom Formed Wireless Gaming Earbuds",
    subtitle: "LIGHTFORM Custom Molded Gel Earbud Tips",
    regularPrice: 229.99,
    salePrice: 189.99,
    rating: 4.7,
    sold: 840,
    isDiscounted: true,
    isRecent: true,
    isTrending: false,
    badge: "Custom Molded",
    stock: 26,
    categories: ["Headsets", "Audio"],
    platform: ["PC", "PS5", "Mobile"],
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1600&auto=format&fit=crop&q=85",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1600&auto=format&fit=crop&q=85"
    ],
    description: "Revolutionary LIGHTFORM photopolymer gel tips custom-molded to your exact ear shape in 60 seconds. Features low-latency LIGHTSPEED wireless and passive noise isolation.",
    reviews: [
      { id: 131, user: "EarbudFan", rating: 5, comment: "Lightform molding fits your ear shape perfectly in 60 seconds." }
    ]
  }
];

const enrichedProducts = products.map((p, idx) => ({
  ...p,
  isRecent: p.isRecent ?? (idx % 2 === 0 || idx < 10),
  isTrending: p.isTrending ?? (p.sold > 1000 || p.badge === "Flagship" || p.badge === "Cinematic Water" || p.badge === "3D Levitating"),
  isDiscounted: p.isDiscounted ?? true,
  cartImage: { src: p.image, alt: p.title },
  originalPrice: p.regularPrice,
  tag: p.badge
}));

const publicJsonPath = path.join(__dirname, '..', 'public', 'data', 'products.json');
const srcJsPath = path.join(__dirname, '..', 'src', 'data', 'products.js');

const jsonData = JSON.stringify({ data: enrichedProducts }, null, 2);
fs.writeFileSync(publicJsonPath, jsonData, 'utf8');
console.log(`Successfully updated ${publicJsonPath} with 10 commercial ultra-cinematic product images!`);

const jsContent = `export const products = ${JSON.stringify(enrichedProducts, null, 2)};\n`;
fs.writeFileSync(srcJsPath, jsContent, 'utf8');
console.log(`Successfully updated ${srcJsPath} with 10 commercial ultra-cinematic product images!`);
