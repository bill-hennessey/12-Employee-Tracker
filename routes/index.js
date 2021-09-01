const inquirer = require("inquirer");

// write function to kick off inquirer
const init = () => {
  inquirer.prompt(questions).then(() => {
    console.log("whaat");
  });
};
const questions = [
  {
    type: "list",
    name: "q1",
    message: "Please select an option",
    choices: [
      "view all departments",
      "view all roles",
      "view all employees",
      "add a department",
      "add a role",
      "add an employee",
      "update an employee role",
    ],
  },
];

init();
