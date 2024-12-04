// const chalk = require('chalk');
// const error = new Error();
// console.log(error.stack);
// const clc = require('cli-color');
const colors = require('colors');
const path = require('path');
function abc() {
  console.log("dasvfbgnhggfdsa");
  return "wdaedsvfrbtgfd"
}
function logLocation(...data) {
  const error = new Error();
  const stackLine = error.stack.split('\n')[2]; // Get caller's frame
  const match = stackLine.match(/\((.*):(\d+):(\d+)\)/);

  if (match) {
    //   console.log(`File: ${match[1]}`);
    const file_name = path.basename(match[1]);
    // console.log(data2)
    // console.log(`[${file_name}:${match[2]}]`.dim.blue, data ? data.join(" ") : "");
    console.log(location_printable(file_name, match[2]).dim, data ? data.join(" ") : "");
    //   console.log(`Column: ${match[3]}`);
    // console.log('Hello Worldz'.bgMagenta);
  }
}

//   logLocation();
module.exports.cl = logLocation

// const path = require('path');

function logClickableFile(filePath, line = 1, column = 1) {
  // Resolve the absolute file path
  const absolutePath = path.resolve(filePath);
  // Log in the required format
  console.log(`${path.resolve(absolutePath)}:${5}:${10}`);

}
function simulateError() {
  try {
    // Intentionally throw an error
    throw new Error('Simulated error!');
  } catch (error) {
    const filePath = __filename; // Current file
    const errorLine = 25; // Example line number
    const errorColumn = 5; // Example column number

    console.error('Error occurred in:');
    console.error(`${path.resolve(filePath)}:${errorLine}:${errorColumn}`);
    console.log(`\u001b]8;;${path.resolve(filePath)}:${errorLine}:${errorColumn}\u0007Open\u001b]8;;\u0007`);
    console.error(error.message);
  }
}

// Trigger the error
// simulateError();
// Example usage
// logClickableFile('example.js', 10, 5);
// const path = require('path');

function logClickableOpenText(filePath, line = 1, column = 1) {
  const absolutePath = path.resolve(filePath);
  const filename = path.basename(filePath)
  // Use ANSI escape codes to create a clickable link with "Open" as the visible text
  console.log(`\u001b]8;;${absolutePath}:${line}:${column}\u0007[${filename}:${line}]\u001b]8;;\u0007`.dim);
  // console.log(`\u001b]8;;file://${absolutePath}:${line}:${column}\u0007Open\u001b]8;;\u0007`);

}
function location_printable(filePath, line = 1, column = 1) {
  const absolutePath = path.resolve(filePath);
  const filename = path.basename(filePath)

  // console.log(`\u001b]8;;file://${absolutePath}:${line}:${column}\u0007Open\u001b]8;;\u0007`);
  return `\u001b]8;;${absolutePath}:${line}:${column}\u0007[${filename}:${line}]\u001b]8;;\u0007`;
}
// Example usage inside a try-catch block
// try {
//   // Intentional error
//   throw new Error('Simulated error!');
// } catch (error) {
//   const filePath = __filename; // Current file
//   const errorLine = 15; // Example line number
//   const errorColumn = 5; // Example column number

//   console.error('An error occurred:');
//   console.error(error.message);
//   logClickableOpenText(filePath, errorLine, errorColumn);
// }


