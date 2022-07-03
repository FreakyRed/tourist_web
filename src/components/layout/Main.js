import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../assets/themes/ThemeContext";
import Stepper from "../stepper/Stepper";

import WorldGlobe from "../../assets/pictures/worldglobe.png";

const Container = styled.div`
  background: ${(props) => props.background};
`;

const ContentContainer = styled.div``;

const Image = styled.img.attrs((props) => ({
  src: props.src,
}))``;

const Main = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container background={theme.background}>
      <Stepper></Stepper>
      <ContentContainer></ContentContainer>
      <Image src={WorldGlobe} alt></Image>
    </Container>
  );
};

export default Main;
