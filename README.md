# Single Select

This project is for learning purpose and attempts to imitate react-select. Do not use this in production!

react-custom-single-select is custom single select component that can use used in place of HTML `<select>`. This components gives you some powerful features beyond the HTML select tag.

## Demo

[Live demo](https://codesandbox.io/s/gallant-feynman-0w3f6?file=/src/App.js:628-640)
![Single select demo](http://g.recordit.co/YKwHaHAVxB.gif)

#### Features

1. Pass custom component in place of options.
2. Full control on styling each individual item to the whole component.

### Installation

`npm install --save react-custom-single-select`
or
`yarn add react-custom-single-select`

### Usage

#### Basic

```js
import SingleSelect from 'react-custom-single-select';

function App() {
  const options = ['Apple', 'Banana', 'Cherry', 'Dates', 'Eggfruit'];

  const itemSelectedCallback = (option, { index }) => {
    console.log(`Selected option at index ${index} is`, option);
  };

  return (
    <div className='App'>
      <div style={{ margin: '50px' }}>
        <SingleSelect options={options} onSelect={itemSelectedCallback} />
        <h1>Bottom Text</h1>
      </div>
    </div>
  );
}
```

#### Advance

```js
import SingleSelect from 'react-custom-single-select';

const Row = (props) => {
  const { src, text } = props;
  return (
    <div
      style={{
        minHeight: '40px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '10px',
      }}
    >
      <img
        style={{
          height: '30px',
          width: '30px',
          marginRight: '10px',
          borderRadius: 20,
        }}
        src={src}
      />
      <div>{text}</div>
    </div>
  );
};

export default function App() {
  const data = [
    {
      src:
        'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80',
      text: 'Cat',
    },
    {
      src:
        'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=93&q=80',
      text: 'Dog',
    },
  ];
  const options = data.map((d) => React.createElement(Row, d));
  const customStyle = {
    Container: {
      height: '2em',
    },
  };
  const itemSelectedCallback = (option, { index }) => {
    console.log(`Selected option at index ${index} is`, option);
  };
  return (
    <div className='App' style={{ height: '100vh', padding: '20px' }}>
      <h1>React Select</h1>
      <SingleSelect
        options={options}
        customStyle={customStyle}
        onSelect={itemSelectedCallback}
      />
      <h2>Checkout this cool select component</h2>
    </div>
  );
}
```

Find more examples [here](https://github.com/Akarshit/react-custom-single-select/tree/master/examples).

## API

### props

`options` - An array of strings or objects. If objects, each object must either contain the `label` property or `comp` property.

`options.label` - string to be rendered in the select dropdown.

`options.comp` - component to render in place of the option, it will be rendered as is.

`options.style` - style to be applied to this item.

`placeholder` - the placeholder text to be displayed in the select component

`onSelect` - function with the signature `onSelect(option, { index } )`. This function will be called with the first parameter as the selected option and the second an obect with property `index` which is the selected index.

`customStyle` - accepts a style object with the following properties:

1. `Container`: These style will be applied to whole container of select.
1. `Header`: These style will be applied to the header of select component.
1. `List`: These style will be applied to the dropdown list.
1. `Item`: These style will be applied to the individual item

### Styling guide:

The package uses https://stitches.dev/ for styling. You can pass any compatible style in the `customStyle` object. A few important properties to help you style the component are:

1. `Item.isSelected`: set to "true" if item is selected, else "false". Note this is a string not boolean.
1. `Item.isHeader`: set to "true" if item is being displayed in the Header, else "false". Note this is a string not boolean.
