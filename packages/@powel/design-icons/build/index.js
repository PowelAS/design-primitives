'use strict';

const getIconFileList = require('./getIconFileList');
const getIconData = require('./getIconData');
const processIcon = require('./processIcon');
const writeToken = require('./writeToken');

const map = f => xs => xs.map(f);
const all = Promise.all.bind(Promise);

getIconFileList()
  .then(all)
  .then(map(getIconData))
  .then(all)
  .then(map(processIcon))
  .then(all)
  .then(writeToken)
  .then(() => {
    console.log('icons generated successfully');
    process.exit(0);
  })
  .catch(err => {
    console.log(`error generating icons:\n ${err}`);
    process.exit(1);
  });
