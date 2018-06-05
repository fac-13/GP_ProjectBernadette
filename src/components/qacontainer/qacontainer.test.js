import React from 'react';
import { renderIntoDocument, cleanup } from 'react-testing-library';
import QAContainer from './qacontainer';
import content from '../../data/wayfinderData';

describe('Test QA container', () => {
  afterEach(cleanup);

  test('QA Container renders questions properly', () => {
    const { getByTestId } = renderIntoDocument(
      <QAContainer qablock={content.start} />
    );
    const question = getByTestId('question');
    expect(question.textContent).toBe('Are you a grandparent?');
  });

  test('QA container renders results properly', () => {
    const { getByTestId } = renderIntoDocument(
      <QAContainer qablock={content['info-gen']} />
    );

    const result = getByTestId('result');
    expect(result.textContent).toBe('general info');
  });
});
