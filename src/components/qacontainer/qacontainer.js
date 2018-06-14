import React from 'react';
import Question from '../question/question';
import Options from '../options/options';
import Result from '../result/result';
import styled from 'styled-components';
import LeftLong from '../leftLong/leftLong';

const Item = styled.li`
  list-style: none;
  box-sizing: border-box;
  outline: none;
  height: fit-content;
  max-width: 320px;
  margin: 0 auto;
  border: solid 1px green;
  margin-bottom: -5%;
  position: relative;
`;

// max-height: 100vh;

export default class QAContainer extends React.Component {
  //setTimeout allows for smooth scroll to finish before the focus takes place
  componentDidMount() {
    setTimeout(() => {
      this.newItem.focus();
    }, 400);
  }

  render() {
    const {
      question,
      options,
      result,
      leaf,
      link,
      linkText
    } = this.props.qablock;

    return (
      <Item
        tabIndex="-1"
        innerRef={el => {
          this.newItem = el;
        }}
      >
        {leaf ? (
          <Result result={result} link={link} linkText={linkText} />
        ) : (
          <React.Fragment>
            <Question
              question={question}
              link={link}
              linkText={linkText}
              selectedPath={this.props.selectedPath}
            />
            <Options
              options={options}
              clickHandler={this.props.clickHandler}
              selectedPath={this.props.selectedPath}
            />
            {this.props.selectedPath == 0 && <LeftLong />}
          </React.Fragment>
        )}
      </Item>
    );
  }
}
