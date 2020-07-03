'use strict';

const xml2js = require('xml2js');
const { camelCaseTransformMerge } = require('camel-case');

const { viewboxSize, defaultAttrs } = require('./config');

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

  Object.keys(defaultAttrs).forEach(key => {
    innerContent.$[key] = defaultAttrs[key];
  });

  const builder = new xml2js.Builder({
    renderOpts: {
      pretty: false
    },
    headless: true
  });

  const svg = builder.buildObject(icon);

  const symbol = toSvgSymbol(id, innerContent);
  const symbolSvg = builder.buildObject(symbol);

  return { ...result, svg, symbolSvg };
};

function toSvgSymbol(id, contents) {
  const viewBox = [0, 0, viewboxSize, viewboxSize].join(' ');
  const { $, ...tags } = contents;

  return {
    symbol: {
      $: {
        id: `svg--${camelCaseTransformMerge(id)}`,
        viewBox
      },
      ...tags
    }
  };
}
