import React from "react";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";
import {store, persistor} from "../../store/index";
import Footer from "../footer";
import Main from "../main"
import "../../assets/styles/";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Main />
      <hr />
      <Footer />
    </PersistGate>
  </Provider>
);

export default App;