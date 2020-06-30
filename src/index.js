import React from "react";
import ReactDOM from "react-dom";
import App from "./component/app/App";


var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);