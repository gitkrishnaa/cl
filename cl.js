#!/usr/bin/env node

const createfile = require("./createfile");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports.cl_readLine = rl

const args = process.argv.slice(2);
const currentDir = process.cwd();
// Get all folders in the current directory
// console.log(args)

function already_creating_option(create_file, fileName) {
  let is_create = false;
  rl.question("Overwrite existing file (y/n): ", (option) => {

    const formatted_option = option.toLowerCase();
    if (formatted_option == "yes" || formatted_option == 'y') {
      create_file(true, fileName, currentDir)
      rl.close();
    }
    else if (formatted_option == "no" || formatted_option == "n") {
      create_file(false, fileName, currentDir)
      rl.close();
    }
    else {
      is_create = null;
      console.log("Invalid option. Please try again.");
      rl.close();
    }




  });
  return is_create;
}



if (args.includes("help")) {
  // console.log(createfile())
  console.log('please read our documentation')
  process.exit(0);
}
else if (args.includes("test")) {
 
  console.log("Options:");
  console.log("1. Create a file");
  console.log("2. Display help");
  console.log("3. Exit");

  rl.question("Choose an option (1/2/3): ", (option) => {
    switch (option) {
      case "1":
        rl.question("Enter the file name: ", (fileName) => {
          if (fileName) {
            const currentDir = process.cwd();
            createfile.create_file(fileName, currentDir);
            console.log(`File ${fileName} created successfully in ${currentDir}`);
          } else {
            console.log("Please provide a valid file name.");
          }
          rl.close();
        });
        break;
      case "2":
        console.log(createfile());
        rl.close();
        break;
      case "3":
        console.log("Goodbye!");
        rl.close();
        break;
      default:
        console.log("Invalid option. Please try again.");
        rl.close();
        break;
    }
  });
}
else if (args[0] == "create" || args[0] == "cr") {
  const fileName = args[1];
  // createfile(fileName, currentDir);

  if (fileName) {
    createfile.create_file(fileName, currentDir, already_creating_option);
  }
  else {
    console.log('Please provide a filename')
  }
}

else{
    console.log(`please use correct one of the following
      cl create filename.js
      cl cr filename.js
      cl help 
      
      
      `)
}