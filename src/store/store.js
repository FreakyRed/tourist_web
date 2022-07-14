import React from "react"
import { configureStore } from '@reduxjs/toolkit';

import stepperReducer from "./reducers/stepperReducer"
import formReducer from "./reducers/formReducer"

import logger from "redux-logger"

export const store = configureStore({
  reducer: {
    stepper: stepperReducer,
    form: formReducer,
  },
  middleware: [logger],
});

export const StoreContext = React.createContext(store)
