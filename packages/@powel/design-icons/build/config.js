const path = require('path');

module.exports = {
  src: path.resolve(__dirname, '../src'),
  out: path.resolve(__dirname, '../src'),
  viewboxSize: 560,
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
        removeAttrs: false
      }
    ]
  }
};
