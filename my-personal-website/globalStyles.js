import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #121212;
    color: #fff;
    overflow: hidden;
  }
  h1, h2, h3, h4, h5, h6 {
    color: #fff;
  }
  p, a, span {
    color: #ccc;
  }
`;

export default GlobalStyle;
