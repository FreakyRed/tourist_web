import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import NextButton from "../buttons/NextButton";
import { useTranslation } from "react-i18next";
import "../../i18n";

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

const DetailsPage = ({ dispatch, firstName, secondName, emailAddress, phoneNumber}) => {
  const { t } = useTranslation();
  return (
    <Container>
      <TitleContainer>{t("Details about you")}</TitleContainer>
      <Text>{t("Is this your first name?")}</Text>
      <TextAnswer>{firstName}</TextAnswer>
      <Text>{t("Is this your last name?")}</Text>
      <TextAnswer>{secondName}</TextAnswer>
      <Text>{t("Is this your email address?")}</Text>
      <TextAnswer>{emailAddress}</TextAnswer>
      <Text>{t("Is this your phone number?")}</Text>
      <TextAnswer>{phoneNumber}</TextAnswer>
      <NextButton
        link="/form"
        text={t("Back")}
        onClick={() => {
          dispatch({ type: "DECREASE" });
        }}
      ></NextButton>
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  const {form} = state;
  return {firstName: form.firstName,
  secondName: form.secondName,
emailAddress: form.emailAddress,
phoneNumber: form.phoneNumber}
}

export default connect(mapStateToProps)(DetailsPage);
