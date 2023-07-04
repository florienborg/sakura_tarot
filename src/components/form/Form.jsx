import React, { useState } from 'react';
import './Form.css';
import RedButton from '../RedButton/RedButton';
import { useNavigate } from "react-router-dom";

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    mood: '',
  });

  const navigate = useNavigate()

  function onClickHandler() {
    // tomar datos usuario
    // guardar datos del usurio
    navigate("/game")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      birthdate: '',
      mood: '',
    });
    const registeredText = document.getElementById('registered');
    registeredText.removeAttribute('hidden');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    const registeredText = document.getElementById('registered');
    registeredText.setAttribute('hidden', true);
  };

  return (
    <form className="container-input" onSubmit={handleSubmit}>
      <div className='boxName'>
          <label htmlFor="name" className="textInput">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="input-form"
            placeholder="Write your name"
            required
            value={formData.name}
            onChange={handleChange}
          />
      </div>
      <div className='boxBirthdate'>
          <label htmlFor="birthdate" className="textInput">
            Birthdate
          </label>
          <input
            type="text"
            id="birthdate"
            name="birthdate"
            className="input-form"
            placeholder="dd/mm/yyyy"
            value={formData.birthdate}
            onChange={handleChange}
          />
      </div>
      <div className='boxMood'>
          <label htmlFor="mood" className="textInput">
            Mood
          </label>
          <textarea
            type="text"
            id="mood"
            name="mood"
            className="input-mood"
            placeholder="Tell us how you are feeling today :)"
            value={formData.mood}
            maxLength={100}
            onChange={handleChange}
          />
        </div>
        <div className='button-form'>
        <RedButton text="START" onClick={onClickHandler} />
        </div>
    </form>
  );
}

export default Form;