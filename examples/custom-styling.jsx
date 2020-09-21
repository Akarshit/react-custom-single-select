import React from 'react';
import ReactDOM from 'react-dom';
import SingleSelect from 'react-custom-single-select';

function App() {
  const options = [
    {
      label: 'Apple',
      style: { fontStyle: 'italic' },
    },
    { label: 'Banana' },
    'Cherry',
    { label: 'Dates' },
    { label: 'Eggfruit' },
  ];
  const customStyle = {
    List: {
      backgroundColor: 'pink',
    },
    Item: {
      fontSize: '18px',
    },
  };
  const itemSelectedCallback = (option, { index }) => {
    console.log(`Selected option at index ${index} is`, option);
  };
  return (
    <div className='App'>
      <div style={{ margin: '50px' }}>
        <SingleSelect
          options={options}
          customStyle={customStyle}
          onSelect={itemSelectedCallback}
        />
        <h1>Bottom Text</h1>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
);

export default App;
