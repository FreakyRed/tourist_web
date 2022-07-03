import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../assets/themes/ThemeContext";
import Stepper from "../stepper/Stepper";

import WorldGlobe from "../../assets/pictures/worldglobe.png";

const Container = styled.div`
  background: ${(props) => props.theme.background};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 5rem 0;
`;

const ContentContainer = styled.div`
  flex: 3;
  max-width: 35%;
  border: 1px solid black;
  heigh: 100%;
  margin: 1rem 3rem 0;
`;

const Image = styled.img.attrs((props) => ({
  src: props.src,
}))`
  flex: 2;
  max-width: 25%;
`;

const Main = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container background={theme}>
      <Image src={WorldGlobe} alt="WorldGlobe"></Image>
      <ContentContainer>
        <Stepper></Stepper>
        <div>Hello world</div>
      </ContentContainer>
    </Container>
  );
};

export default Main;
