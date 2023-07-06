import { render } from '@testing-library/react';
import App from './App';

test('renders App component without errors', () => {
  render(<App />);
});

test('renders a div element in the App component', () => {
  const { container } = render(<App />);
  const divElement = container.querySelector('div');
  expect(divElement).toBeInTheDocument();
});
