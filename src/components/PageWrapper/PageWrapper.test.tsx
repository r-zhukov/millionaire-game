import { render, screen } from '@testing-library/react';
import React from 'react';
import PageWrapper from './PageWrapper';

describe('PageWrapper component', () => {
  test('render', () => {
    render(
      <PageWrapper>
        <div>Rendered</div>
      </PageWrapper>,
    );
    const wrapperElem = screen.getByTestId('page-wrapper');
    expect(wrapperElem).toBeInTheDocument();
  });

  test('has children', () => {
    render(
      <PageWrapper>
        <div>Rendered</div>
      </PageWrapper>,
    );
    const childElem = screen.getByText(/Rendered/);
    expect(childElem).toBeInTheDocument();
  });
});
