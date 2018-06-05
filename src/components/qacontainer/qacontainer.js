import React from 'react';
import Question from '../question/question';
import Options from '../options/options';
import Result from '../result/result';
import styled from 'styled-components';

const Item = styled.li`
list-style: none;
`

function QAContainer(props) {
  const { question, options, result, leaf } = props.qablock;
  return (
    <Item>
      {leaf ? (
        <Result result={result} />
      ) : (
        <React.Fragment>
          <Question question={question} />
          <Options options={options} clickHandler={props.clickHandler} />
        </React.Fragment>
      )}
    </Item>
  );
}

export default QAContainer;
