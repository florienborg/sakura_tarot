import React, { useState } from 'react';
import './inputs.css';

function Form() {

  const [formData, setFormData] = useState({
    name: '',
    bithdate: '',
    mood: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      bithdate: '',
      mood: '',
      registered: '',
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
    
     
      <form className="container-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-form">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="input-form"
          placeholder='Enter your name'
          required
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="birthdate" className="text-form">
         Birthdate:
        </label>
        <input
          type="text"
          id="birthdate"
          name="birthdate"
          className="input-form"
          placeholder='Enter your birthdate'
          value={formData.bithdate}
    
          onChange={handleChange}
        />
        <label htmlFor="mood" className="text-form">
          Mood
        </label>
        <input
          type="mood"
          id="mood"
          name="mood"
          className="input-form"
          placeholder='Write what you feel before reading. Max 100 chars.' 
          value={formData.mood}
          onChange={handleChange}
        />
        }