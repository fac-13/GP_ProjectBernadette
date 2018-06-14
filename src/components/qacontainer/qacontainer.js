import React from 'react';
import Question from '../question/question';
import Options from '../options/options';
import Result from '../result/result';
import styled from 'styled-components';
import LeftLong from '../leftLong/leftLong';
import RightLong from '../rightLong/rightLong';
import MidLong from '../midLong/midLong';

const Item = styled.li`
  list-style: none;
  box-sizing: border-box;
  outline: none;
  height: fit-content;
  max-width: 320px;
  margin: 0 auto;
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
              options={options}
              link={link}
              linkText={linkText}
              selectedPath={this.props.selectedPath}
            />
            <Options
              options={options}
              clickHandler={this.props.clickHandler}
              selectedPath={this.props.selectedPath}
            />
            {options.length == 1 && this.props.selectedPath == 0 && <MidLong/>}
            {options.length > 1 &&
            <React.Fragment>
            {this.props.selectedPath == 0 && <LeftLong />}
            {this.props.selectedPath == 1 && <RightLong />}
            </React.Fragment>
            }
          </React.Fragment>
        )}
      </Item>
    );
  }
}
