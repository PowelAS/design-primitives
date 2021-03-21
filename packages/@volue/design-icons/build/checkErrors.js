'use strict';

module.exports = function checkErrors(icons) {
  const errors = icons.filter(val => val.error).map(val => val.error);

  if (errors.length > 0) {
    return Promise.reject(errors.join('\n'));
  }

  return icons;
};
