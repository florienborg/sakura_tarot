import React from 'react';
import WelcomeText from '../../components/welcometext/welcometext';
import Form from '../../components/form/Form';
import Header from '../../components/header/Header';
import '../../App.css';


function Home() {
  

  return (
    <div className="App">
      <Header />
      <WelcomeText/>
      <Form/>
    </div>
  )
}

export default Home;