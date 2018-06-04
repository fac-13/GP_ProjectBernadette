import React from 'react';
import content from '../../data/wayfinderData.js';
import QAContainer from '../qacontainer/qacontainer';

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
    return (
      <div>
        <h1>hello</h1>
        <ul>{this.questionList()}</ul>
      </div>
    );
  }
}
