const path = require('path');
const colors = require('colors');
function logClickableLinkWithPath(filePath, line = 1, column = 1) {
  const absolutePath = path.resolve(filePath);
  const fileUrl = `${absolutePath}:${line}:${column}`;
console.log(fileUrl)
  // Logs a clickable "Open" text with hover path
  console.log(`[\u001b]8;;${fileUrl}\u0007a2.js:${line}\u001b]8;;\u0007]`.dim);
//   console.log(`\u001b]8;;file://path/to/file\u0007\u001b[38;5;10mOpen\u001b[0m\u001b]8;;\u0007`.dim);
  // Fallback for non-hyperlink-supporting terminals
  console.log(`[a2.js:15]`.dim);
}


// Example usage
try {
  throw new Error('Simulated error!');
} catch (error) {
  const filePath = __filename; // Current file path
  const errorLine = 15; // Example line number
  const errorColumn = 5; // Example column number

  console.error('An error occurred:');
  console.error(error.message);
  logClickableLinkWithPath(filePath, errorLine, errorColumn);
}
