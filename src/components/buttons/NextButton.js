import React, { useContext } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { ThemeContext } from "../../assets/themes/ThemeContext";

const Container = styled.button`
  background: ${(props) => props.theme.background};
  border-radius: 100px;
  border: none;
  padding: 1rem 2rem 1rem 2rem;
  margin: 1rem;
  color: ${(props) => props.theme.white};
  float: right;

  &:hover {
    background: #cd8b65;
    cursor: pointer;
  }

  &:disabled {
    background: #dfdfdf;
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
      >
        {props.text}
      </Container>
    </StyledLink>
  );
};

export default NextButton;
