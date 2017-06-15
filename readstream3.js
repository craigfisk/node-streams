/* readstream3.js */

// var ReadStream = require('./lib/readStream.js');
var ReadStream = require('./readstream2.js');

var stream = new ReadStream();

stream.on('readable', function() {
  while (null !== (record = stream.read())) {
    console.log('received: ' + JSON.stringify(record));
  }
});
stream.on('end', function() {
  console.log('"end" event');
});
