import './App.css';
import React from 'react';
import WelcomeText from './components/welcometext/welcometext';
import Header from './components/header/Header';
import RedButton from './components/RedButton/RedButton';
import Form from './components/form/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomeText />
      <Form />
      <RedButton text='START' />
    </div>
  )

}

export default App;
