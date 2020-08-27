const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const orders = require("../controllers/order.controller.js");

// Create a new Order
router.post("/", orders.create);

// Retrieve all Orders
router.get("/", orders.findAll);

// Retrieve a single Order with id
router.get("/:_id", orders.findOne);

// Update a Order with id
router.put("/:_id", orders.update);

// Delete a Order with id
router.delete("/:_id", orders.delete);

module.exports = router;
