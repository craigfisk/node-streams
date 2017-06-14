/* readable.js */

// Create readable stream

var data = require('./data-sources/sourceData.json'),
  Readable = require('stream').Readable,
  util = require('util');

var ReadStream = function() {
  Readable.call(this, { objectMode: true });
  this.data = data;
  this.curIndex = 0;
};

util.inherits(ReadStream, Readable);
