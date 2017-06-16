/* readstream2.js */

// Create readable stream
// Usage:
//   node
//   .load readstream2.js

var data = require('./data-sources/sourceData.json'),
  Readable = require('stream').Readable,
  util = require('util');

var ReadStream = function() {
  Readable.call(this, { objectMode: true });
  this.data = data;
  this.curIndex = 0;
};

util.inherits(ReadStream, Readable);

ReadStream.prototype._read = function() {
  if (this.curIndex === this.data.length)
    return this.push(null);

  var data = this.data[this.curIndex++];
  console.log('read: ' + JSON.stringify(data));
  this.push(data);
};

module.exports = ReadStream;

// console.log('_read method now will be in ReadStream.prototype and any object constructed from it.');
// console.log('See readstream3.js');
