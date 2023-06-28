import React, { useState } from 'react';
import './inputs.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    mood: '',
  });

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
      <label htmlFor="name" className="text-input">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="input-form"
        placeholder="Enter your name"
        required
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="birthdate" className="text-input">
        Birthdate:
      </label>
      <input
        type="text"
        id="birthdate"
        name="birthdate"
        className="input-form"
        placeholder="Enter your birthdate"
        value={formData.birthdate}
        onChange={handleChange}
      />
      <label htmlFor="mood" className="text-mood">
        Mood:
      </label>
      <input
        type="text"
        id="mood"
        name="mood"
        className="input-mood"
        placeholder="Write what you feel"
        value={formData.mood}
        maxLength={100} //  limit 100 characters
        onChange={handleChange}
      />
      <button type="submit" className='start-buttom'>START</button>
      <p id="registered" hidden>
      Reading data has been successfully recorded
      </p>
    </form>
  );
}

export default Form;
