import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('example',() =>{
  test('Renders Hello World', () => {
    render(<App />);
    const linkElement = screen.getByText('Hello World :)');
    expect(linkElement).toBeInTheDocument();
  });
})
