import React from 'react';
import { renderIntoDocument, cleanup } from 'react-testing-library';
import QAContainer from './qacontainer';
import content from '../../data/wayfinderData';
import { ThemeProvider } from 'styled-components';

// Grandparents Plus brand colors
const theme = {
  color: {
    orange: '#ec632f',
    yellow: '#fdc800',
    navy: '#1c2243',
    blue: '#669dad',
    white: '#FFF',
    graydark: '#575756',
    graymid: '#b2b2b2',
    graylight: '#dadada'
  },
  weight: {
    lead: '900',
    link: '600',
    body: '300'
  }
};

describe('Test QA container', () => {
  afterEach(cleanup);

  test('QA Container renders questions properly', () => {
    const { getByTestId } = renderIntoDocument(
    <ThemeProvider theme={theme}>
    <QAContainer qablock={content.start} />
    </ThemeProvider>
    );
    const question = getByTestId('question');
    expect(question.textContent).toBe('Are you a grandparent?');
  });

  test('QA container renders results properly', () => {
    const { getByTestId } = renderIntoDocument(
      <ThemeProvider theme={theme}>
      <QAContainer qablock={content['info-gen']} />
      </ThemeProvider>
    );

    const result = getByTestId('result');
    expect(result.textContent).toBe('general info');
  });
});
