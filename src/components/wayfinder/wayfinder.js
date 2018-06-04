import React from 'react';
import content from '../../data/wayfinderData.js';
import QAContainer from '../qacontainer/qacontainer';
import styled from 'styled-components';

export default class Wayfinder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usersPath: ['start'],
      content: content
    };
  }

  questionList = () => {
    const { content, usersPath } = this.state;

    return usersPath.map(item => {
      return <QAContainer qablock={content[item]} key={item} />;
    });
  };

  render() {
    const Title = styled.h1`
      color: #ec632f;
    `;
    return (
      <div>
        <Title>My Wayfinder</Title>
        <ul>{this.questionList()}</ul>
      </div>
    );
  }
}
