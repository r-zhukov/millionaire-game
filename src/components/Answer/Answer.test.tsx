import { render, screen } from '@testing-library/react';
import React from 'react';
import Answer from './Answer';

describe('button component', () => {
  test('render', () => {
    render(
      <Answer
        onAnswerClick={() => {}}
        id="a"
        answer="First"
        selected={false}
      />,
    );
    const linkElement = screen.getByText('First');
    expect(linkElement).toBeInTheDocument();
  });
});
