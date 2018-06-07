import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  list-style: none;
  background-color: ${props => props.theme.color.yellow};
  color: ${props => props.theme.color.navy};
  padding: 2rem;
  text-align: center;
  border-radius: 5px;
`;
const StyledQuestion = styled.h2`
  font-weight: ${props => props.theme.weight.body};
`;

const Question = ({ question }) => {
  return (
    <Div>
      <StyledQuestion data-testid="question">{question}</StyledQuestion>
    </Div>
  );
};

export default Question;
