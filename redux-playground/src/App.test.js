import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('if the heading is correct', () => {
  render(<App />);
  const headingElement = screen.getByText(/Todo's/i);
});

test('typing into input and displaying todo', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new todo .../i);
  const buttonElement = screen.getByRole('button', { name: /Add Todo/i });
  fireEvent.change(inputElement, { target: { value: 'Send a mail to Dad' } });
  fireEvent.click(buttonElement);
});