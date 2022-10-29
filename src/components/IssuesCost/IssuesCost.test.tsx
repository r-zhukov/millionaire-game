import { render, screen } from '@testing-library/react';
import React from 'react';
import IssuesCost from './IssuesCost';

describe('IssuesCost component', () => {
  test('render', () => {
    render(<IssuesCost costs={[100]} currentCost={0} />);
    const linkElement = screen.getByText(/100/);
    expect(linkElement).toBeInTheDocument();
  });
});
