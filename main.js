// const chalk = require('chalk');
// const error = new Error();
// console.log(error.stack);
// const clc = require('cli-color');
const colors = require('colors');
const path = require('path');

function logLocation(...data) {
  const error = new Error();
  const stackLine = error.stack.split('\n')[2]; // Get caller's frame
  const match = stackLine.match(/\((.*):(\d+):(\d+)\)/);

  if (match) {
    const file_name = path.basename(match[1]);
    console.log(location_printable(file_name, match[2]).dim, data ? data.join(" ") : "");
 
  }
}

;
module.exports.cl = logLocation







function location_printable(filePath, line = 1, column = 1) {
  const absolutePath = path.resolve(filePath);
  const filename = path.basename(filePath)
  return `\u001b]8;;${absolutePath}:${line}:${column}\u0007[${filename}:${line}]\u001b]8;;\u0007`;
}


