import React from 'react';
import WelcomeText from '../../components/welcometext/WelcomeText';
import Form from '../../components/form/Form';
import Header from '../../components/header/Header';
import '../../App.css';
import './Home.css';


function Home() {
  

  return (
    <div>
      <Header />
      <div className="form-container">
        <WelcomeText/>
        <Form/>
      </div>
    </div>
  )
}

export default Home;