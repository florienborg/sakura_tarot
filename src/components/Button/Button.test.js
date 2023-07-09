import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';


test('renders Button component without errors', () => {
    render(<Button />);
});

test('renders Button component with correct text', () => {
    const buttonText = 'START';
    const { getByText } = render(<Button text={buttonText} />);
    expect(getByText(buttonText)).toBeInTheDocument();
});

test('renders Button component with text prop set to "CHOOSE"', () => {
    const { getByText } = render(<Button text="CHOOSE" />);
    const button = getByText('CHOOSE');
    expect(button).toBeInTheDocument();
});

test('renders Button component with text prop set to "SAVE"', () => {
    const { getByText } = render(<Button text="SAVE" />);
    const button = getByText('SAVE');
    expect(button).toBeInTheDocument();
});

test('renders Button component with text prop set to "RESTART"', () => {
    const { getByText } = render(<Button text="RESTART" />);
    const button = getByText('RESTART');
    expect(button).toBeInTheDocument();
});


test('renders Button component with default text', () => {
    const { getByText } = render(<Button />);
    expect(getByText('SAVE')).toBeInTheDocument();
});

test('invokes onClick function when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button onClick={onClickMock} />);
    const button = getByText('SAVE');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
});

test('renders Button component with correct CSS class', () => {
    const { container } = render(<Button />);
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toHaveClass('redBtn');
});

