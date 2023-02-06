import { useState } from "react";

const Statistics = ({ text, value }: any) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Button = ({ handle, text }: any) => (
  <button onClick={handle}>{text}</button>
);

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <Button handle={handleGood} text={"good"} />
      <Button handle={handleNeutral} text={"neutral"} />
      <Button handle={handleBad} text={"bad"} />
      <h2>Statistics</h2>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <table>
            <tbody>
              <Statistics text={"good"} value={good} />
              <Statistics text={"neutral"} value={neutral} />
              <Statistics text={"bad"} value={bad} />
              <Statistics text={"all"} value={good + neutral + bad} />
              <Statistics
                text={"positives"}
                value={good !== 0 ? (good / (good + neutral + bad)) * 100 : 0}
              />
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default App;
