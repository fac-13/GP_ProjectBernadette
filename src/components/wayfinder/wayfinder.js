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

  // TODO need to clear out and restart usersPath if user changes one of their answers
  clickHandler = event => {
    const { usersPath } = this.state;
    const goto = event.target.dataset.goto;
    const key = this.findKey(usersPath, goto);
    let modifiedPath = [...usersPath];
    modifiedPath.splice(usersPath.indexOf(key) + 1);
    this.setState(() => {
      return {
        usersPath: modifiedPath.concat(goto)
      };
    });
  };

  findKey = (path, child) => {
    for (let key of path) {
      let result;

      if (content[key].hasOwnProperty('options')) {
        content[key].options.map(option => {
          if (option.goto === child) {
            result = key;
          }
        });
      } else if (content[key].result === content[child].result) {
        result = content[key].result;
      }
      if (result) return result;
    }
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
    const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      border: solid 1px red;
      max-width: 700px;
      margin: 0 auto;
      font-family: 'Raleway', 'Arial', sans-serif;
      font-weight: ${props => props.theme.weight.body};
    `;
    const Title = styled.h1`
      color: ${props => props.theme.color.orange};
      text-align: center;
      font-family: Evenfall;
      border: solid 1px red;
    `;
    const QuestionUL = styled.ul`
      padding: 1rem;
      border: solid 1px red;
      width: 90%;
    `;

    return (
      <Wrapper>
        <Title>My Wayfinder</Title>
        <QuestionUL>{this.questionList()}</QuestionUL>
      </Wrapper>
    );
  }
}
