import { useState } from "react";
type propsHello = {
  name: string;
  age: number;
};

const Hello = (props: propsHello) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <p>
        greettings app create{" "}
        <a href="https://github.com/Ricuesta86"> ricuesta</a>
      </p>
    </div>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

  return (
    <>
      <h1>Greettings</h1>
      <Hello name="Roberto" age={36} />
      <Footer />
    </>
  );
};

export default App;
