const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/flying-saucer/runtime.js',
    // './dist/flying-saucer/polyfills.js', // a common polyfill strategy needs to be considered
    './dist/flying-saucer/scripts.js',
    './dist/flying-saucer/main.js',
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/flying-saucer.js');
})();
