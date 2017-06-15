/* readstream4.js */

// Flowing mode example.
// Usage:
//   node readstream4.js
// Flowing mode = 'data' event; non-flowing-mode = 'readable' event. Both end with 'end'.
// Consumer doesn't have to ask for the data; it's just fed the stream data til end.
// See readstream3.js for non-flowing mode example.

console.log('This is a flowing mode example, with "data" and "end"');

var ReadStream = require('./readstream2.js');

var stream = new ReadStream();

stream.on('data', function(record) {
  console.log('received: ' + JSON.stringify(record));
});
stream.on('end', function() {
  console.log('"end" event');
});
