const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Fetch original products.json content from git HEAD
const gitHeadContent = execSync('git show HEAD:public/data/products.json', { encoding: 'utf8' });
const originalProducts = JSON.parse(gitHeadContent);

// Filter out any hardware IDs (>= 100) to keep purely original game items
const pureGames = originalProducts.filter(item => item.id < 100);

// Unsplash high quality dark theme images for games matching #18191c background
const unsplashGameImages = [
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop", // Cyberpunk neon
  "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop", // Dark sci-fi space
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop", // Fantasy war
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop", // Racing drift
  "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop", // Ronin samurai action
  "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop", // Kingdom strategy
  "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop", // Battle neon
  "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?q=80&w=800&auto=format&fit=crop", // Arctic frost
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop", // Eldoria fantasy
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop", // Hyper racing
  "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=800&auto=format&fit=crop", // Starbound galaxy
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop", // Ocean deep
  "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop", // Wild outlaw
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop", // Starlight neon
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", // Abstract puzzle
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"  // Lunar moon sci-fi
];

const updatedGames = pureGames.map((game, idx) => {
  const primaryImg = unsplashGameImages[idx % unsplashGameImages.length];
  const secondaryImg = unsplashGameImages[(idx + 1) % unsplashGameImages.length];

  return {
    ...game,
    cartImage: {
      id: 1,
      alt: game.title,
      src: primaryImg
    },
    images: [
      { id: 1, alt: game.title + " cover 1", src: primaryImg },
      { id: 2, alt: game.title + " cover 2", src: secondaryImg }
    ]
  };
});

const jsonPath = path.join(__dirname, '..', 'public', 'data', 'products.json');
fs.writeFileSync(jsonPath, JSON.stringify(updatedGames, null, 2), 'utf8');
console.log('Restored original games dataset with dark Unsplash images. Total items:', updatedGames.length);

const jsPath = path.join(__dirname, '..', 'src', 'data', 'products.js');
const jsContent = `const products = ${JSON.stringify(updatedGames, null, 2)};\n\nexport default products;\n`;
fs.writeFileSync(jsPath, jsContent, 'utf8');
console.log('Updated src/data/products.js');
