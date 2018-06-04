import React from 'react';
import { renderIntoDocument } from 'react-testing-library';
import QAContainer from './qacontainer';
import content from '../../data/wayfinderData';

test('QA Container renders properly', () => {
  const { getByTestId } = renderIntoDocument(
    <QAContainer qablock={content.start} />
  );
  const question = getByTestId('question');
  expect(question.textContent).toBe('Are you a grandparent?');
});
