const inquirer = require("inquirer");

const wudup = () => {
  console.log("wuduuup.");
};

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

// init();
module.exports = wudup;
