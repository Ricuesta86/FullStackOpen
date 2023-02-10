import { useEffect, useState } from "react";
import { anecdote } from "./types";

const getRandomInt = (max: any) => {
  return Math.floor(Math.random() * max);
};

const maxValue = (anecdotes: anecdote[]) => {
  let max: anecdote = anecdotes[0];
  anecdotes.forEach((elem: anecdote) => {
    if (elem.votes > max.votes) {
      max = elem;
    }
  });
  return max;
};

const Display = ({ anecdote }: any) => {
  return (
    <p>
      {anecdote.anecdote} {anecdote.votes} votes
    </p>
  );
};

const Title = ({ text }: any) => {
  return <h1>{text}</h1>;
};
type typeProps = {
  anecdotes: anecdote[];
};
const App = ({ anecdotes }: typeProps) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState<anecdote[]>(anecdotes);
  const [most, setMost] = useState(anecdotes[0]);

  const handleClick = () => {
    setSelected(getRandomInt(anecdotes.length));
  };

  const handleAddVotes = (anecdote: anecdote) => {
    setPoints(
      points.map((item: anecdote) =>
        item.anecdote === anecdote.anecdote
          ? { ...item, votes: (item.votes += 1) }
          : item
      )
    );
    setMost(maxValue(points));
  };

  return (
    <div>
      <Title text="Anecdote of the day" />
      <Display anecdote={points[selected]} />
      <button onClick={() => handleAddVotes(points[selected])}>vote</button>
      <button onClick={handleClick}>Next Anecdote</button>
      <Title text="Anecdote with most votes" />
      <Display anecdote={most} />
    </div>
  );
};

export default App;
