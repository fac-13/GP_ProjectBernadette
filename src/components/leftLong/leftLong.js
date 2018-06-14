import React from 'react';
import styled from 'styled-components';

const StyledPathL = styled.div`
  border: solid 1px red;
  width: fit-content;
  margin-top: -79%;
  margin-left: 15%;

  @media (min-width: 400px) {
    left: 8%;
  }
`;

const LeftLong = ({ color = '#ec632f' }) => {
  return (
    <StyledPathL>
      <svg
        width="100"
        height="320"
        viewBox="0 0 154 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60 0H36.2547C36.2547 0 26.0323 16.5926 15.5844 69.1358C5.13649 121.679 0 196.346 0 196.346L47.6525 224C47.6525 224 41.0038 146.568 47.6525 91.2593C54.3011 35.9506 60 0 60 0Z"
          transform="translate(32.5934 456.17) scale(2 -2) rotate(4.70941)"
          fill={color}
        />
      </svg>
    </StyledPathL>
  );
};

export default LeftLong;
