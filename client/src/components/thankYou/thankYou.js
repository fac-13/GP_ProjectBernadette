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

const ThankYou = props => {
  const { error } = props;
  return (
    <StyledThankYou>
      <React.Fragment>
        {error ? (
          <p>
            Sorry, there was a problem sending your information.
            <br />Please try again later. You can also reach our advice line at
            0300 123 7015.
          </p>
        ) : (
          <p>
            Thank you for submitting the form! You should hear back from us in 3
            working days.
          </p>
        )}
        <p>
          <StyledThankYouLink href="https://www.grandparentsplus.org.uk/">
            Return to the Grandparents Plus website.
          </StyledThankYouLink>
        </p>
      </React.Fragment>
    </StyledThankYou>
  );
};

export default ThankYou;
