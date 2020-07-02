'use strict';

const { constantCase } = require('constant-case');
const nodeYAML = require('node-yaml');
const path = require('path');

const { src } = require('./config');

module.exports = function writeTokens(icons) {
  const props = icons.map(icon => ({
    name: constantCase(icon.id),
    value: icon.svg
  }));

  const tokensFile = {
    global: {
      type: 'icon',
      category: 'icon'
    },
    props
  };

  return nodeYAML.write(path.join(src, 'index.yml'), tokensFile);
};
