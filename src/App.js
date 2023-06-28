import './App.css';
import React from 'react';
import WelcomeText from './components/welcometext/welcometext';
import ApiText from './components/apitext/apitext';  
import TitleAndPic from './components/MockupPag3-TitleAndPic/titleandpic';

function App() {
  return (
    <div className="App">
      <TitleAndPic/>
      <ApiText/>
    </div>
  );
}

export default App;
