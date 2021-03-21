const path = require('path');
const nodeYAML = require('node-yaml');

const svgo = nodeYAML.readSync(path.resolve(__dirname, '../.svgo.yml'));

module.exports = {
  src: path.resolve(__dirname, '../src'),
  out: path.resolve(
    __dirname,
    '../../../node_modules/@volue/design-icons/dist'
  ),
  viewboxSize: 24,
  defaultAttrs: {
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  },
  svgo
};
