import React from "react";
import "./App.css";
import { AkarshitSelect } from "akarshit-select";

function App() {
  const options = ["Apple", "Banana", "Cherry", "Dates", "Eggfruit"];
  const itemSelectedCallback = (option, { index }) => {
    console.log(`Selected option at index ${index} is`, option);
  };
  return (
    <div className="App">
      <div style={{ margin: "50px" }}>
        <AkarshitSelect options={options} onSelect={itemSelectedCallback} />
        <h1>Bottom Text</h1>
      </div>
    </div>
  );
}

export default App;
