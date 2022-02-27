const express = require("express");
const crudController = require("./crud.controller");
const User = require("../models/user.model");
const router = express.Router();


router.post("", crudController(User).post);
router.get("", crudController(User).getAll);
router.get("/:id", crudController(User).getOne);
router.patch("/:id", crudController(User).patch);
router.delete("/:id", crudController(User).Delete);

module.exports = router;
