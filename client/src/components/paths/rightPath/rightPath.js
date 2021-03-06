import React from 'react';
import styled from 'styled-components';

const StyledPathR = styled.div`
  position: relative;
  right: -21%;
  width: fit-content;
  display: inline-block;
  @media (min-width: 400px) {
    right: -31%;
  }
`;

const RightPath = ({ color = '#DADADA' }) => {
  return (
    <StyledPathR>
      <svg
        width="100"
        height="9rem"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M50 0H30.2123C30.2123 0 21.6936 12.7407 12.987 53.0864C4.28041 93.4321 0 150.765 0 150.765L39.7104 172C39.7104 172 34.1698 112.543 39.7104 70.0741C45.2509 27.6049 50 0 50 0Z"
          transform="translate(100) scale(-2 2)"
          fill={color}
        />
      </svg>
    </StyledPathR>
  );
};

export default RightPath;
