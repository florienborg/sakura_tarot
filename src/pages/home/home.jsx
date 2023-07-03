import React from 'react';
import WelcomeText from '../../components/welcometext/welcometext';
import RedButton from '../../components/RedButton/RedButton';
import Form from '../../components/form/Form';
import Header from '../../components/header/Header';
import { useNavigate } from "react-router-dom";
import '../../App.css';


function Home() {
  const navigate = useNavigate()

  function onClickHandler() {
    // tomar datos usuario
    // guardar datos del usurio
    navigate("/game")
  }

  return (
    <div className="App">
      <Header />
      <WelcomeText/>
      <Form/>
      <RedButton text="START" onClick={onClickHandler} />
    </div>
  )
}

export default Home;