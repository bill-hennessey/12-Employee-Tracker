const router = require("express").Router();
const Department = require("../../models/Department");

router.get("/", (req, res) => {
  Department.findAll().then((deptData) => {
    res.json(deptData);
  });
});

router.post("/", (req, res) => {
  Department.create(req.body)
    .then((newDept) => {
      res.json(newDept);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  Department.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedDept) => {
      res.json(`this is the deleted Department, bitch: ${deletedDept}`);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
