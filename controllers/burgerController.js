var express = require("express");
var router = express.Router();
const burger = require('../models/burger.js');

// Import the model (cat.js) to use its database functions.
//var cat = require("../models/cat.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  
});

router.post("/api/cats", function(req, res) {
  
});

router.put("/api/cats/:id", function(req, res) {
  
});

module.exports = router;