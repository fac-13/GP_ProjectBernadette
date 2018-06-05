import React from 'react';
import styled from 'styled-components';

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ButtonsList = styled.ul`
  padding: 0;
  margin: 0;
`

const Button = ({ answer, goto }) => {
  return <button data-goto={goto}>{answer}</button>;
};

function Options({ options }) {
  const optionList = () => {
    let i = 0;

    return options.map(option => {
      return <Button {...option} key={i++} />;
    });
  };

  return (
    <OptionsWrapper>
      <ButtonsList>{optionList()}</ButtonsList>
    </OptionsWrapper>
  );
}

export default Options;
