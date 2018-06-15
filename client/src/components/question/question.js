import React from 'react';
import styled from 'styled-components';
import LeftPath from '../paths/leftPath/leftPath';
import RightPath from '../paths/rightPath/rightPath';
import MidPath from '../paths/midPath/MidPath';
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
  position: relative;
  z-index: 1;
`;
const StyledQuestion = styled.p`
  font-size: 1.5rem;
  font-weight: ${props => props.theme.weight.body};
`;

const Question = ({ question, link, linkText, selectedPath, options }) => {
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
      {options.length == 1 && (
        <MidPath
          color={selectedPath == '0' ? gpTheme.color.orange : undefined}
        />
      )}
      {options.length > 1 && (
        <React.Fragment>
          <LeftPath
            color={selectedPath == '0' ? gpTheme.color.orange : undefined}
          />
          <RightPath
            color={selectedPath == '1' ? gpTheme.color.orange : undefined}
          />
        </React.Fragment>
      )}
    </QuestionWrapper>
  );
};

export default Question;
