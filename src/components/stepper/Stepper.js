import React, { useContext } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { ThemeContext } from "../../assets/themes/ThemeContext";

const Tick = styled.div`
  border-radius: 10px;
  height: 0.5rem;
  width: 1rem;
  margin-left: 0.5rem;

  transition: width 2s ease, background 2s ease;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;

  & > ${Tick} {
    background: ${(props) => props.theme.secondary};
  }

  & :nth-child(${(props) => props.value}) {
    background: ${(props) => props.theme.primary};
    width: 3rem;
  }
`;

const Stepper = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <Button value={props.step} theme={theme}>
      <Tick></Tick>
      <Tick></Tick>
      <Tick></Tick>
    </Button>
  );
};

const mapStateToProps = (state) => ({
  step: state.stepper.step,
});

export default connect(mapStateToProps)(Stepper);
