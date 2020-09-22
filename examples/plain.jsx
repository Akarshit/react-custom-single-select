import React from 'react';
import ReactDOM from 'react-dom';
import SingleSelect from 'react-custom-single-select';

function App() {
  const options = ['Apple', 'Banana', 'Cherry', 'Dates', 'Eggfruit'];

  const itemSelectedCallback = (option, { index }) => {
    console.log(`Selected option at index ${index} is`, option);
  };

  return (
    <div className='App'>
      <div style={{ margin: '50px' }}>
        <h1>Hello SingleSelect</h1>
        <SingleSelect options={options} onSelect={itemSelectedCallback} />
        <h2>Checkout this cool select component!</h2>
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
