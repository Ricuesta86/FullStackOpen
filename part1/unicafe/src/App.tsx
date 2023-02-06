import { useState } from "react";

const Statistics = ({ good, neutral, bad }: any) => {
  if (good === 0 && neutral === 0 && bad === 0)
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  return (
    <>
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>positives {good !== 0 ? (good / (good + neutral + bad)) * 100 : 0}</p>
    </>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
