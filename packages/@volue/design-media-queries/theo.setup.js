/* eslint-disable import/no-commonjs */

'use strict'; // eslint-disable-line strict

module.exports = theo => {
  // Override the default "cssmodules" format
  theo.registerFormat(
    'cssmodules.css',
    `
    {{#each props as |prop|}}
      {{#if prop.comment~}}
      {{{trimLeft (indent (comment (trim prop.comment)))}}}
      {{/if~}}
      @value {{kebabcase prop.name}}: {{{prop.value}}};
    {{/each}}
  `
  );
};
