'use strict';

const fs = require('fs-extra');
const SVGO = require('svgo');
const xml2js = require('xml2js');
const path = require('path');

const { svgo: svgoConfig, src } = require('./config');

const svgo = new SVGO(svgoConfig);

module.exports = function getIconData({ fileName, id }) {
  return fs
    .readFile(path.join(src, fileName), 'utf8')
    .then(file => svgo.optimize(file, { path: fileName }))
    .then(
      iconData =>
        new Promise((resolve, reject) =>
          xml2js.parseString(iconData.data, (err, result) => {
            if (err) {
              return reject(err);
            }
            return resolve({ icon: result, fileName, id });
          })
        )
    );
};
