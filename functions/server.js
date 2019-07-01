const database = require("diskdb");
const db = database.connect("functions/db", ["scores"]);

module.exports = db;
