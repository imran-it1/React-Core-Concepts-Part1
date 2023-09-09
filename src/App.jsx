/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  const actors = ["Sakib", "Soriful Raj", "Jasim", "Rubel", "Salman Sha"];

  const singers = [
    { id: 1, name: "Magfuz", age: 65 },
    { id: 2, name: "Eva Rahman", age: 38 },
    { id: 3, name: "Shuvro", age: 25 },
    { id: 4, name: "Pritom", age: 30 },
  ];

  const books = [
    { id: 1, name: "Physics", price: 120 },
    { id: 2, name: "Math", price: 140 },
    { id: 3, name: "Chemistry", price: 160 },
    { id: 4, name: "Biology", price: 180 },
  ];

  return (
    <>
      <h1>Vite + React</h1>

      {/* {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))} */}

      {/* <Todo task="Learning React" isDone={true}></Todo>
      <Todo task="Core Concepts" isDone={false}></Todo>
      <Todo task="JSX" isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="55k"></Device>
      <Device name="iPun" price="25k"></Device>
      <Device name="Tablet" price="23k"></Device>
      <Person></Person>
      <Student grade="12" name="Imran" age="25"></Student>
      <Student grade={15} name="Lal Mia" age="45"></Student>
      <Student grade="30" name="Kala Mia"></Student>
      <Developer></Developer> */}
    </>
  );
}

export default App;

function Device({ name, price }) {
  return (
    <div>
      <h2>
        This Device: {name} Price: {price}
      </h2>
    </div>
  );
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "sakib", age: 12 };
  return (
    <h3 className="person">
      I am {person.name} with age {age} and my earning is {money}
    </h3>
  );
}

function Student({ grade, name, age = 0 }) {
  return (
    <div className="student">
      <h3>This is a Student</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Class: {grade}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid green",
    borderRadius: "20px",
  };
  return (
    <div style={developerStyle}>
      <h5>DevLoper</h5>
      <p>Coding: </p>
    </div>
  );
}
