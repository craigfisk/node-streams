/* readfile.js */

// See differences in type of loaded file, depending on how loaded.
// How to use:
//    cd node-streams
//    node readfile.js ./data-sources/sourceData.json

const fs = require('fs');

console.log("readfile.js - filesystem experiments:\n");

let args = process.argv.splice(process.execArgv.length + 2);
if (args.length != 1) {
  console.log("Exiting because args.length != 1");
  process.exit(1);
}
// #1
var json_file = require('./data-sources/sourceData.json');
if (!json_file) {
  console.log("Unable to open ./data-sources/sourceData.json");
  process.exit(1);
}
console.log('#1 json_file type: ' + typeof json_file);
console.log('json_file length: ' + json_file.length);
console.log('json_file content: ' + json_file);

// #2. If 2nd arg is a string, assumed to be abbrev for { enctype: 'utf8'}
// If enctype, results are a string; otherwise, a buffer object.
fs.readFile(args[0], 'utf8', function(err, results) {
  if (err) throw err;
  console.log('#2 results type: ' + typeof results);
  console.log('results length: ' + results.length);
  console.log('results content: ' + results);
});

// #3 no option 2, so result is an object
fs.readFile(args[0], function(err, results) {
  if (err) throw err;
  console.log('#3 results type: ' + typeof results);
  console.log('results length: ' + results.length);
  console.log('results content: ' + results);
});
