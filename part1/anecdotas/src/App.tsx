import { useEffect, useState } from "react";

const getRandomInt = (max: any) => {
  return Math.floor(Math.random() * max);
};

const getArrayCero = (length: Number) => {
  return Array.apply(null, new Array(length)).map(Number.prototype.valueOf, 0);
};

const maxValue = (points: any, anecdotes: any) => {
  let max = { anecdote: anecdotes[0], votes: 0 };
  let index = 0;
  points.forEach((elem: any) => {
    if (elem > max.votes) {
      max = { anecdote: anecdotes[index], votes: elem };
    }
  });
  return max;
};

const Display = ({ anecdote, votes }: any) => {
  return (
    <p>
      {anecdote} {votes} votes
    </p>
  );
};

const Title = ({ text }: any) => {
  return <h1>{text}</h1>;
};

const App = ({ anecdotes }: any) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(getArrayCero(anecdotes.length));
  const [most, setMost] = useState({ anecdote: anecdotes[0], votes: 0 });

  useEffect(() => {
    setMost(() => maxValue(points, anecdotes));
  }, [points]);

  const handleClick = () => {
    setSelected(getRandomInt(anecdotes.length));
  };

  const handleAddVotes = (selected: any) => {
    setPoints((prev) => [...prev, (prev[selected] += 1)]);
  };

  return (
    <div>
      <Title text="Anecdote of the day" />
      <Display anecdote={anecdotes[selected]} votes={points[selected]} />
      <button onClick={() => handleAddVotes(selected)}>vote</button>
      <button onClick={handleClick}>Next Anecdote</button>
      <Title text="Anecdote with most votes" />
      <Display anecdote={most.anecdote} votes={most.votes} />
    </div>
  );
};

export default App;
