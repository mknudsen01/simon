import database from "diskdb";

const db = database.connect("db", ["scores"]);

// db.scores.save({ initials: "ABC", score: 123 });

console.log("printing the scores: ", db.scores.find());

// console.log("removing the db now..", db.scores.remove());
