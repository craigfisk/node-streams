/* readstream3.js */

// Non-flowing mode example.

// Non-flowing mode = 'readable' event; flowing-mode = 'data' event. Both end with 'end'.

// See readstream4.js for flowing mode example.

console.log('This is a non-flowing mode example, with "readable" and "end"');

// var ReadStream = require('./lib/readStream.js');
var ReadStream = require('./readstream2.js');

var stream = new ReadStream();

stream.on('readable', function() {
  while (null !== (record = stream.read())) {
    console.log('Got "readable" and received: \n\n' + JSON.stringify(record) + '\n');
  }
});
stream.on('end', function() {
  console.log('"end" event');
});
