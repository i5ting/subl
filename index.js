#!/usr/bin/env node

var child_process = require('child_process');
var subl = '/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl';

var argv = process.argv;
argv.shift();

if ( argv.length > 1 ) {
  var first_arg = argv[0];
  if ( first_arg == '-h' || first_arg == '--help' ) {
    // execFile: executes a file with the specified arguments
    child_process.execFile(subl, [], function (error, stdout, stderr) {
    	console.log(stdout);
    });
  }
  
  if ( first_arg == '.' ) {
    argv = [__dirname];
  }
}
// execFile: executes a file with the specified arguments
child_process.execFile(subl, argv, function (error, stdout, stderr) {
	console.log(stdout);
});