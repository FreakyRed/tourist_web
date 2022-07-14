import React, { useContext } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { ThemeContext } from "../../assets/themes/ThemeContext";

const Container = styled.button.attrs(props => ({
  type: props.type || "button",
}))`
  background: ${(props) => props.theme.primary};
  border-radius: 100px;
  border: none;
  padding: 1rem 2rem 1rem 2rem;
  margin: 1rem;
  color: ${(props) => props.theme.background};
  float: right;
  
  &:hover {
      background: ${(props) => props.theme.secondary};
      color: ${(props) => props.theme.white};
    cursor: pointer;
  }

  &:disabled {
    background: ${(props) => props.theme.highlight};
    cursor: default;
    transition: background 1s ease-out;
    color: black;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const NextButton = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledLink to={props.link}>
      <Container
        theme={theme}
        disabled={props.disabled}
        onClick={props.onClick}
        type={props.type}
      >
        {props.text}
      </Container>
    </StyledLink>
  );
};

export default NextButton;
