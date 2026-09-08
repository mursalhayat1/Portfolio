const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const originalNames = ['mina', 'massoud', 'melad'];

function searchDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        searchDir(fullPath);
      }
    } else if (stat.isFile()) {
      const ext = path.extname(file);
      if (['.html', '.js', '.css', '.webmanifest', '.json'].includes(ext)) {
        searchFile(fullPath);
      }
    }
  }
}

function searchFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  
  lines.forEach((line, idx) => {
    originalNames.forEach(name => {
      const regex = new RegExp('\\b' + name + '\\b', 'gi');
      let match;
      while ((match = regex.exec(line)) !== null) {
        const start = Math.max(0, match.index - 40);
        const end = Math.min(line.length, match.index + name.length + 40);
        console.log(`${path.relative(rootDir, filePath)}:${idx + 1}:${match.index} -> ...${line.slice(start, end).trim()}...`);
      }
    });
  });
}

console.log('Searching for occurrences of names...');
searchDir(rootDir);
