// writestream2.js 

// The class file [note: there is no writestream1.js]
// Similar to readstream2.js:
//   inherit from Writable, set objectMode = true, create a _write function

var Writable = require('stream').Writable,
  util = require('util');

  var WriteStream = function() {
    Writable.call(this, {objectMode: true});
  };
  util.inherits(WriteStream, Writable);

  WriteStream.prototype._write = function(chunk, encoding, callback) {
    console.log('write: ' + JSON.stringify(chunk));
    console.log('waiting 2 seconds');
    setTimeout(function() {
      console.log('finished waiting');
      debugger;
      callback();
    }, 2000);
  };

  module.exports = WriteStream;
