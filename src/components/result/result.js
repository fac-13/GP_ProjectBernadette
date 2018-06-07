import React from 'react';

function Result({ result }) {
  function createMarkup() {
    return { __html: result };
  }
  return <p data-testid="result" dangerouslySetInnerHTML={createMarkup()} />;
}

export default Result;
