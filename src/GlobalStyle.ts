import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input {
    font-family: 'Noto Sans', sans-serif;
  }
  
`;

export default GlobalStyle;
