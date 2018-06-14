import React from 'react';
import styled from 'styled-components';

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  top: -16%;
`;

const ButtonsList = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (min-width: 400px) {
    margin: 2rem 0;
  }
`;

const ButtonStyle = styled.button`
  background-color: ${props =>
    props.active ? props.theme.color.graymid : props.theme.color.yellow};
  color: ${props => props.theme.color.navy};
  border-style: none;
  border-radius: 5px;
  font-family: ${props =>
    props.children.length > 12 ? 'Raleway, Arial, sans-serif' : 'Evenfall'};
  font-size: ${props => (props.children.length > 12 ? '1.1rem' : '2.8rem')};
  font-weight: ${props =>
    props.children.length > 12 ? props.theme.weight.link : ''};
  margin: ${props =>
    props.children.length > 12
      ? '0 1rem'
      : props.children.length > 10
        ? '1rem 0.5rem'
        : '1rem'};
  padding: ${props =>
    /* for length greater than 12, the padding is changed for long lines of text i.e SGO
       for length greater than 10, padding is adjusted for no/notsure, otherwise padding for yes/no */
    props.children.length > 12
      ? '.7rem .7rem'
      : props.children.length > 10
        ? '0'
        : '0 2rem'};
  height: 7rem;
  min-height: fit-content;
  width: fit-content;
  z-index: 1;
`;

const Button = ({ answer, goto, clickHandler, dataKey, selectedPath }) => {
  const isActive = selectedPath != dataKey && selectedPath != null;
  return (
    <ButtonStyle
      onClick={clickHandler}
      data-goto={goto}
      data-key={dataKey}
      active={isActive}
    >
      {answer}
    </ButtonStyle>
  );
};

const Options = ({ options, clickHandler, selectedPath }) => {
  const optionList = () => {
    return options.map((option, i) => {
      return (
        <Button
          clickHandler={clickHandler}
          {...option}
          key={i}
          dataKey={i}
          selectedPath={selectedPath}
        />
      );
    });
  };

  return (
    <OptionsWrapper>
      <ButtonsList>{optionList()}</ButtonsList>
    </OptionsWrapper>
  );
};

export default Options;
