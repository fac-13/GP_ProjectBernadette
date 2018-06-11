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

const Result = ({ result, link, linkText }) => {
  return (
    <Div>
      <StyledResult data-testid="result">
        {result}
        {link ? (
          <a
            href={link}
            target="_blank"
            onClick={() => alert('This link will now open in a new tab')}
          >
            {linkText}
          </a>
        ) : null}
      </StyledResult>
    </Div>
  );
};

export default Result;
