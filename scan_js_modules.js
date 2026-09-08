const fs = require('fs');
const path = require('path');

const codePath = path.join(__dirname, 'assets', 'main-CEYqTp0L.js');
const code = fs.readFileSync(codePath, 'utf8');

// Regex to find all .js strings in quotes
const regex = /['"`]([^'"`]*?\.js)['"`]/g;
let match;
const jsFiles = new Set();

while ((match = regex.exec(code)) !== null) {
  jsFiles.add(match[1]);
}

console.log('Found JS files in code:');
console.log(JSON.stringify(Array.from(jsFiles), null, 2));
