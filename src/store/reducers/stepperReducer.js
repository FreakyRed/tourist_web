const initialState = {
  step: 1,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        step: state.step + 1,
      };
    case "DECREASE":
      return {
        ...state,
        step: state.step - 1,
      };
    default:
      return state;
  }
}
