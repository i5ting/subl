#!/usr/bin/env node

var child_process = require('child_process');
var fs = require('fs');

var subl = null;
var subl3 = '/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl';
var subl2 = '/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl';
var is_subl3_exist = fs.existsSync(subl3);
var is_subl2_exist = fs.existsSync(subl2);

// 优先启动 Sublime Text 3
if(is_subl3_exist) {
    subl = subl3;
} else if(is_subl2_exist) {
    subl = subl2;
} else {
    return;
}

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
