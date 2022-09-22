import { createGlobalStyle, ThemeProvider } from "styled-components";
import { FunctionComponent, PropsWithChildren } from "react";

const theme = {};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Public Sans", sans-serif;
  }

  #__next {
    display: contents;
  }
`;

export const Theme: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
