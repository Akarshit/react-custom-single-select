import React from 'react';
import ReactDOM from 'react-dom';
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
    {
      src:
        'https://images.unsplash.com/photo-1557374800-8ba4ccd60e9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=91&q=80',
      text: 'Horse',
    },
    {
      src:
        'https://images.unsplash.com/photo-1573725342230-178c824a10f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=95&q=80',
      text: 'Lion',
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
      <h1>Hello CodeSandbox</h1>
      <SingleSelect
        options={options}
        customStyle={customStyle}
        onSelect={itemSelectedCallback}
      />
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

export default App;
