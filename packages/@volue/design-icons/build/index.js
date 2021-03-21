'use strict';

const getIconFileList = require('./getIconFileList');
const getIconData = require('./getIconData');
const processIcon = require('./processIcon');
const checkErrors = require('./checkErrors');
const writeSprite = require('./writeSprite');
const writeTokens = require('./writeTokens');

const map = f => xs => xs.map(f);
const awaitAll = Promise.all.bind(Promise);
const parallel = fs => xs => Promise.all(fs.map(f => f(xs)));

getIconFileList()
  .then(awaitAll)
  .then(map(getIconData))
  .then(awaitAll)
  .then(map(processIcon))
  .then(awaitAll)
  .then(checkErrors)
  .then(parallel([writeTokens, writeSprite]))
  .then(() => {
    console.log('icons generated successfully');
    process.exit(0);
  })
  .catch(err => {
    console.log(`error generating icons:\n ${err}`);
    process.exit(1);
  });
