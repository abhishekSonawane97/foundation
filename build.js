// copy assets folder to dist
const fsExtra = require('fs');

const copyFolder = (src, dest) => {
  if (!fsExtra.existsSync(dest)) {
    fsExtra.mkdirSync(dest, { recursive: true });
  }

  const files = fsExtra.readdirSync(src);

  files.forEach(file => {
    const srcPath = `${src}/${file}`;
    const destPath = `${dest}/${file}`;

    if (fsExtra.lstatSync(srcPath).isDirectory()) {
      copyFolder(srcPath, destPath);
    } else {
      fsExtra.copyFileSync(srcPath, destPath);
    }
  });
};

copyFolder('./assets', './dist/assets');
copyFolder('./admin', './dist/admin');

console.log('✅ Admin copied');
console.log('✅ Assets copied');
