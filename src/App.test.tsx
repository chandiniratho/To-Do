import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
test('renders To-Do List header', () => {
  render(<App />);  // Render the App component
  const headerElement = screen.getByText(/to-do list/i);  // Search for 'To-Do List'
  expect(headerElement).toBeInTheDocument();  // Assert that it is found in the document
});
