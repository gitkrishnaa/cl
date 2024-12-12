// const chalk = require('chalk');
// const error = new Error();
// console.log(error.stack);
// const clc = require('cli-color');
const colors = require('colors');
const path = require('path');

function logLocation(...data) {
  const error = new Error();
  const stackLine = error.stack.split('\n')[2]; // Get caller's frame
  const lines=path.basename(stackLine).split(':');
  const file_path=path.resolve(stackLine);

  console.log(location_printable(file_path,lines[0], lines[1]).dim, data ? console.log(...data) : "");
 

}

;
module.exports.cl = logLocation







function location_printable(location,filePath, line = 1, column = 1) {
  const absolutePath = path.resolve(location);
  // console.log()
 let arr=absolutePath.split(' ')
  const filename = path.basename(filePath)
  // console.log("absolutePath",absolutePath,"filename",filename)
  return `\u001b]8;;${arr[arr.length-1]}\u0007[${filename}:${line}]\u001b]8;;\u0007`;
}


