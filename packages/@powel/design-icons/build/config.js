const path = require('path');

module.exports = {
  src: path.resolve(__dirname, '../src'),
  out: path.resolve(
    __dirname,
    '../../../node_modules/@powel/design-icons/dist'
  ),
  viewboxSize: 24,
  defaultAttrs: {
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  },
  svgo: {
    plugins: [
      {
        cleanupAttrs: true
      },
      {
        inlineStyles: true
      },
      {
        removeDoctype: true
      },
      {
        removeXMLProcInst: true
      },
      {
        removeComments: true
      },
      {
        removeMetadata: true
      },
      {
        removeTitle: true
      },
      {
        removeDesc: true
      },
      {
        removeUselessDefs: true
      },
      {
        removeEditorsNSData: true
      },
      {
        removeEmptyAttrs: true
      },
      {
        removeHiddenElems: true
      },
      {
        removeEmptyText: true
      },
      {
        removeEmptyContainers: true
      },
      {
        removeViewBox: false
      },
      {
        cleanUpEnableBackground: true
      },
      {
        convertStyleToAttrs: true
      },
      {
        convertColors: true
      },
      {
        convertPathData: false
      },
      {
        convertTransform: false
      },
      {
        removeUnknownsAndDefaults: true
      },
      {
        removeNonInheritableGroupAttrs: true
      },
      {
        removeUselessStrokeAndFill: true
      },
      {
        removeUnusedNS: true
      },
      {
        cleanupIDs: true
      },
      {
        cleanupNumericValues: true
      },
      {
        moveElemsAttrsToGroup: true
      },
      {
        moveGroupAttrsToElems: true
      },
      {
        collapseGroups: true
      },
      {
        removeRasterImages: false
      },
      {
        mergePaths: true
      },
      {
        convertShapeToPath: true
      },
      {
        sortAttrs: false
      },
      {
        removeDimensions: true
      },
      {
        removeAttrs: {
          attrs: '(fill|stroke.*)'
        }
      }
    ]
  }
};