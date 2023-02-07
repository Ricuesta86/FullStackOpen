import { useState } from "react";

const getRandomInt = (max: any) => {
  return Math.floor(Math.random() * max);
};

const getArrayCero = (length:Number) =>{
  return Array.apply(null, new Array(length)).map(Number.prototype.valueOf,0);
}
const App = ({ anecdotes }: any) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(getArrayCero(anecdotes.length))

  const handleClick = () => {
    setSelected(getRandomInt(anecdotes.length));
  };

  const handleAddVotes = (selected:any) => {
    console.log(points[selected])
    setPoints(points=>
      [
        ...points,
        points[selected]+=1
      ]
    )
  };

  return (
    <div>
      <p>{anecdotes[selected]} {points[selected]} votes</p>
      <button onClick={()=>handleAddVotes(selected)}>vote</button>
      <button onClick={handleClick}>Next Anecdote</button>
    </div>
  );
};

export default App;
