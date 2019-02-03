import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from './themes/default';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Catamaran:700');

  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-size: 10px;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: ${fonts.default};
    background-color: ${colors.black};
    color: ${colors.white};
  }

  h1, h2, h3, .subtitle {
    font-family: ${fonts.header};
    font-weight: normal;
  }

  a {
    color: ${colors.tertiaryColor};
  }

  a:hover {
    color: ${colors.primaryColor};
  }

  svg {
    fill: ${colors.primaryColor};
  }

  @media screen and (min-width: 320px) {
    body {
      font-size: calc(16px + 6 * ((100vw - 320px) / 680));
    }
  }
  @media screen and (min-width: 1000px) {
    body {
      font-size: 22px;
    }
  }
`;
