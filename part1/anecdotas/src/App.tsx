import { useState } from "react";

const getRandomInt = (max: any) => {
  return Math.floor(Math.random() * max);
};

const getArrayCero = (length:Number) =>{
  return Array.apply(null, new Array(length)).map(Number.prototype.valueOf,0);
}
const maxVotes = (arr:any) =>{
  if()
  let max= Math.max(...arr)
  return arr.findIndex(max)
}
const Display = ({anecdote,votes}:any)=>{
 return <p>{anecdote} {votes} votes</p>
}


const Title = ({text}:any)=>{
  return <h1>{text}</h1>
}

const App = ({ anecdotes }: any) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(getArrayCero(anecdotes.length))

  const handleClick = () => {
    setSelected(getRandomInt(anecdotes.length));
  };

  const handleAddVotes = (selected:any) => {
    setPoints(points=>
      [
        ...points,
        points[selected]+=1
      ]
    )
  };

  return (
    <div>
      <Title text="Anecdote of the day" /> 
      <Display anecdote={anecdotes[selected]} votes={points[selected]} />
      <button onClick={()=>handleAddVotes(selected)}>vote</button>
      <button onClick={handleClick}>Next Anecdote</button>
      <Title text="Anecdote with most votes" />
      <Display anecdote={anecdotes[maxVotes(points)]} votes={maxVotes(points)} />
    </div>
  );
};

export default App;
