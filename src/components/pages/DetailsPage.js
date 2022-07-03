import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import NextButton from "../buttons/NextButton";

const Container = styled.div``;

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

const DetailsPage = ({dispatch}) => {  
  return <Container>
      <TitleContainer>Details about you</TitleContainer>
      <Text>Is this your first name?</Text>
      <TextAnswer></TextAnswer>
      <Text>Is this your last name?</Text>
      <TextAnswer></TextAnswer>
      <Text>Is this your email address?</Text>
      <TextAnswer></TextAnswer>
      <Text>Is this your phone number?</Text>
      <NextButton link="/form" text="Back" onClick={() => {dispatch({type: "DECREASE"})}}></NextButton>
  </Container>;
};

export default connect()(DetailsPage);
