const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // Fetch exact original public/data/products.json from git commit e34e21d
  const jsonGitContent = execSync('git show e34e21d:public/data/products.json', { encoding: 'utf8' });
  const jsonPath = path.join(__dirname, '..', 'public', 'data', 'products.json');
  fs.writeFileSync(jsonPath, jsonGitContent, 'utf8');
  console.log('Restored exact original public/data/products.json from git.');

  // Fetch exact original src/data/products.js from git commit e34e21d
  const jsGitContent = execSync('git show e34e21d:src/data/products.js', { encoding: 'utf8' });
  const jsPath = path.join(__dirname, '..', 'src', 'data', 'products.js');
  fs.writeFileSync(jsPath, jsGitContent, 'utf8');
  console.log('Restored exact original src/data/products.js from git.');
} catch (err) {
  console.error('Error restoring original files:', err.message);
}
