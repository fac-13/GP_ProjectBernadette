import React from 'react';
import styled from 'styled-components';

const ThankYouStyles = styled.div`
  background-color: ${props => props.theme.color.yellow};
  padding: 0% 5%;
  margin: 0 10%;
  line-height: 1.3rem;
`;

const ThankYou = () => {
  return (
    <ThankYouStyles>
      <p>
        Thank you for submitting the form! You should hear back from us in 3
        working days.
      </p>
      <p>
        <a href="https://www.grandparentsplus.org.uk/">
          Click here to return to the Grandparents Plus website.
        </a>
      </p>
    </ThankYouStyles>
  );
};

export default ThankYou;
