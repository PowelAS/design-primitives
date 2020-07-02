'use strict';

const path = require('path');
const fs = require('fs').promises;

const { out } = require('./config');

module.exports = function writeSprite(icons) {
  const symbols = icons.map(icon => icon.symbolSvg).join('');

  const spriteString = `<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"><defs>${symbols}</defs></svg>`;
  const spritePath = path.join(out, 'sprite.svg');

  return fs
    .mkdir(path.dirname(spritePath), { recursive: true })
    .then(() => fs.writeFile(spritePath, spriteString));
};
