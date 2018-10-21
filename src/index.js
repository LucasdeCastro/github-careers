import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGhost } from "@fortawesome/free-solid-svg-icons";

import "./styles/main.css";
import App from "./cotainers";

library.add(faGhost);

ReactDOM.render(<App />, document.getElementById("root"));
