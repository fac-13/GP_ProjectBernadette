import content from '../data/wayfinderData.js';

const findKey = (path, child) => {
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

export default findKey;
