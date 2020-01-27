# design-spacing

Spacing primitives/tokens to be used across Powel's products

![Screenshot](https://user-images.githubusercontent.com/927591/73183450-16c2a980-411b-11ea-8a15-e12d5773bce7.png)

## Installation

```sh
npm install @powel/design-spacing --save
```

## Usage

### JavaScript

In JavaScript, design token names are formatted in [lower camelCase](https://en.wikipedia.org/wiki/Camel_case).

```js
const tokens = require('@powel/design-spacing');
console.log(tokens.spacingXs); // 0.25rem
```

In JSON, design token names are formatted in [SNAKE_CASE](https://en.wikipedia.org/wiki/Snake_case).

```js
const tokens = require('@powel/design-spacing/dist/index.json');
console.log(tokens['SPACING_XS']); // 0.25rem
```

### Sass

Sass variables and map keys are formatted in [kebab-case](https://en.wikipedia.org/wiki/Kebab_case).

```scss
// Using variables
@import '~@powel/design-spacing/dist/index';

div {
  padding: $spacing-xs;
}
```
