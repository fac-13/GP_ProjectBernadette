import React from 'react';
import styled from 'styled-components';

const StyledThankYou = styled.div`
  background-color: ${props => props.theme.color.yellow};
  padding: 0% 5%;
  margin: 0 10%;
  font-size: 18px;
  line-height: 25px;
  border-radius: 5px;
  text-align: center;
`;

const StyledThankYouLink = styled.a`
  color: #35545d;
`;

const ThankYou = () => {
  return (
    <StyledThankYou>
      <p>
        Thank you for submitting the form! You should hear back from us in 3
        working days.
      </p>
      <p>
        <StyledThankYouLink href="https://www.grandparentsplus.org.uk/">
          Return to the Grandparents Plus website.
        </StyledThankYouLink>
      </p>
    </StyledThankYou>
  );
};

export default ThankYou;
