import React from "react"
import styled from "styled-components"

import '../../i18n';
import {useTranslation} from 'react-i18next';

const Container = styled.div`
 position: absolute;
  bottom: 1;
  width: 75%;
  height: 10rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: left;
  align-self: center;
  padding-bottom: 5%;
  border-top: 2px solid red;
  flex-shrink: 1;
  margin-left: 12.5%;
  border-color: rgba(47, 47, 47, 0.16);
`;

const FooterCol = styled.div`
flex: 1 0 21%;
margin: 1rem;
height: 5rem;
`;

const FooterRow = styled.div`
margin: 1rem;

&:first-child {
    font-weight: bold;
}
`

const Footer = () => {
    return <Container>
        <FooterCol>
    </FooterCol>
    <FooterCol>
        <FooterRow></FooterRow>
        <FooterRow></FooterRow>
        <FooterRow></FooterRow>
        <FooterRow></FooterRow>
        </FooterCol>
        <FooterCol>
        <FooterRow></FooterRow>
        <FooterRow>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. </FooterRow>
        </FooterCol>
        <FooterCol>
        <FooterRow></FooterRow>
        <FooterRow>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. </FooterRow>
        </FooterCol>
        </Container>
}

export default Footer;