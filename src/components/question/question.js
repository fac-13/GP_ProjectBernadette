import React from 'react';
import styled from 'styled-components';
import leftPath from '../../assets/leftpath.svg';
import rigthPath from '../../assets/rightpath.svg';

const QuestionWrapper = styled.div`
  width: 250px;
  margin: 0 auto;
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
const StyledPathL = styled.img`
  position: relative;
  left: 3%;
`;

const StyledPathR = styled.img`
  position: relative;
  right: -21%;
`;

const Question = ({ question, link, linkText }) => {
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
      <StyledPathL src={`${leftPath}`} alt="a path" />
      <StyledPathR src={`${rigthPath}`} alt="a path" />
    </QuestionWrapper>
  );
};

export default Question;
