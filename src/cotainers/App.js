import { Main, Title } from "../components";

import Issue from "./Issue";
import IssuesList from "./IssuesList";
import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Main>
        <div>
          <Title>github careers</Title>
        </div>

        <Route path="/" component={IssuesList} />
      </Main>
    );
  }
}
