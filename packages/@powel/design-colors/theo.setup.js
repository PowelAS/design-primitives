/* eslint-disable import/no-commonjs */

'use strict'; // eslint-disable-line strict

const fromHex = require('@fantasy-color/from-hex').default;
const luminanceRgb = require('@fantasy-color/luminance-rgb').default;
const contrastRatioLuminance = require('@fantasy-color/contrast-ratio-luminance')
  .default;

const WCAG_REQ_RATIO_AA = 4.5;
const WCAG_REQ_RATIO_AAA = 7.0;

module.exports = theo => {
  // Override the default "web" transform
  theo.registerTransform('web', ['color/hex']);

  theo.registerFormat('withTextColors.json', result => {
    const { props, aliases } = result.toJS();

    const adjustedProps = props.map(prop => {
      const { checkContrast, name, palette } = prop;
      const textColors = (checkContrast || []).reduce(
        (textColors, colorToCheck) => {
          const alias = aliases[colorToCheck];

          if (alias != null) {
            const colorA = fromHex(alias.value);
            const colorB = fromHex(prop.value);
            const colorALuminance = luminanceRgb(colorA);
            const colorBLuminance = luminanceRgb(colorB);
            const contrastRatio = contrastRatioLuminance(
              colorALuminance,
              colorBLuminance
            );

            const passesAA = contrastRatio >= WCAG_REQ_RATIO_AA;
            const passesAAA = contrastRatio >= WCAG_REQ_RATIO_AAA;

            if (passesAA || passesAAA) {
              textColors.push({
                name: colorToCheck,
                rating: passesAAA ? 'AAA' : 'AA'
              });
            }
          }

          return textColors;
        },
        []
      );

      return {
        name,
        palette,
        textColors
      };
    });

    return JSON.stringify(adjustedProps, null, 2);
  });
};
