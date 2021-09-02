INSERT INTO department (id, name)
VALUES (001, "Quality Assurance"),
       (002, "Development"),
       (004, "Community"),
       (005, "Training and Education"),
       (003, "Sales");
       
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Indiana", "Jones",1,null),
       (002, "Ron", "Burbundy",5,null),    
       (003, "Jeffrey", "Lebowski",7,null),
       (004, "Walter", "Sobchek",9,null),
       (005, "Patrick", "Bateman",8,3),
       (006, "Patrick", "Bateman",2,1);


INSERT INTO roles (id, title, salary, department_id)
VALUES (001, "Sales Manager", 100000, 6),
 (002, "Salesperson", 100000, 6),
 (003, "Community Manager", 100000, 4),
 (004, "Community Representative", 100000, 4),
 (005, "Training Manager", 100000, 5),
 (006, "Trainer", 100000, 5),
 (007, "Lead Engineer", 100000, 2),
 (008, "Junior Developer", 100000, 2),
 (009, "QA Manager", 100000, 1),
 (010, "QA Technician", 100000, 1),
 (011, "Product Manager", 100000, 2);
