const express = require("express");
const crudController = require("./crud.controller");
const Cart = require("../models/cart.model");
const router = express.Router();


router.post("", crudController(cart).post);
router.get("", crudController(cart).getAll);
router.get("/:id", crudController(cart).getOne);
router.patch("/:id", crudController(cart).patch);
router.delete("/:id", crudController(cart).Delete);

module.exports = router;
