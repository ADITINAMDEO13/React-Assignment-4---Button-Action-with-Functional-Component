import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [paraState , setParaState] = useState(false);

   const handleClick = () =>{
    setParaState(true);
  }

  return (
    <div id="main">
        <button id="click" onClick={handleClick}>Click It Once</button>
        {
          paraState ? 

          <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
          :
          null
        }
    </div>
  );
}


export default App;
