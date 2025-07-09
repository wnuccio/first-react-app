import React from 'react';
import logo from './logo.svg';
import './App.css';

type ReactTitleProps = {
  color: string;
};
function ReactTitle({ color }: ReactTitleProps, color2: string = 'red') {
  return (
    <span>
      This is my first{' '}
      <span
        style={{ color }}
        onMouseEnter={e => (e.currentTarget.style.color = 'yellow')}
        onMouseLeave={e => (e.currentTarget.style.color = color)}
      >
        {' React'}
      </span>{' '}
      app
    </span>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ReactTitle color={"green"} />
          <br />
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
