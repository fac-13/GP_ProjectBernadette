import React from 'react';

const Button = ({ answer, goto, clickHandler }) => {
  return (
    <button onClick={clickHandler} data-goto={goto}>
      {answer}
    </button>
  );
};

function Options({ options, clickHandler }) {
  const optionList = () => {
    let i = 0;

    return options.map(option => {
      return <Button clickHandler={clickHandler} {...option} key={i++} />;
    });
  };

  return (
    <div>
      <ul>{optionList()}</ul>
    </div>
  );
}

export default Options;
