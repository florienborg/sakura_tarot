import React from 'react';
import { render, screen } from '@testing-library/react';
import WelcomeText from './WelcomeText';

describe('Texto descriptivo de página principal', () => {
  it('should render the welcome text correctly', () => {
    render(<WelcomeText />);
    
    const welcomeText = screen.getByText(/Welcome to Mystic Code!/i);
    const guidanceText = screen.getByText(/Here you can find guidance about your past, present and future./i);
    const introText = screen.getByText(/Please, introduce your name and birthdate below to find out/i);
    
    expect(welcomeText).toBeInTheDocument();
    expect(guidanceText).toBeInTheDocument();
    expect(introText).toBeInTheDocument();
  });
});