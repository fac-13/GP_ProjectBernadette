import wayfinder from './wayfinderData';

test('Test JSON data for flowchart contains no errors', () => {
  function treeWalker(node) {
    if (node.leaf) {
      // console.log('result:', node.result);
      return;
    }
    // console.log(node.question);
    node.answer.map((obj, i) => {
      // console.log(node.answer[i].label);
      treeWalker(wayfinder[node.answer[i].goto]);
    });
  }
  expect(() => {
    treeWalker(wayfinder.start);
  }).not.toThrow();
});
