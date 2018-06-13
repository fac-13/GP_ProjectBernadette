import wayfinder from './wayfinderData';

/*
As we continue to modify the json object, this test will verify that it is still in working order by walking the node tree of the object, checking every node is accounted for.
Console.logs have been kept to help debug where the test fails in case of failure. If test fails, uncomment the console.logs to see where the treeWalker function stalls.
*/

test('Test JSON data for flowchart contains no errors', () => {
  const treeWalker = node => {
    if (node.leaf) {
      // console.log('result:', node.result);
      return;
    }
    // console.log(node.question);
    node.options.map(obj => {
      // console.log(obj.answer);
      treeWalker(wayfinder[obj.goto]);
    });
  };
  // treeWalker(wayfinder.start);
  expect(() => {
    treeWalker(wayfinder.start);
  }).not.toThrow();
});
