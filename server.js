const express = require("express");
const routes = require("./routes");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");
const { response } = require("express");

// const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "lovebug",
    database: "cms_db",
  },
  console.log(`Connected to the cms_db database.`)
);

const questionsInit = async () => {
  const response = await inquirer.prompt(question1);
  // console.log(response);
  if (response.q1 === "View all departments") {
    db.query("SELECT * FROM department", (err, results) => {
      console.table(results);
      questionsInit();
    });
  }
  if (response.q1 === "View all roles") {
    db.query("SELECT * FROM roles", (err, results) => {
      console.table(results);
      questionsInit();
    });
  }
  if (response.q1 === "View all employees") {
    db.query("SELECT * FROM employee", (err, results) => {
      console.table(results);
      questionsInit();
    });
  }
  if (response.q1 === "Add a department") {
    const addDept = await inquirer.prompt(questionAddDept);
    console.log("user input: " + addDept);
    db.query(
      "INSERT INTO department (name) VALUES(?);",
      addDept.q1,
      (err, results) => {
        console.log("results " + results);
        questionsInit();
      }
    );
  }
  if (response.q1 === "Add a role") {
    const addRole = await inquirer.prompt(questionAddRole);
    db.query(
      "INSERT INTO roles (title, salary, department_id) VALUES(?, ?, ?);",
      [addRole.q1, addRole.q2, addRole.q3],
      (err, results) => {
        console.log("results " + results);
        questionsInit();
      }
    );
  }
  if (response.q1 === "Add an employee") {
    const addEmp = await inquirer.prompt(questionAddEmp);
    db.query(
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?, ?, ?, ?);",
      [addEmp.q1, addEmp.q2, addEmp.q3, addEmp.q4],
      (err, results) => {
        console.log("results " + results);
        questionsInit();
      }
    );
  }
  if (response.q1 === "EXIT") {
    return console.log("Have a nice day");
  }
};

const question1 = [
  {
    type: "list",
    name: "q1",
    message: "Please select an option",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "EXIT",
    ],
  },
];
const questionAddEmp = [
  {
    type: "input",
    name: "q1",
    message: "Please enter the Employee first name",
  },
  {
    type: "input",
    name: "q2",
    message: "Please enter the Employee last name",
  },
  {
    type: "input",
    name: "q3",
    message: "Please enter the Employee role",
  },
  {
    type: "list",
    name: "q4",
    message: "Please select the employee department",
    choices: [
      "Quality Assurance",
      "Development",
      "Community",
      "TrainingandEducation",
      "Sales",
    ],
  },
];

const questionAddDept = [
  {
    type: "input",
    name: "q1",
    message: "Please enter the department name",
  },
];
const questionAddRole = [
  {
    type: "input",
    name: "q1",
    message: "Please enter the job title/role name",
  },
  {
    type: "input",
    name: "q2",
    message: "Please enter the salary",
  },
  {
    type: "list",
    name: "q3",
    message: "Please choose the department this role is a part of",
    choices: [
      "Quality Assurance",
      "Development",
      "Community",
      "TrainingandEducation",
      "Sales",
    ],
  },
];

app.listen(PORT, () => console.log("Now listening"));
// turn on connection to db and server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log("Now listening, bitch"));
// });

questionsInit();
