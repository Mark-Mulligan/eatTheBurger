const orm = require('../config/orm.js');

var burger = {
  getAll: function(table, cb) {
    orm.selectAll(table, function(res) {
        cb(res);
    });
  },
  create: function(table, value, cb) {
    orm.insertOne(table, value, function(res) {
        cb(res);
    });
  },
  eat: function(table, value, id, cb) {
    orm.updateOne(table, value, id, function(res) {
        cb(res);
    })
  }
};

module.exports = burger;