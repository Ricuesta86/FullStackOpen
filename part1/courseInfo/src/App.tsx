import { useState } from "react";

const Header = (props: any) => {
  return <h1>{props.course.name}</h1>;
};

const Part = (props: any) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = (props: any) => {
  return (
    <>
      {props.parts.map((part: any, index: number) => (
        <Part key={index} part={part} />
      ))}
    </>
  );
};

const Total = (props: any) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts.reduce(
        (result: number, part: any) => result + part.exercises,
        0
      )}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default App;
