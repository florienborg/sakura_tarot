import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Game from './game';
import Button from '../../components/Button/Button';

describe('Game integration tests', () => {
    test('renders Game component with CHOOSE button', () => {
        render(
            <MemoryRouter>
                <Game />
            </MemoryRouter>
        );

        const chooseButton = screen.getByText('CHOOSE');
        expect(chooseButton).toBeInTheDocument();

        fireEvent.click(chooseButton);
    });
});


test('renders Button component within Game component', () => {
    render(<Button text="SAVE" />);

    const button = screen.getByText('SAVE');
    expect(button).toBeInTheDocument();
});



