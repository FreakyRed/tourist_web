import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../assets/themes/ThemeContext";
import Stepper from "../stepper/Stepper";

import WorldGlobe from "../../assets/pictures/worldglobe.png";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 5rem 0;
`;

const ContentContainer = styled.div`
  flex: 2;
  max-width: 25%;
  heigh: 100%;
  margin: 1rem 3rem 0;
`;

const Image = styled.img.attrs((props) => ({
  src: props.src,
}))`
  flex: 2;
  max-width: 25%;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

const Main = ({ content }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <Title>Travel anywhere...free!</Title>
      <Container theme={theme}>
        <Image src={WorldGlobe} alt="WorldGlobe"></Image>
        <ContentContainer>
          <Stepper></Stepper>
          {React.cloneElement(content)}
        </ContentContainer>
      </Container>
    </div>
  );
};

export default Main;
