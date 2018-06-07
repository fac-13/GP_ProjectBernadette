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
const StyledResult = styled.p`
  font-size: 1.5rem;
  font-weight: ${props => props.theme.weight.body};
`;

function Result({ result }) {
  function createMarkup() {
    return { __html: result };
  }
  return (
    <Div>
      <StyledResult
        data-testid="result"
        dangerouslySetInnerHTML={createMarkup()}
      />
    </Div>
  );
}

export default Result;
