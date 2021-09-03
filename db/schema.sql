DROP DATABASE IF EXISTS cms_db;
CREATE DATABASE cms_db;

USE cms_db;

CREATE TABLE department (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(30)
    
    );
    
CREATE TABLE roles (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    
    REFERENCES department(id)
    );
    
CREATE TABLE employee (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
    REFERENCES employee(id)
    
    )

    23:15:35	INSERT INTO roles (title, salary, department_id) VALUES ("Sales Manager", 100000, 6),  ("Salesperson", 100000, 6),  ("Community Manager", 100000, 4),  ("Community Representative", 100000, 4),  ("Training Manager", 100000, 5),  ("Trainer", 100000, 5),  ("Lead Engineer", 100000, 2),  ("Junior Developer", 100000, 2),  ("QA Manager", 100000, 1),  ("QA Technician", 100000, 1),  ("Product Manager", 100000, 2)	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`cms_db`.`roles`, CONSTRAINT `roles_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`))	0.0078 sec
