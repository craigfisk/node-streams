/* readstream1.js */

// Note: DeNardi's ReadStream is in ./lib/readStream.js.
// Our successive experiments, instead, will use ./readstream<n>.js,
// incrementing as we go, to make notes along the way.

// Create readable stream
// Usage:
//   node
//   .load readstream1.js

var data = require('./data-sources/sourceData.json'),
  Readable = require('stream').Readable,
  util = require('util');

var ReadStream = function() {
  Readable.call(this, { objectMode: true });
  this.data = data;
  this.curIndex = 0;
};

util.inherits(ReadStream, Readable);

console.log("Using Object.keys() to examine class methods:");

console.log("Methods available to ReadStream come from the .super_.prototype, which is Readable.prototype.\n");

console.log("Readable:");
console.log('Object.keys(Readable.prototype)', Object.keys(Readable.prototype));

console.log("ReadStream:");
console.log('Object.keys(ReadStream.prototype)', Object.keys(ReadStream.prototype));
console.log('Object.keys(ReadStream)', Object.keys(ReadStream));
console.log('Object.keys(ReadStream.super_.prototype)', Object.keys(ReadStream.super_.prototype));

console.log('How to see the result of instantiating an object from this class?');

var stream = new ReadStream();

console.log('In the node REPL, do: "stream"');
console.log('and look for objectMode, curIndex, and the data.');
