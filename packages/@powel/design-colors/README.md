# design-colors

Color primitives/tokens to be used across Powel's products

![Screenshot](https://user-images.githubusercontent.com/927591/73183455-19bd9a00-411b-11ea-82c2-c5d354dc9563.png)

## Installation

```sh
npm install @powel/design-colors --save
```

## Usage

### JavaScript

In JavaScript, design token names are formatted in [lower camelCase](https://en.wikipedia.org/wiki/Camel_case).

```js
const tokens = require('@powel/design-colors');
console.log(tokens.colorBlue100); // rgb(0, 0, 0)
```

In JSON, design token names are formatted in [SNAKE_CASE](https://en.wikipedia.org/wiki/Snake_case).

```js
const tokens = require('@powel/design-colors/dist/index.json');
console.log(tokens['COLOR_BLACK']); // rgb(0, 0, 0)
```

### Sass

Sass variables and map keys are formatted in [kebab-case](https://en.wikipedia.org/wiki/Kebab_case).

```scss
// Using variables
@import '~@powel/design-colors/dist/index';

a {
  color: $color-navy125;
}
```
