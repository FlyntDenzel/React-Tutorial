import React from "react";
import ReactDOM from "react-dom";

// const number = 4;

ReactDOM.render(
  <div>
      <h1>My favourite video games</h1>
      <ul>
       <li>Call of Duty</li>
       <li>Splinter Cell</li>
       <li>Assassin's creed</li>
     </ul>
     <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);