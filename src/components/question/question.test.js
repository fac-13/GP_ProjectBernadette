import React from "react";
import { renderIntoDocument } from "react-testing-library";
import Question from './question'

test("Any question appears", () => {
  const { getByText } = renderIntoDocument(
    <Question question="hello test"/>
  );
  const headerNode = getByText("hello test");
  expect(headerNode.textContent).toBe("hello test");
});
