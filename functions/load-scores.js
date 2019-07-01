const database = require("diskdb");

exports.handler = async (event, context) => {
  try {
    const db = database.connect("functions/db", ["scores"]);
    const scores = db.scores.find();
    return {
      statusCode: 200,
      body: JSON.stringify(scores)
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
