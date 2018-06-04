import React, { Component } from "react";
import data from "../../data/wayfinderData.js";

export default class Wayfinder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersPath: ["start"],
      data: data
    };
  }

  questionList = () => {
    const { data, usersPath } = this.state;

    return usersPath.map(item => {
      return <QAContainer question={data[item]} key={data[item].question} />;
    });
  };

  render() {
    return <ul>{this.questionList()}</ul>;
  }
}
