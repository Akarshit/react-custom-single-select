import React from 'react';
import ReactDOM from 'react-dom';
import SingleSelect from './src';

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
        style={{ height: '40px', width: '40px', marginRight: '10px' }}
        src='https://images.unsplash.com/photo-1600369671738-fa3a43efeced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
      />
      <p>Puppy</p>
    </div>
  );
};

export default function App() {
  const options = [
    { comp: Puppy },
    'Apple',
    'Banana',
    'Cherry',
    'Dates',
    'Eggfruit',
  ];
  return (
    <div className='App' style={{ height: '100vh', padding: '20px' }}>
      <h1>Hello CodeSandbox</h1>
      <SingleSelect options={options} />
      <h2>Start editing to see some magic happen!</h2>
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
