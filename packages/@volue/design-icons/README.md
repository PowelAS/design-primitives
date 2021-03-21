# design-icons

Icons to be used across Volue's products

## Installation

```sh
npm install @volue/design-icons --save
```

## Usage

### JavaScript

In JavaScript, design token names are formatted in [lower camelCase](https://en.wikipedia.org/wiki/Camel_case).

```js
const tokens = require('@volue/design-icons');
console.log(tokens.signOut); // SVG icon markup
```

In JSON, design token names are formatted in [SNAKE_CASE](https://en.wikipedia.org/wiki/Snake_case).

```js
const tokens = require('@volue/design-icons/dist/index.json');
console.log(tokens['SIGN_OUT']); // SVG icon markup
```

### Sass

Sass variables and map keys are formatted in [kebab-case](https://en.wikipedia.org/wiki/Kebab_case).

```scss
// Using variables
@import '~@volue/design-icons/dist/index';

// $angle-up;
```

### SVG sprite

`@volue/design-icons/dist/sprite.svg`
