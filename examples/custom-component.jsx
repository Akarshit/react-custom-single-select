import React from 'react';
import ReactDOM from 'react-dom';
import SingleSelect from 'react-custom-single-select';

const Puppy = (props) => {
  return (
    <div
      style={{
        minHeight: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '10px',
      }}
    >
      <img
        style={{
          height: '40px',
          width: '40px',
          marginRight: '10px',
          borderRadius: 20,
        }}
        src='https://images.unsplash.com/photo-1600369671738-fa3a43efeced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
      />
      <p>Puppy</p>
    </div>
  );
};

function App() {
  const options = [
    {
      label: 'Puppy',
      comp: Puppy,
    },
    { label: 'Banana' },
    'Cherry',
  ];
  const customStyle = {
    List: {
      backgroundColor: 'pink',
    },
    Item: {
      fontSize: '10px',
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
