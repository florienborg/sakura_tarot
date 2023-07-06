import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import Game from './Game';
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
    render(<Button text="Test Button" />);

    const button = screen.getByText('Test Button');
    expect(button).toBeInTheDocument();
});

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn()
}));



