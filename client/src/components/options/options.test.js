import React from 'react';
import { renderIntoDocument, cleanup } from 'react-testing-library';
import Options from './options';
import gpTheme from '../../css/theme';
import { ThemeProvider } from 'styled-components';

afterAll(cleanup);

describe('Test Options block', () => {
  const options = [
    { answer: 'yes', goto: 'kc-rights' },
    { answer: 'no', goto: 'info-gen' }
  ];
  const { container, getByText } = renderIntoDocument(
    <ThemeProvider theme={gpTheme}>
      <Options options={options} />
    </ThemeProvider>
  );
  test('Yes button displays', () => {
    const yesBtn = getByText('yes');
    expect(yesBtn).toBeTruthy();
  });
  test('No button displays', () => {
    const noBtn = getByText('no');
    expect(noBtn).toBeTruthy();
  });
});
