const router = require("express").Router();
const Employee = require("../../models/Employee");

router.get("/", (req, res) => {
  Employee.findAll().then((empData) => {
    res.json(empData);
  });
});

router.post("/", (req, res) => {
  Employee.create(req.body)
    .then((newEmp) => {
      res.json(newEmp);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  // Calls the update method on the Book model
  Employee.update(
    {
      // All the fields you can update and the data attached to the request body.
      role: req.body.role,
    },
    {
      // Gets the books based on the isbn given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedEmp) => {
      // Sends the updated book as a json response
      res.json(updatedEmp);
    })
    .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  Employee.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedEmp) => {
      res.json(`this is the deleted Employee, bitch: ${deletedEmp}`);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
