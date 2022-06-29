import React, {useContext} from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { ThemeContext } from "../../assets/themes/ThemeContext";

const Tick = styled.div`
  background: #9f9f9f;
  border-radius: 10px;
  height: 0.5rem;
  width: 1rem;
  margin-left: 0.5rem;

  transition: width 2s ease, background 2s ease; 
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;

  & :nth-child(${(props) => props.value}) {
    background: ${(props) => props.background};
    width: 3rem;
  }
`;

const Stepper = (props) => {
  const theme = useContext(ThemeContext)

  return (
    <Container value={props.step} background={theme.primary}>
      <Tick></Tick>
      <Tick></Tick>
      <Tick></Tick>
    </Container>
  );
};

const mapStateToProps = (state) => ({
    step: state.stepper.step,
})

export default connect(mapStateToProps)(Stepper);

