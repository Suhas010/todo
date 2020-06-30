import React from "react";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";
import Main from "../main"
import {store, persistor} from "../../store/index";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>
);

export default App;