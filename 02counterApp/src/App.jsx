import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

// ❌ Using a normal variable (like let counter = 0) doesn't update the UI when changed
// ✅ useState is used in React to store and update values that should re-render the UI when changed

  let [counter, setcounter] = useState(0);
  // let counter = 15;

  function addValue() {
    if (counter < 20) {
      counter = counter + 1;
      setcounter(counter);
      console.log("clicked", counter);
    }
  }
  function removeValue() {
    if (counter > 0) {
      counter = counter - 1;
      setcounter(counter);
      console.log("clicked", counter);
    }
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}
export default App;
