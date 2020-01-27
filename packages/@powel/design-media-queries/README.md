# design-media-queries

Media query primitives/tokens to be used across Powel's products

![Screenshot](https://user-images.githubusercontent.com/927591/73183763-a405fe00-411b-11ea-8813-6ebf0c576e4c.png)

## Installation

```sh
npm install @powel/design-media-queries --save
```

## Usage

### JavaScript

In JavaScript, design token names are formatted in [lower camelCase](https://en.wikipedia.org/wiki/Camel_case).

```js
const tokens = require('@powel/design-media-queries');
console.log(tokens.mqLargeAndUp); // screen and ( min-width: 48.75em )
```

In JSON, design token names are formatted in [SNAKE_CASE](https://en.wikipedia.org/wiki/Snake_case).

```js
const tokens = require('@powel/design-media-queries/dist/index.json');
console.log(tokens['MQ_LARGE_AND_UP']); // screen and ( min-width: 48.75em )
```

### Sass

Sass variables and map keys are formatted in [kebab-case](https://en.wikipedia.org/wiki/Kebab_case).

```scss
// Using variables
@import '~@powel/design-media-queries/dist/index';

@media #{$mq-large-and-up} {
  body {
    padding: 1rem;
  }
}
```
