import React, { useState, useEffect } from "react";

function App() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/.netlify/functions/load-scores");
      const json = await response.json();

      setScores(json);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>hello</h1>
      {scores.map(score => (
        <p key={score._id}>
          {score.initials}: {score.score}
        </p>
      ))}
    </div>
  );
}

export default App;
