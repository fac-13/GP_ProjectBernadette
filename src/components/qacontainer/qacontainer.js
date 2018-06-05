import React from 'react';
import Question from '../question/question';
import Options from '../options/options';
import Result from '../result/result';

function QAContainer(props) {
  const { question, options, result, leaf } = props.qablock;
  return (
    <li>
      {leaf ? (
        <Result result={result} />
      ) : (
        <React.Fragment>
          <Question question={question} />
          <Options options={options} clickHandler={props.clickHandler} />
        </React.Fragment>
      )}
    </li>
  );
}

export default QAContainer;
