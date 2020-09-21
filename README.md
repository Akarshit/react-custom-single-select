This project is for learning purpose and attempts to imitate react-select. Do not use this in production!

akarshit-select is custom single select component that can use used in place of HTML <select>. This components gives you some powerful features beyond the HTML select tag.

#### Features

1. Pass custom component in place of options.
2. Full control on styling each individual item to the whole component.

### Installation

`npm install --save akarshit-select`
or
`yarn add akarshit-select`

### Usage

#### Basic

```js
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
```

#### Advance

```js
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
```

Find more examples here:

## API

### props

`options` - An array of strings or objects. If objects, each object must either contain the `label` property or `comp` property.
`options.label` - string to be rendered in the select dropdown.
`options.comp` - component to render in place of the option, it will be rendered as is.
`options.style` - style to be applied to this item.
`placeholder` - the placeholder text to be displayed in the select component
`onSelect` - function with the signature `onSelect(option, { index } )`. This function will be called with the first parameter as the selected option and the second an obect with property `index` which is the selected index.
`customStyle` - accepts a stle object with the following properties:

1. `Item`: These style will be applied to the individual item
2. `List`: These style will be applied to the dropdown list.
