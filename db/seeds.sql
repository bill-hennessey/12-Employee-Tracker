INSERT INTO department (name)
VALUES ("Quality Assurance"),
       ("Development"),
       ("Community"),
       ("Training and Education"),
       ("Sales");
       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Indiana", "Jones",1,null),
       ("Ron", "Burbundy",5,null),    
       ("Jeffrey", "Lebowski",7,null),
       ("Walter", "Sobchek",9,null),
       ("Patrick", "Bateman",8,3),
       ("Cpt Jack", "Sparrow",2,1);


INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Manager", 100000, 6),
 ("Salesperson", 100000, 6),
 ("Community Manager", 100000, 4),
 ("Community Representative", 100000, 4),
 ("Training Manager", 100000, 5),
 ("Trainer", 100000, 5),
 ("Lead Engineer", 100000, 2),
 ("Junior Developer", 100000, 2),
 ("QA Manager", 100000, 1),
 ("QA Technician", 100000, 1),
 ("Product Manager", 100000, 2);
