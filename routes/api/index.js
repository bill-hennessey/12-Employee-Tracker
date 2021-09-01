const router = require("express").Router();
const department = require("./departmentRoutes");
const role = require("./roleRoutes");
const employee = require("./employeeRoutes");

// this will make 3 different endpoints, is that what we want?
router.use("/department", department);
router.use("/role", role);
router.use("/employee", employee);

module.exports = router;
