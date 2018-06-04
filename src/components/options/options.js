import React from 'react';

const Button = ({ answer, goto }) => {
  return <button data-goto={goto}>{answer}</button>;
};

function Options({ options }) {
  const optionList = () => {
    let i = 0;

    return options.map(option => {
      return <Button {...option} key={i++} />;
    });
  };

  return (
    <div>
      <ul>{optionList()}</ul>
    </div>
  );
}

export default Options;
