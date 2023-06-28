import './App.css';
import React from 'react';
import WelcomeText from './components/welcometext/welcometext';
import Header from './components/header/Header'  

function App() {
  return (
    <div className="App">
            <Header/>
      <WelcomeText/>
    </div>
  )
   
}

export default App;
