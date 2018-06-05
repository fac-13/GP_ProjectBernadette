import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  list-style: none;
  background-color: ${props => props.theme.color.yellow};
  color: ${props => props.theme.color.navy};
  padding: 2rem;
  text-align: center;
`;

const Question = ({ question }) => {
  return (
    <Div>
      <h2 data-testid="question">{question}</h2>
    </Div>
  );
};

export default Question;
