/* readstream5.js */

// Pause/resume flowing mode example.
// Usage:
//   node readstream5.js

var ReadStream = require('./readstream2.js');

var stream = new ReadStream();

stream.on('data', function(record) {
  console.log('received: ' + JSON.stringify(record));
  // adding
  console.log('pausing stream for 2 seconds');
  stream.pause();
  setTimeout(function() {
    console.log('resuming stream');
    stream.resume();
  }, 2000);
});
stream.on('end', function() {
  console.log('"end" event');
});
