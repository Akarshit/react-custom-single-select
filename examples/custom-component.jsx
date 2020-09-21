import React from "react";
import "./App.css";
import { AkarshitSelect } from "./akarshit-select";

const Puppy = (props) => {
  return (
    <div
      style={{
        minHeight: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "10px"
      }}
    >
      <img
        style={{ height: "40px", width: "40px", marginRight: "10px" }}
        src="https://images.unsplash.com/photo-1600369671738-fa3a43efeced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      />
      <p>Puppy</p>
    </div>
  );
};

function App() {
  const options = [
    {
      label: "Puppy",
      comp: Puppy
    },
    { label: "Banana" },
    "Cherry"
  ];
  const customStyle = {
    List: {
      backgroundColor: "pink"
    },
    Item: {
      fontSize: "10px"
    }
  };
  const itemSelectedCallback = (option, { index }) => {
    console.log(`Selected option at index ${index} is`, option);
  };
  return (
    <div className="App">
      <div style={{ margin: "50px" }}>
        <AkarshitSelect
          options={options}
          customStyle={customStyle}
          onSelect={itemSelectedCallback}
        />
        <h1>Bottom Text</h1>
      </div>
    </div>
  );
}

export default App;
