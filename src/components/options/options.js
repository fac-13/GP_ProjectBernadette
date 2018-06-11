import React from 'react';
import styled from 'styled-components';

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ButtonsList = styled.div`
  padding: 0;
  margin: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const ButtonStyle = styled.button`
  background-color: ${props =>
    props.active ? props.theme.color.graymid : props.theme.color.yellow};
  color: ${props => props.theme.color.navy};
  border-style: none;
  border-radius: 5px;
  font-family: ${props =>
    props.children.length > 12 ? 'Raleway, Arial, sans-serif' : 'Evenfall'};
  font-size: ${props => (props.children.length > 12 ? '1.7rem' : '4rem')};
  font-weight: ${props =>
    props.children.length > 12 ? props.theme.weight.link : ''};
  margin: ${props => (props.children.length > 12 ? '0 1rem' : '')};
  padding: ${props => (props.children.length > 12 ? '2.1rem 2rem' : '0 2rem')};
  height: 7rem;
  min-width: 4rem;
  min-height: fit-content;
  width: fit-content;
  @media (max-width: 400px) {
    font-size: ${props => (props.children.length > 12 ? '1.4rem' : '3.4rem')};
    min-width: ${props => (props.children.length > 10 ? '3.2rem' : 'fit-content')};
    padding: ${props =>
      /* for length greater than 12, the padding is changed for long lines of text i.e SGO
         for length greater than 10, padding is adjusted for no/notsure, otherwise padding for yes/no */
      props.children.length > 12 ? '.7rem .7rem' : props.children.length > 10 ? '0' : '0 2rem'}; 
    font-size: ${props => (props.children.length > 12 ? '1.1rem' : '2.8rem')};
    margin: ${props => (props.children.length > 10 ? '1rem 0.5rem' : '1rem')};
    min-height: fit-content;
    width: fit-content;
  }
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
