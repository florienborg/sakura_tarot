import './App.css';
import React from 'react';
import WelcomeText from './components/welcometext/welcometext';
import Header from './components/header/Header';
import RedButton from './components/RedButton/RedButton'

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomeText />
      <RedButton />
    </div>
  )

}

export default App;
