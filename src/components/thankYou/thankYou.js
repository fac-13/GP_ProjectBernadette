import React from 'react';
import styled from 'styled-components';

const ThankYouStyles = styled.div`
  background-color: ${props => props.theme.color.yellow};
  padding: 0% 5%;
  margin: 0 10%;
  font-size: 18px;
  line-height: 25px;
  border-radius: 5px;
  text-align: center;
`;

const ThankYouLink = styled.a`
  color: #35545d;
`;

const ThankYou = () => {
  return (
    <ThankYouStyles>
      <p>
        Thank you for submitting the form! You should hear back from us in 3
        working days.
      </p>
      <p>
        <ThankYouLink href="https://www.grandparentsplus.org.uk/">
          Return to the Grandparents Plus website.
        </ThankYouLink>
      </p>
    </ThankYouStyles>
  );
};

export default ThankYou;
