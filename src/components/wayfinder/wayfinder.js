import React from 'react';
import styled from 'styled-components';
import content from '../../data/wayfinderData.js';
import QAContainer from '../qacontainer/qacontainer';
import Form from '../form/form';
import findKey from '../../utils/findKey';
import ThankYou from '../thankYou/thankYou';

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
const QuestionListContainer = styled.ul`
  padding: 1rem;
  width: 90%;
`;

export default class Wayfinder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usersPath: ['start'],
      selectedPath: [],
      content: content
    };
  }

  clickHandler = event => {
    const { usersPath, selectedPath } = this.state;
    const goto = event.target.dataset.goto;
    const key = findKey(usersPath, goto);
    const dataKey = event.target.dataset.key;
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

  questionList = () => {
    const { content, usersPath, selectedPath } = this.state;

    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  };

  scrollToBottom = () => {
    this.questionListEnd.scrollIntoView({ behavior: 'smooth' });
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }

  // function to clear path, passed to form
  clearUsersPath = () => {
    this.setState({
      usersPath: [],
      selectedPath: []
    });
  };

  render() {
    const { usersPath } = this.state;
    const formRegex = /complete-form/g;
    return (
      <Wrapper>
        <Title>My Wayfinder</Title>
        <QuestionListContainer>
          {this.questionList()}
          <div
            ref={el => {
              this.questionListEnd = el;
            }}
          />
        </QuestionListContainer>
        {usersPath.some(string => formRegex.test(string)) ? (
          <Form usersPath={usersPath} clearPath={this.clearUsersPath} />
        ) : null}
        {this.state.usersPath.length === 0 && <ThankYou />}
      </Wrapper>
    );
  }
}
