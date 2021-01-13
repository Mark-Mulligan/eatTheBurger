const orm = require('../config/orm.js');

var burger = {
  getAll: function(table, cb) {
    orm.selectAll(table, function(res) {
        cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.insertOne(table, value, function(res) {
        cb(res);
    });
  },
  eat: function(objColVals, condition, cb) {
    orm.updateOne(table, value, id, function(res) {
        cb(res);
    })
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;