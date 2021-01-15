var express = require("express");
var router = express.Router();
const burger = require('../models/burger.js');

router.get("/", function (req, res) {
    burger.getAll('burgers', function (data) { 
        res.render('index', {
            burgers: data
        });
    })
});

router.get('/api/burgerdata', function (req, res) {
    burger.getAll('burgers', function(data) {
        res.json(data);
    })
})

router.post("/newburger", function (req, res) {
    burger.create('burgers', req.body.burgerName, function(data) {
        res.redirect('/');
    });
});

router.put("/devour/:id", function (req, res) {
    burger.eat('burgers', true, req.params.id, function(data) {
        res.json(data);
    })
});

router.delete("/remove/:id", function (req, res) {
    burger.remove('burgers', req.params.id, function(data) {
        res.json(data);
    })
})

module.exports = router;