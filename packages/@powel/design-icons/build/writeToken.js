'use strict';

const nodeYAML = require('node-yaml');
const path = require('path');
const { constantCase } = require('constant-case');

const { out } = require('./config');

module.exports = function writeTokens(icons) {
  const props = icons.reduce(
    (accum, val) => {
      if (val.error) {
        accum.errors.push(val.error);
      }

      accum.output.push({ name: constantCase(val.id), value: val.svg });

      return accum;
    },
    {
      output: [],
      errors: []
    }
  );

  const tokensFile = {
    global: {
      type: 'icon',
      category: 'icon'
    },
    props: props.output
  };

  if (props.errors.length > 0) {
    return Promise.reject(props.errors.join('\n'));
  }

  return nodeYAML.write(path.join(out, 'index.yml'), tokensFile);
};
