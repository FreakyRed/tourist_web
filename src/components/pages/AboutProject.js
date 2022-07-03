import React from "react";
import styled from "styled-components";

import NextButton from "../buttons/NextButton";
import { connect } from "react-redux";

import { useTranslation } from "react-i18next";
import "../../i18n";

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
  const { t } = useTranslation();
  return (
    <Container>
      <TitleContainer>{t("Travel with FreeTour Company")}</TitleContainer>
      <Text>{t("Is it really free?")}</Text>
      <TextAnswer>{t("It really is...this surely is NO scam!")}</TextAnswer>

      <Text>{t("Where can I travel to?")}</Text>
      <TextAnswer>{t("Anywhere! You have the last word.")}</TextAnswer>

      <Text>{t("What about accommodation?")}</Text>
      <TextAnswer>
        {t("We will take care of everything, just chill out and sign up.")}
      </TextAnswer>

      <Text>{t("So where do I sign up?")}</Text>
      <TextAnswer>{t("Click the button below.")}</TextAnswer>

      <NextButton
        link="/form"
        text={t("Continue")}
        onClick={() => {
          dispatch({ type: "INCREASE" });
        }}
      ></NextButton>
    </Container>
  );
};

export default connect()(AboutProject);
