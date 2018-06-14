import React from 'react';
import { renderIntoDocument } from 'react-testing-library';
import Question from './question';
import gpTheme from '../../css/theme';
import { ThemeProvider } from 'styled-components';

test('Any question appears', () => {
  const options = [
    { answer: 'yes', goto: 'kc-rights' },
    { answer: 'no', goto: 'info-gen' }
  ];
  const { getByText } = renderIntoDocument(
    <ThemeProvider theme={gpTheme}>
      <Question question="hello test" options={options} />
    </ThemeProvider>
  );
  const headerNode = getByText('hello test');
  expect(headerNode.textContent).toBe('hello test');
});
