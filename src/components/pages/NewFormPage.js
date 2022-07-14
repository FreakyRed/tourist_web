import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import "../../i18n";
import NextButton from "../buttons/NextButton";
import { connect } from "react-redux";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = yup.object({
  firstName: yup.string().min(1).required("First Name is required").max(255),
  lastName: yup.string().min(1).required("Second name is required").max(255),
  emailAddress: yup.string().email("Enter valid email adresss"),
  phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

const Container = styled.div`
  margin-top: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: reverse;
  justify-content: space-evenly;
`;


const NewFormPage = ({dispatch}) => {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      secondName: "",
      emailAddress: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
  });

  return (
    <form onSubmit={formik.onSubmit}>
      <Container>
        <TextField
          id="firstName"
          name="firstName"
          label={t("First Name")}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        ></TextField>
        <TextField
          id="secondName"
          name="secondName"
          label={t("Second Name")}
          value={formik.values.secondName}
          onChange={formik.handleChange}
          error={formik.touched.secondName && Boolean(formik.errors.secondName)}
          helperText={formik.touched.secondName && formik.errors.secondName}
        ></TextField>
        <TextField
          id="emailAddress"
          name="emailAddress"
          label={t("Email Address")}
          value={formik.values.emailAddress}
          onChange={formik.handleChange}
          error={formik.touched.emailAddress && Boolean(formik.errors.emailAddress)}
          helperText={formik.touched.emailAddress && formik.errors.emailAddress}
        ></TextField>
        <TextField
          id="phoneNumber"
          name="phoneNumber"
          label={t("Phone Number")}
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        ></TextField>
      </Container>

      <ButtonContainer>
        <NextButton
          link="/"
          text={t("Back")}
          onClick={() => {
            dispatch({ type: "DECREASE" });
          }}
        ></NextButton>
        <NextButton
          link="/details"
          text={t("Continue")}
          type="submit"
          onClick={() => {
            dispatch({type: "INCREASE"})
            dispatch({type: "SET_CLIENT_DATA", payload: formik.values})
          }}
        ></NextButton>
      </ButtonContainer>
    </form>
  );
};

export default connect()(NewFormPage);
