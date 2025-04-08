import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Barbosa name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Barbosa/i);
  expect(nameElement).toBeInTheDocument();
});