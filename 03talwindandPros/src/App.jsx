import React from "react"; // ✅ Add this line
import { useState } from "react";
import "./App.css";
import Card from "./components/card";
function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "Divyesh",
    age: 19,
  };

  return (
    <>
      <h1 className="text-3xl bg-red-400 font-bold text-black mb-4">
        Talwind css and Props in react
      </h1>
      <div className="flex gap-6 flex-wrap justify-center">
        <Card username={"nature1"} someobj={myObj} />
        <Card username={"nature2"} />
      </div>
    </>
  );
}

export default App;
