import React from 'react';
import Question from '../question/question';
import Options from '../options/options';
import Result from '../result/result';
import styled from 'styled-components';

const Item = styled.li`
  list-style: none;
`;

const QAContainer = props => {
  const { question, options, result, link, linkText, leaf } = props.qablock;
  return (
    <Item>
      {leaf ? (
        <Result result={result} link={link} linkText={linkText} />
      ) : (
        <React.Fragment>
          <Question question={question} link={link} linkText={linkText} />
          <Options
            options={options}
            clickHandler={props.clickHandler}
            selectedPath={props.selectedPath}
          />
        </React.Fragment>
      )}
    </Item>
  );
};

export default QAContainer;
