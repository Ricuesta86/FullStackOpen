import { useState } from "react";
const getRandomInt = (max: any) => {
  return Math.floor(Math.random() * max);
};
const App = ({ anecdotes }: any) => {
  const [selected, setSelected] = useState(0);
  const handleClick = () => {
    setSelected(getRandomInt(anecdotes.length - 1));
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <button onClick={handleClick}>Next Anecdote</button>
    </div>
  );
};

export default App;
