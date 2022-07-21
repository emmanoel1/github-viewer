import { render, screen } from '@testing-library/react';
import App from '../App';

test('Renders Hello World', () => {
  render(<App />);
  const linkElement = screen.getByText('Hello World :)');
  expect(linkElement).toBeInTheDocument();
});
