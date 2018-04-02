import { Main, Header, Container, HeaderContainer } from "../components";

import Issue from "./Issue";
import IssuesList from "./IssuesList";
import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <HeaderContainer>github careers</HeaderContainer>
        </Header>

        <Main>
          <Route path="/" component={IssuesList} />
        </Main>
      </Container>
    );
  }
}
