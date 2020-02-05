'use strict';

const xml2js = require('xml2js');

const { viewboxSize } = require('./config');

module.exports = function processIcon({ icon, fileName, id }) {
  const innerContent = icon.svg;
  const result = { id, fileName };

  if (!innerContent.$.viewBox) {
    return { ...result, error: `\t${fileName} doesn't define a viewbox` };
  } else if (innerContent.$.viewBox !== `0 0 ${viewboxSize} ${viewboxSize}`) {
    return {
      ...result,
      error: `\t${fileName} has a viewbox that isn't ${viewboxSize}`
    };
  }

  const builder = new xml2js.Builder({
    renderOpts: {
      pretty: false
    },
    headless: true
  });

  const svg = builder.buildObject(icon);

  return { ...result, svg };
};
