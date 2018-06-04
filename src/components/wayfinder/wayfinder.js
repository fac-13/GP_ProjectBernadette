import React from "react";
import content from "../../data/wayfinderData.js";

export default class Wayfinder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usersPath: ["start"],
      content: content
    };
  }

  questionList = () => {
    const { content, usersPath } = this.state;

    return usersPath.map(item => {
      return (
        <QAContainer qablock={content[item]} key={content[item].question} />
      );
    });
  };

  render() {
    return <ul>{this.questionList()}</ul>;
  }
}
