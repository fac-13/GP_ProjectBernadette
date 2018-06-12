import React from 'react';
import styled from 'styled-components';
import LeftPath from '../leftPath/leftPath';
import RightPath from '../rightPath/rightPath';
import gpTheme from '../../css/theme';

const QuestionWrapper = styled.div`
  width: 250px;
  margin: 0 auto;
  @media (min-width: 400px) {
    width: 314px;
  }
`;

const StyledDiv = styled.div`
  list-style: none;
  background-color: ${props => props.theme.color.yellow};
  color: ${props => props.theme.color.navy};
  padding: 2rem;
  text-align: center;
  border-radius: 5px;
`;
const StyledQuestion = styled.p`
  font-size: 1.5rem;
  font-weight: ${props => props.theme.weight.body};
`;

const Question = ({ question, link, linkText, selectedPath }) => {
  return (
    <QuestionWrapper>
      <StyledDiv>
        <StyledQuestion data-testid="question">
          {question}
          {link ? (
            <a
              href={link}
              target="_blank"
              onClick={() => alert('This link will now open in a new tab')}
            >
              {linkText}
            </a>
          ) : null}
        </StyledQuestion>
      </StyledDiv>
      <LeftPath
        color={selectedPath == '0' ? gpTheme.color.orange : undefined}
      />
      <RightPath
        color={selectedPath == '1' ? gpTheme.color.orange : undefined}
      />
    </QuestionWrapper>
  );
};

export default Question;
