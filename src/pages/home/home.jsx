import React from 'react';
import WelcomeText from '../../components/welcometext/welcometext';
import Form from '../../components/form/Form';
import Header from '../../components/header/Header';
import '../../App.css';
import './home.css';


function Home() {
  

  return (
    <div>
      <div className='Header'>
      <Header />
      </div>
      <div className="App">
        <WelcomeText/>
        <Form/>
      </div>
    </div>
  )
}

export default Home;