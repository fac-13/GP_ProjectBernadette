import React from 'react';
import Wayfinder from './wayfinder/wayfinder.js';
import styled from 'styled-components';

export default class App extends React.Component {
  render() {
    const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    `;
    return (
      <Wrapper>
        <Wayfinder />
      </Wrapper>
    );
  }
}
