import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders search yoiur faculty title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/search your faculty/i);
  expect(linkElement).toBeInTheDocument();
});
