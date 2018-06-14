import React from 'react';
import styled from 'styled-components';

const StyledPathM = styled.div`
  position: relative;
  top: -2rem;
  left: 35%;
  width: fit-content;
  display: inline-block;
  @media (min-width: 400px) {
    left: 35%;
  }
`;

const MidPath = ({ color = '#ec632f' }) => {
  return (
    <StyledPathM>
      <svg width="63" height="94" viewBox="0 0 63 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M77 0H46.5269C46.5269 0 33.4082 6 20 25C6.59184 44 0 71 0 71L61.154 81C61.154 81 52.6215 53 61.154 33C69.6865 13 77 0 77 0Z" transform="translate(-46 52.6709) scale(2) rotate(-20)" fill="#EC632F"/>
</svg>
    </StyledPathM>
  );
};

export default MidPath;
