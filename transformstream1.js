// transformstream1.js

/* Similar to read and writestream code previously, here subclass Transform,
set objectMode: true, write _transform() method, which takes data as a chunk,
like writable stream, and outputs using push(), like readable stream. Signal
done like writable stream by calling callback().
*/
var Transform = require('stream').Transform,
    util = require('util');

var TransformStream = function() {
  Transform.call(this, {objectMode: true});
};
util.inherits(TransformStream, Transform);

TransformStream.prototype._transform = function(chunk, encoding, callback) {
  console.log('transform before : ' + JSON.stringify(chunk));
  // debugger;
  //if (typeof chunk.originalValue === 'undefined')
  //  chunk.originalValue = chunk.value;
  //chunk.value++;
  debugger;
  if (chunk.value !== 0) {
    this.push(chunk);
  } else {
    console.log('----- Not going to writestream because chunk.value: ' + chunk.value);
  }
  console.log('transform after : ' + JSON.stringify(chunk));
  // this.push(chunk);
  callback();
};

module.exports = TransformStream;
