import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  width: 300px;
  height: 300px;
  background-color: blue;
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
