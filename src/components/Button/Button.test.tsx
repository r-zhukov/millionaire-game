import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from './Button';

describe('button component', () => {
  test('render', () => {
    render(<Button />);
    const linkElement = screen.getByTestId('base-button');
    expect(linkElement).toBeInTheDocument();
  });
});
