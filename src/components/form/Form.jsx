import React, { useState } from 'react';
import './Form.css';
import Button from '../Button/Button.jsx';
import { useNavigate } from "react-router-dom";

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    mood: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    birthdate: '',
    mood: '',
  });

  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };
  
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    } else {
      newErrors.name = '';
    }
  
    const birthdateParts = formData.birthdate.trim().split('/');
  if (
    birthdateParts.length !== 3 ||
    !birthdateParts.every(part => !isNaN(part) && part !== '') ||
    parseInt(birthdateParts[0]) > 31 ||
    parseInt(birthdateParts[1]) > 12 ||
    parseInt(birthdateParts[2]) < 1910
  ) {
    newErrors.birthdate = 'Invalid birthdate format (dd/mm/yyyy)';
    valid = false;
  } else {
    newErrors.birthdate = '';
  }
  
    if (!formData.mood.trim()) {
      newErrors.mood = 'Mood is required';
      valid = false;
    } else {
      newErrors.mood = '';
    }
  
    setFormErrors(newErrors);
    return valid;
  };
  
  


  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      fetch('http://localhost:3001/formdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          setFormData({
            name: '',
            birthdate: '',
            mood: '',
          });
          navigate('/game');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="container-input" onSubmit={handleSubmit}>
      <div className='boxName'>
        <label htmlFor='name' className='textInput'>
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='input-form'
          placeholder='Write your name'
          required
          value={formData.name}
          onChange={handleChange}
          maxLength={20}
          minLength={2}
        />
        <div className='error-message'>{formErrors.name}</div>
      </div>
      <div className='boxBirthdate'>
        <label htmlFor='birthdate' className='textInput'>
          Birthdate
        </label>
        <input
          type='text'
          id='birthdate'
          name='birthdate'
          className='input-form'
          placeholder='dd/mm/yyyy'
          required
          value={formData.birthdate}
          maxLength={10}
          onChange={handleChange}
        />
        <div className='error-message'>{formErrors.birthdate}</div>
      </div>
      <div className='boxMood'>
        <label htmlFor='mood' className='textInput'>
          Mood
        </label>
        <textarea
          type='text'
          id='mood'
          name='mood'
          className='input-mood'
          placeholder='Tell us how you are feeling today'
          required
          value={formData.mood}
          maxLength={100}
          minLength={2}
          onChange={handleChange}
        />
        <div className='error-message'>{formErrors.mood}</div>
      </div>
      <div className='button-form'>
        <Button text='START' type='submit' />
      </div>
    </form>
  );
}

export default Form;