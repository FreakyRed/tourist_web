import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { Form, Field } from "react-final-form";

import NextButton from "../buttons/NextButton";

const Container = styled.div`
  margin-top: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: reverse;
  justify-content: space-evenly;
`;

const TitleContainer = styled.h3`
  text-align: center;
  padding-bottom: 1rem;
`;

const Styles = styled.div`
form {

    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      margin: 1rem;
      text-align: right;
      & > label {
        color: ${props => props.theme.background};
        width: 7rem;
        font-size: 1em;
        line-height: 2rem;
      }

      & > input{
        flex: 1;
        padding: 3px 5px;
        font-size: 1em;
        margin-left: 15px;
        border: 1px solid ${props => props.theme.primary};
        border-radius: 3px;
        max-width: 18rem;
      }
    }
`

const FormPage = ({ dispatch }) => {
  const onSubmit = () => {
    console.log("Form sent");
  };

  return (
    <Container>

      <TitleContainer>Enter your information</TitleContainer>

        <Styles>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                placeholder="Enter your first name"
                />
            </div>

            <div>
              <label>Last Name</label>
              <Field
                name="lastName"
                component="input"
                placeholder="Enter your last name"
                />
            </div>

            <div>
              <label>E-mail Address</label>
              <Field
                name="email"
                component="input"
                placeholder="Enter your email"
                />
            </div>

            <div>
              <label>Phone Number</label>
              <Field
                name="phoneNumber"
                component="input"
                placeholder="Enter your phone number"
              />
            </div>
          </form>
        )}
        >
        <Field></Field>
      </Form>
          </Styles>

      <ButtonContainer>
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
      </ButtonContainer>
    </Container>
  );
};

export default connect()(FormPage);
