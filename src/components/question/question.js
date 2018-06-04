import React from 'react';

const Question = ({ question }) => {
  return (
    <div>
      <h2 data-testid="question">{question}</h2>
    </div>
  );
};

export default Question;
