import React from "react";
import ReactDOM from "react-dom";

const fname = "Nchang";
const lname = "Denzel";

const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
      <h1>My favourite video games</h1>
      <ul>
       <li>Call of Duty</li>
       <li>Splinter Cell</li>
       <li>Assassin's creed</li>
     </ul>
     <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
     <p>Hello {fname} {lname}</p>
     <p>Copyrighted in {year}</p>

  </div>,
  document.getElementById("root")
);