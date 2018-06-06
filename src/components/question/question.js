import React from 'react';

const Question = ({ question }) => {
  function createMarkup() {
    return { __html: question };
  }
  return (
    <div>
      <p data-testid="question" dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default Question;
