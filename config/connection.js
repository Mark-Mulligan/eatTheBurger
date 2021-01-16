require('dotenv').config();
const mysql = require("mysql");
var connection;

if (process.env.JAWSB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: "burgers_db"
    });
};

module.exports = connection;
