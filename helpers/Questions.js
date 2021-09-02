const inquirer = require("inquirer");
const cTable = require("console.table");
// const fetch = require("node-fetch");

const questionsInit = async () => {
  const response = await inquirer.prompt(question1);
  if (response.q1 === "view all departments") {
    let deptData = await fetch("/api/dept", {
      method: "GET",
    }).then(console.log(data));
    // return deptData;
  }
};
// fetch("/api/reviews", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(review),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log("Successful POST request:", data);
//     return data;
//   })
//   ;

// const questionsInit = async () => {
//   const response = await inquirer.prompt(question1);
//   console.log(response.q1);

// };

const question1 = [
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

module.exports = questionsInit;
