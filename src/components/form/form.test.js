import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Form from './Form';


describe('Form component', () => {
  it('Debe actualizar cambio de valores de cada campo de entrada input', () => {
    render(
    <MemoryRouter>
    <Form />
    </MemoryRouter>);
    
    const nameInput = screen.getByLabelText('Name');
    const birthdateInput = screen.getByLabelText('Birthdate');
    const moodInput = screen.getByLabelText('Mood');
    
    fireEvent.change(nameInput, { target: { value: 'Florencia' } });
    fireEvent.change(birthdateInput, { target: { value: '12/03/1994' } });
    fireEvent.change(moodInput, { target: { value: 'Feeling great!' } });
    
    expect(nameInput.value).toBe('Florencia');
    expect(birthdateInput.value).toBe('12/03/1994');
    expect(moodInput.value).toBe('Feeling great!');
  });
});