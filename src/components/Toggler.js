import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  border: 10px solid ${({ theme }) => theme.toggleBorder};
  width: 30px;
  height: 30px;
  background-color: blue;
  position: absolute;
  top: 120px;
  right: 50px;
  z-index: 9;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}></Button>;
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};

export default Toggle;
