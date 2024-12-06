#!/usr/bin/env node

const inquirer = require("inquirer");
// const createfile = require("./createfile");

console.log("Welcome to the CLI tool!");

const mainMenu = async () => {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        { name: "Create a file", value: "create" },
        { name: "Display help", value: "help" },
        { name: "Exit", value: "exit" },
      ],
    },
  ]);

  switch (action) {
    case "create":
      const { fileName } = await inquirer.prompt([
        {
          type: "input",
          name: "fileName",
          message: "Enter the file name:",
          validate: (input) => (input ? true : "File name cannot be empty."),
        },
      ]);
      const currentDir = process.cwd();
      createfile.create_file(fileName, currentDir);
      console.log(`File ${fileName} created successfully in ${currentDir}`);
      break;

    case "help":
      console.log(createfile());
      break;

    case "exit":
      console.log("Goodbye!");
      return;

    default:
      console.log("Invalid option. Please try again.");
      break;
  }

  // Loop back to main menu
  await mainMenu();
};
module.exports.option_test =mainMenu

