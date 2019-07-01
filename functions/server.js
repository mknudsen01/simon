const database = require("diskdb");

const db = database.connect(__dirname + "/db", ["scores"]);

module.exports = db;
