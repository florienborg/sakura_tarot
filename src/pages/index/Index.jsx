import { Link } from 'react-router-dom';
import '../../App.css';
import React from 'react';
import WelcomeText from '../../components/welcometext/welcometext';
import Header from '../../components/header/Header';
import RedButton from '../../components/RedButton/RedButton';
import Form from '../../components/form/Form';

function indexPage() {
  return (
    <div className="App">
      <Header />
      <WelcomeText/>
      <Form/>
      <Link to="game"><RedButton text='START' /></Link>
    </div>
  )

}

export default indexPage;