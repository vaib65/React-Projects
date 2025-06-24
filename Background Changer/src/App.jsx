import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center  px-100 bottom-80">
          <div className=" flex flex-wrap justify-center gap-5 px-5 py-2  bg-white shadow-lg rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("violet")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "violet" }}
            >
              violet
            </button>
            <button
              onClick={() => setColor("grey")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "grey" }}
            >
              Grey
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
