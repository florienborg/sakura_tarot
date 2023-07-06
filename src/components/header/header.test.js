import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
  it('should render the logo and icon correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    
    const logoImage = screen.getByAltText('Logo');
    const iconImage = screen.getByAltText('Icon saved');
    
    expect(logoImage).toBeInTheDocument();
    expect(iconImage).toBeInTheDocument();
  });
});

