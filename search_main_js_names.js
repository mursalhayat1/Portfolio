const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'assets', 'main-CEYqTp0L.js');
const content = fs.readFileSync(file, 'utf8');

const originalNames = ['mina', 'massoud', 'melad'];
originalNames.forEach(name => {
  let idx = 0;
  while (true) {
    const found = content.toLowerCase().indexOf(name, idx);
    if (found === -1) break;
    console.log(`Match for '${name}' at index ${found}:`);
    console.log(content.slice(Math.max(0, found - 50), Math.min(content.length, found + 100)));
    idx = found + name.length;
  }
});
