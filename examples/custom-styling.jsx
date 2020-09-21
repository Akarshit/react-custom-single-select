import React from "react";
import "./App.css";
import { AkarshitSelect } from "akarshit-select";

function App() {
  const options = [
    {
      label: "Apple",
      style: { backgroundColor: "red" }
    },
    { label: "Banana" },
    "Cherry",
    { label: "Dates" },
    { label: "Eggfruit" }
  ];
  const customStyle = {
    List: {
      backgroundColor: "pink"
    },
    Item: {
      fontSize: "10px"
    }
  };
  return (
    <div className="App">
      <div style={{ margin: "50px" }}>
        <AkarshitSelect options={options} customStyle={customStyle} />
        <h1>Bottom Text</h1>
      </div>
    </div>
  );
}

export default App;
