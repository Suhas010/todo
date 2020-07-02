import React from "react";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";
import 'antd/dist/antd.css';
import {store, persistor} from "../../store/index";
import Footer from "../footer";
import Main from "../main"
import "../../assets/styles/index.css";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={"Loading..."} persistor={persistor}>
      <Main />
      <Footer />
    </PersistGate>
  </Provider>
);

export default App;