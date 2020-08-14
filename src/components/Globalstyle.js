import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .navbar {
    background: ${({ theme }) => theme.body};
    transition: all 0.50s linear;
  }
  .navbar a {
    color: ${({ theme }) => theme.text};
  }
  path {
    fill: ${({ theme }) => theme.text};
  }
  a {
    color: ${({ theme }) => theme.text};
  }
  .icon-path {
    fill: ${({ theme }) => theme.body};
    stroke: ${({ theme }) => theme.text};
  }
  .icon-path-alt {
    fill: ${({ theme }) => theme.text};
  }
  `