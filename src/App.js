import "./App.css";
import React from "react";
import Person from "./person";
import Heading from "./heading";
import data from "./data";

export default function App() {
  let [persons, changepersons] = React.useState(data);

  let jsxperson = persons.map(function (person, i) {
    return (
      <Person key={i} name={person.Name} age={person.Age} img={person.img} />
    );
  });

  function clear() {
    changepersons([]);
  }

  return (
    <main>
      <div className="container">
        <Heading birthdays={persons.length} />
        {jsxperson}
        <button onClick={clear}>Clear all</button>
      </div>
    </main>
  );
}
