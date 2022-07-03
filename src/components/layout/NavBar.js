import React, { useContext } from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import { ThemeContext } from "../../assets/themes/ThemeContext";

const Container = styled.div`
  display: flex;
  background: ${(props) => props.theme.secondary};
  padding: 0.5rem;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid ${(props) => props.theme.primary};
  justify-content: space-between;
`;

const Text = styled.div`
  margin-left: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.primary};
`;

const LinkA = styled.a`
  padding-left: 1rem;
`;

const Icons = styled.div`
  margin-right: 2rem;

  & > ${LinkA}:visited {
    color: ${(props) => props.theme.white};
  }

  & > ${LinkA}:link {
    color: ${(props) => props.theme.white};
  }

  & > ${LinkA}:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const NavBar = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <Text theme={theme}>FreeTour Company</Text>
      <Icons theme={theme}>
        <LinkA href="https://www.facebook.com">
          <FaFacebook size={20}></FaFacebook>
        </LinkA>
        <LinkA href="https://www.instagram.com">
          <FaInstagram size={20}></FaInstagram>
        </LinkA>
      </Icons>
    </Container>
  );
};

export default NavBar;
