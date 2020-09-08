import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s linear;
  }
  .navbar {
    background: ${({ theme }) => theme.body};
    transition: all 0.3s linear;
  }
  .navbar a {
    color: ${({ theme }) => theme.text};
    transition: all 0.3s linear;
  }
  path {
    fill: ${({ theme }) => theme.text};
    transition: all 0.3s linear;
  }
  a {
    color: ${({ theme }) => theme.text};
    transition: all 0.3s linear;
  }
  .icon-path {
    fill: ${({ theme }) => theme.body};
    stroke: ${({ theme }) => theme.text};
    transition: all 0.3s linear;
  }
  .icon-path-alt {
    fill: ${({ theme }) => theme.text};
    transition: all 0.3s linear;
  }
  .social a::before {
    background: ${({ theme }) => theme.text};
    transition: all 0.3s linear;
  }
  .overlay {
    background: ${({ theme }) => theme.body};
    transition: all 0.3s linear;
  }
  .navigation {
    background: ${({ theme }) => theme.body};
    transition: all 0.3s linear;
  }
  .navigation a {
    color: ${({ theme }) => theme.text};
    transition: all 0.3s linear;
  }
  `