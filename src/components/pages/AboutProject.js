import React from "react";
import styled from "styled-components";

import NextButton from "../buttons/NextButton";
import { connect } from "react-redux";

const Container = styled.div`
  margin-top: 1rem;
`;

const TitleContainer = styled.h3`
  text-align: center;
  padding-bottom: 1rem;
`;

const Text = styled.h4`
  margin: 2rem 0 0 1rem;
`;

const TextAnswer = styled.p`
  margin: 1rem;
`;

const AboutProject = ({ dispatch }) => {
  return (
    <Container>
      <TitleContainer>Travel with FreeTour Company</TitleContainer>
      <Text>Is it really free?</Text>
      <TextAnswer>It really is...this surely is NO scam!</TextAnswer>

      <Text>Where can I travel to?</Text>
      <TextAnswer>Anywhere! You have the last word.</TextAnswer>

      <Text>What about accommodation?</Text>
      <TextAnswer>
        We'll take care of everything, just chill out and sign up.
      </TextAnswer>

      <Text>So where do I sign up?</Text>
      <TextAnswer>Click the button below.</TextAnswer>

      <NextButton
        link="/"
        text="Back"
        onClick={() => {
          dispatch({ type: "DECREASE" });
        }}
      ></NextButton>
      <NextButton
        link="/"
        text="Continue"
        onClick={() => {
          dispatch({ type: "INCREASE" });
        }}
      ></NextButton>
    </Container>
  );
};

export default connect()(AboutProject);
