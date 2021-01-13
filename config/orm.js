const { builtinModules } = require("module");
const connection = require("../config/connection.js");

const orm = {
    selectAll: function (table, cb) {
        let queryString = "SELECT * FROM ?? ";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, value, cb) {
        let queryString = "INSERT INTO ?? (burger_name) VALUES (?)";
        connection.query(queryString, [table, value], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function (table, value, id, cb) {
        let queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";
        connection.query(queryString, [table, value, id], function(err, result) {
            if (err) throw err;
            cb(result);
        })

    }
}

module.exports = orm;