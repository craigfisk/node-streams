// writestream3.js 

// Demostrate piping ReadStream to WriteStream

// Usage:
//    node writestream3.js

var ReadStream = require('./readstream2.js'),
  WriteStream = require('./writestream2.js');

var rs = new ReadStream();
var ws = new WriteStream();

rs.pipe(ws);
