const router = require("express").Router();
const Role = require("../../models/Role");

router.get("/", (req, res) => {
  Role.findAll().then((roleData) => {
    res.json(roleData);
  });
});

router.post("/", (req, res) => {
  Role.create(req.body)
    .then((newRole) => {
      res.json(newRole);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  Role.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedRole) => {
      res.json(`this is the deleted Role, bitch: ${deletedRole}`);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
