import React, { useContext } from "react";
import styled from "styled-components";

import "../../i18n";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "../../assets/themes/ThemeContext";

const FooterCol = styled.div`
  flex: 1 0 21%;
  height: 5rem;
  margin-top: -2rem;
`;

const FooterRow = styled.div`
    margin: 0.75rem;
  &:first-child {
    color: ${(props) => props.theme.primary}
    font-weight: bold;
  }
`;

const Container = styled.div`
  position: absolute;
  bottom: 1;
  width: 75%;
  height: 10rem;
  display: flex;0.8
  flex-wrap: wrap;
  align-items: center;
  text-align: left;
  align-self: center;
  padding-bottom: 3rem;
  border-top: 2px solid rgba(47, 47, 47, 0.16);
  flex-shrink: 1;
  margin-left: 12.5%;

  & > ${FooterCol} > ${FooterRow} {
    &:first-child {
      color: ${(props) => props.theme.primary};
      font-weight: bold;
    }
  }
`;

const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <FooterCol>
        <FooterRow>FreeTour Logo</FooterRow>
      </FooterCol>
      <FooterCol>
        <FooterRow>FreeTour Company</FooterRow>
        <FooterRow>About us</FooterRow>
        <FooterRow>Contact</FooterRow>
        <FooterRow>Leave a review</FooterRow>
      </FooterCol>
      <FooterCol>
        <FooterRow>Lorem Ipsum</FooterRow>
        <FooterRow>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
          interdum ipsum, sit amet.{" "}
        </FooterRow>
      </FooterCol>
      <FooterCol>
        <FooterRow>Lorem Ipsum</FooterRow>
        <FooterRow>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
          interdum ipsum, sit amet.{" "}
        </FooterRow>
      </FooterCol>
    </Container>
  );
};

export default Footer;
