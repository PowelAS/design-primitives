'use strict';

const fs = require('fs-extra');
const path = require('path');

const { src } = require('./config');

module.exports = function getIconFileList() {
  return Promise.resolve(
    fs.readdir(src).then(files =>
      files
        .filter(fileName => path.extname(fileName) === '.svg')
        .map(fileName =>
          Promise.resolve({
            id: path.basename(fileName, '.svg'),
            fileName
          })
        )
    )
  );
};
