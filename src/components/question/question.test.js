import React from "react";
import { renderIntoDocument } from "react-testing-library";
import Question from './question'

test("First question appears", () => {
  const { getByText } = renderIntoDocument(
    <Question />
  );
  const headerNode = getByText("Are you");
  expect(headerNode.textContent).toBe("Are you a grandparent?");
});
