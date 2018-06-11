import React from 'react';
import { renderIntoDocument, cleanup } from 'react-testing-library';
import QAContainer from './qacontainer';
import content from '../../data/wayfinderData';
import gpTheme from '../../css/theme';
import { ThemeProvider } from 'styled-components';

describe('Test QA container', () => {
  afterEach(cleanup);

  test('QA Container renders questions properly', () => {
    const { getByTestId } = renderIntoDocument(
      <ThemeProvider theme={gpTheme}>
        <QAContainer qablock={content.start} />
      </ThemeProvider>
    );
    const question = getByTestId('question');
    expect(question.textContent).toBe('Are you a grandparent?');
  });

  test('QA container renders results properly', () => {
    const { getByTestId } = renderIntoDocument(
      <ThemeProvider theme={gpTheme}>
        <QAContainer qablock={content['info-lost-contact']} />
      </ThemeProvider>
    );

    const result = getByTestId('result');
    expect(result.textContent).toBe(
      'More information about lost or denied contact.'
    );
  });
});
