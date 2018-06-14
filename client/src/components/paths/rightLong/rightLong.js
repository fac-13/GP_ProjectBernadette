import React from 'react';
import styled from 'styled-components';

const StyledPathR = styled.div`
  width: fit-content;
  margin-top: -79%;
  margin-left: 55%;

  @media (min-width: 400px) {
    left: 8%;
  }
`;

const RightLong = ({ color = '#ec632f' }) => {
  return (
    <StyledPathR>
      <svg
        width="100"
        height="320"
        viewBox="0 0 154 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60 0H36.2547C36.2547 0 26.0323 16.5926 15.5844 69.1358C5.13649 121.679 0 196.346 0 196.346L47.6525 224C47.6525 224 41.0038 146.568 47.6525 91.2593C54.3011 35.9506 60 0 60 0Z"
          transform="translate(119.595 456.34) scale(2) rotate(-175.291)"
          fill={color}
        />
      </svg>
    </StyledPathR>
  );
};

export default RightLong;
