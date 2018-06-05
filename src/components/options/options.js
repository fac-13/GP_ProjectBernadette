import React from 'react';
import styled from 'styled-components';

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ButtonsList = styled.ul`
  padding: 0;
  margin: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const ButtonStyle = styled.button`
  background-color: ${props => props.active ? props.theme.color.graymid : props.theme.color.yellow};
  border-style: none;
  border-radius: 5px;
  font-family: Evenfall;
  font-size: 4rem;
  height: 7rem;
  width: 7rem;
`;

const Button = ({ answer, goto, clickHandler }) => {
  return (
    <ButtonStyle onClick={clickHandler} data-goto={goto}>
      {answer}
    </ButtonStyle>
  );
};

function Options({ options, clickHandler }) {
  const optionList = () => {
    let i = 0;

    return options.map(option => {
      return <Button clickHandler={clickHandler} {...option} key={i++} />;
    });
  };

  return (
    <OptionsWrapper>
      <ButtonsList>{optionList()}</ButtonsList>
    </OptionsWrapper>
  );
}

export default Options;
