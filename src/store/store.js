import { configureStore } from '@reduxjs/toolkit';

import logger from "redux-logger"

export const store = configureStore({
  reducer: {
  },
  middleware: [logger],
});

export const StoreContext = React.createContext(store)
