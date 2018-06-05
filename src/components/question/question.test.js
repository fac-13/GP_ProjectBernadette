import React from "react";
import { renderIntoDocument } from "react-testing-library";
import Question from './question'
import { ThemeProvider } from 'styled-components';

// Grandparents Plus brand colors
const theme = {
  color: {
    orange: '#ec632f',
    yellow: '#fdc800',
    navy: '#1c2243',
    blue: '#669dad',
    white: '#FFF',
    graydark: '#575756',
    graymid: '#b2b2b2',
    graylight: '#dadada'
  },
  weight: {
    lead: '900',
    link: '600',
    body: '300'
  }
};

test("Any question appears", () => {
  const { getByText } = renderIntoDocument(
    <ThemeProvider theme={theme}>
    <Question question="hello test"/>
    </ThemeProvider>
  );
  const headerNode = getByText("hello test");
  expect(headerNode.textContent).toBe("hello test");
});
