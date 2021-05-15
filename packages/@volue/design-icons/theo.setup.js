/* eslint-disable import/no-commonjs */

'use strict'; // eslint-disable-line strict

const dTSTokenFormat = `{{#each props as |prop|}}
export declare const {{camelcase prop.name}}: string;
{{/each}}`;

module.exports = theo => {
  theo.registerFormat('module.d.ts', dTSTokenFormat);
  theo.registerFormat('common.d.ts', dTSTokenFormat);
};
