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
  background-color: ${props =>
    props.active ? props.theme.color.graymid : props.theme.color.yellow};
  border-style: none;
  border-radius: 5px;
  font-family: Evenfall;
  font-size: 4rem;
  height: 7rem;
  width: 7rem;
`;

const Button = ({ answer, goto, clickHandler, dataKey, selectedPath}) => {
  console.log(selectedPath);
  if (selectedPath != dataKey && selectedPath != null){
    return (
      <ButtonStyle onClick={clickHandler} data-goto={goto} data-key={dataKey} active={true}>
        {answer}
      </ButtonStyle>
    );
  } else {
    return (
      <ButtonStyle onClick={clickHandler} data-goto={goto} data-key={dataKey} active={false}>
        {answer}
      </ButtonStyle>
    );
  }
};

function Options({ options, clickHandler, selectedPath }) {
  const optionList = () => {

    return options.map((option, i) => {
      return <Button clickHandler={clickHandler} {...option} key={i} dataKey={i} selectedPath={selectedPath} />;
    });
  };

  return (
    <OptionsWrapper>
      <ButtonsList>{optionList()}</ButtonsList>
    </OptionsWrapper>
  );
}

export default Options;
