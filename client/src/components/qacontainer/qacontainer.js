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
            <Question question={question} link={link} linkText={linkText} />
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
