const initialState = {
    firstName: "",
    secondName: "",
    emailAddress: "",
    phoneNumber: ""
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "SET_FIRST_NAME":
        return {
          ...state,
          firstName: action.payload,
        };
      case "SET_SECOND_NAME":
        return {
          ...state,
          secondName: action.payload,
        };
        case "SET_EMAIL_ADRESS":
        return {
          ...state,
          emailAddress: action.payload,
        };
        case "SET_PHONE_NUMBER":
        return {
          ...state,
          phoneNumber: action.payload,
        };
        case "SET_CLIENT_DATA":
        return {
          ...state,
          firstName: action.payload.firstName,
          secondName: action.payload.secondName,
          emailAddress: action.payload.emailAddress,
          phoneNumber: action.payload.phoneNumber
        };
      default:
        return state;
    }
  }