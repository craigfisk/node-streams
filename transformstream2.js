// transformstream2.js

// Demonstrate applying Transform when piping ReadStream to WriteStream

// Usage:
//    node transformstream2.js

var ReadStream = require('./readstream2.js'),
  WriteStream = require('./writestream2.js')
  TransformStream = require('./transformstream1.js');

var rs = new ReadStream();
var ws = new WriteStream();
var ts = new TransformStream();

// debugger;
//rs.pipe(ws);
rs.pipe(ts).pipe(ws);
