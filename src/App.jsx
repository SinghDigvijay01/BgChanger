import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  const colors = [
    { name: "Red", value: "red" },
    { name: "Green", value: "green" },
    { name: "Blue", value: "blue" },
    { name: "Pink", value: "pink" },
    { name: "Teal", value: "teal" },
    { name: "Orange", value: "orange" },
    { name: "Maroon", value: "maroon" },
    { name: "Purple", value: "purple" },
    { name: "Gold", value: "gold" },
    { name: "Lavender", value: "lavender" },
    { name: "Coral", value: "coral" },
    { name: "LightBlue", value: "lightblue" },
  ];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-white">
        {colors.map(({ name, value }) => (
          <div
            key={value}
            className="flex flex-wrap justify-center shadow-lg bg-black px-3 py-2 rounded-3xl mx-1 my-1"
          >
            <button
              className="outline-none px-4 py-2 rounded-full text-black"
              style={{ backgroundColor: value }}
              onClick={() => setColor(value)}
            >
              {name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
