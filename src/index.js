import React from "react";
import ReactGA from "react-ga";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGhost } from "@fortawesome/free-solid-svg-icons";

import "./styles/main.css";
import App from "./cotainers";

ReactGA.initialize("UA-128061632-1");
ReactGA.pageview(window.location.pathname + window.location.search);

library.add(faGhost);

ReactDOM.render(<App />, document.getElementById("root"));
