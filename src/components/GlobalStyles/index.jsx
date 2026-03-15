import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyles = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background: ${props => props.theme.colors.bodyBackground};
    transition: background 0.2s;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  ::selection {
    background: ${props => props.theme.colors.accentColor};
    color: #fff;
  }
`

export default GlobalStyles
