import React from "react";
import ReactDOM from "react-dom";

const fname = "Nchang";
const lname = "Denzel";

const date = Date.now;

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
     <h2>Created by {fname}</h2>
     <h2>Copyright in {date}</h2>
  </div>,
  document.getElementById("root")
);