import wayfinder from './wayfinderData';

// as we continue to modify the json object, this test will verify that it is still in working order
// console logs kept to find errors in case of test failure
test('Test JSON data for flowchart contains no errors', () => {
  function treeWalker(node) {
    if (node.leaf) {
      // console.log('result:', node.result);
      return;
    }
    // console.log(node.question);
    node.options.map((obj) => {
      // console.log(obj.answer);
      treeWalker(wayfinder[obj.goto]);
    });
  }
  // treeWalker(wayfinder.start);
  expect(() => {
    treeWalker(wayfinder.start);
  }).not.toThrow();
});
