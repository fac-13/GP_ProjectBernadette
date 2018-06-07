import React from 'react';
import content from '../../data/wayfinderData.js';
import QAContainer from '../qacontainer/qacontainer';
import styled from 'styled-components';
import Form from '../form/form';

export default class Wayfinder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usersPath: ['start'],
      selectedPath: [],
      content: content
    };
  }

  // TODO need to clear out and restart usersPath if user changes one of their answers
  clickHandler = event => {
    const { usersPath,selectedPath } = this.state;
    const goto = event.target.dataset.goto;
    const dataKey = event.target.dataset.key;
    const key = this.findKey(usersPath, goto);
    let modifiedPath = [...usersPath];
    let modifiedSelected = [...selectedPath];
    modifiedPath.splice(usersPath.indexOf(key) + 1);
    modifiedSelected.splice(usersPath.indexOf(key));
    
    
    this.setState(() => {
      return {
        usersPath: modifiedPath.concat(goto),
        selectedPath: modifiedSelected.concat(dataKey)
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

    const { content, usersPath, selectedPath } = this.state;
    const formRegex = /complete-form/g;

    return (
      <div>
        {usersPath.map((item, i) => {
          return (
            <QAContainer
              qablock={content[item]}
              clickHandler={this.clickHandler}
              key={item}
              selectedPath={selectedPath[i]}
            />
          );
        })}
        {usersPath.some(string => formRegex.test(string)) && (
          <Form usersPath={usersPath} />
        )}
      </div>
    );

  };

  render() {
    const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      max-width: 600px;
      min-height: 100vh;

      background-color: ${props => props.theme.color.white};
      font-family: 'Raleway', 'Arial', sans-serif;
      font-weight: ${props => props.theme.weight.body};
    `;
    const Title = styled.h1`
      color: ${props => props.theme.color.orange};
      text-align: center;
      letter-spacing: 2px;
      font-size: 4rem;
      font-family: Evenfall, 'Raleway', 'Arial', sans-serif;
      margin: 3rem 0rem 1rem 0rem;
      @media (max-width: 400px) {
        font-size: 3.4rem;
        letter-spacing: 0px;
      }
    `;
    const QuestionUL = styled.ul`
      padding: 1rem;
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
