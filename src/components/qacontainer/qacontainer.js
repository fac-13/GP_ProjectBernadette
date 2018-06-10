import React from 'react';
import Question from '../question/question';
import Options from '../options/options';
import Result from '../result/result';
import styled from 'styled-components';

const Item = styled.li`
  list-style: none;
  box-sizing: border-box;
  outline: none;
`;

export default class QAContainer extends React.Component {
  componentDidMount() {
    // console.log(this.newItem);
    if (this.newItem !== undefined) {
      setTimeout(() => {
        this.newItem.focus();
      }, 400);
    }
  }

  render() {
    const { question, options, result, leaf } = this.props.qablock;

    return (
      <Item
        tabIndex="-1"
        innerRef={el => {
          this.newItem = el;
        }}
      >
        {leaf ? (
          <Result result={result} />
        ) : (
          <React.Fragment>
            <Question question={question} />
            <Options
              options={options}
              clickHandler={this.props.clickHandler}
              selectedPath={this.props.selectedPath}
            />
          </React.Fragment>
        )}
      </Item>
    );
  }
}
