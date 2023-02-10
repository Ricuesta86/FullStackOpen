import { useState } from "react";
import { typeProps } from "./types";

const App = ({ notes }: typeProps) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>
    </div>
  );
};

export default App;
