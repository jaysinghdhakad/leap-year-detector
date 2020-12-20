import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [userName, setUsername] = useState("");
  var [output, setOutput] = useState("");
  var [year, setYear] = useState();
  function nameHandler(name) {
    var userName = name.target.value;
    setUsername(userName);
  }
  function dateHandler(date) {
    var str = date.target.value;
    var year = str.substring(6, 10);

    setYear(year);
  }
  function computation() {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          var output = `${userName}, you are born in a leap year`;
          setOutput(output);
        } else {
          var output = `${userName}, you are  not born in a leap year`;
          setOutput(output);
        }
      } else {
        var output = `${userName}, you are born in an leap year`;
        setOutput(output);
      }
    } else {
      var output = `${userName}, you are not born in a leap year`;
      setOutput(output);
    }
  }

  return (
    <div className="App">
      <h2>
        hello user, input your information and know if you are born in a leap
        year
      </h2>
      <input placeholder="name" onChange={nameHandler} />
      <hr />
      <input
        placeholder="date of birth in dd/mm/yyyy format"
        onChange={dateHandler}
      />
      <hr />
      <button onClick={computation}>clickME!</button>
      <hr />
      <h2>{output}</h2>
    </div>
  );
}
