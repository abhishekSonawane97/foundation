const fs = require('fs');

// read template
const template = fs.readFileSync('./index.html', 'utf-8');

// read content
const content = JSON.parse(fs.readFileSync('./content/content.json', 'utf-8'));

// replace placeholders
let output = template;

Object.keys(content).forEach(key => {
  const regex = new RegExp(`{{${key}}}`, 'g');
  output = output.replace(regex, content[key]);
});

// write final HTML
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist');
}

fs.writeFileSync('./dist/index.html', output);

console.log('Build complete');
