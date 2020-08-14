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
    transition: all 0.50s linear;
  }
  path {
    fill: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  a {
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .icon-path {
    fill: ${({ theme }) => theme.body};
    stroke: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .icon-path-alt {
    fill: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .social a::before {
    background: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  `