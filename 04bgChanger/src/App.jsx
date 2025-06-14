import { useState } from "react";
import "./App.css";

function App() {
  const [Color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: Color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-md px-3 py-2">
          <button
            onClick={() => setColor("red")}
            className="px-3 py-2 rounded-xl text-white outline-none shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="px-3 py-2 rounded-xl text-white outline-none shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="px-3 py-2 rounded-xl text-black outline-none shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("green")}
            className="px-3 py-2 rounded-xl text-white outline-none shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("pink")}
            className="px-3 py-2 rounded-xl text-black outline-none shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("lime")}
            className="px-3 py-2 rounded-xl text-black outline-none shadow-lg"
            style={{ backgroundColor: "lime" }}
          >
            Lime
          </button>
          <button
            onClick={() => setColor("black")}
            className="px-3 py-2 rounded-xl text-white outline-none shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
