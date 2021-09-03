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
    FOREIGN KEY (department_id)
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