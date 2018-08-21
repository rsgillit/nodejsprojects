const _ = require('lodash'); //string & Array utilties
const yargs = require('yargs'); // parse command line input
process.env.DEBUG="*"
const debug = require('debug')('my app');
const fs = require('fs');
const os = require('os');

module.exports = {
  debug: debug,
  yargs: yargs
}
