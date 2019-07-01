const db = require("./server");

exports.handler = async (event, context) => {
  try {
    console.log({ db });
    const scores = db.scores.find();
    return {
      statusCode: 200,
      body: JSON.stringify(scores)
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
