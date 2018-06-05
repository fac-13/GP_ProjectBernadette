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

  // TODO need to clear out and restart usersPath if user changes one of their answers
  clickHandler = event => {
    const goto = event.target.dataset.goto;
    this.setState(prevState => {
      return {
        usersPath: prevState.usersPath.concat(goto)
      };
    });
  };

  questionList = () => {
    const { content, usersPath } = this.state;

    return usersPath.map(item => {
      return (
        <QAContainer
          qablock={content[item]}
          clickHandler={this.clickHandler}
          key={item}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <h1>My Wayfinder</h1>
        <ul>{this.questionList()}</ul>
      </div>
    );
  }
}
