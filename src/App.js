import './App.css';
import Content from './content/content.js'
import Header from './header/header.js'
import React from 'react';

function App() {
  return (
    <React.StrictMode>
      <div className='cadre'>
        <Header />
        <Content />
      </div>
    </React.StrictMode>
  );
}

export default App;
