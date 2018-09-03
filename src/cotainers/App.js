import { Main, Title, Header, Container, HeaderContainer } from "../components";
import Select from "../components/Select";

import React, { Component } from "react";

import IssuesList from "./IssuesList";
import { connect } from "react-redux";
import { FETCH_REPO, SET_LABEL } from "../reducers/repo";

import { Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.fetchRepo();
  }

  setLabel = el => {
    el.target.blur();
    const value = el.target.value || null;
    this.props.setLabel(value);
  };

  render() {
    const {
      repo: { labels }
    } = this.props;
    return (
      <Container>
        <Header>
          <HeaderContainer>
            <Title>github careers</Title>
            <Select
              data={labels}
              getValue={e => e.id}
              getLabel={e => e.name}
              onChange={this.setLabel}
            />
          </HeaderContainer>
        </Header>

        <Main>
          <Route path="/" component={IssuesList} />
        </Main>
      </Container>
    );
  }
}

const mapDispatch = dispatch => ({
  fetchRepo: _ => dispatch({ type: FETCH_REPO }),
  setLabel: id => dispatch({ type: SET_LABEL, payload: id })
});

export default connect(
  ({ repo }) => ({ repo }),
  mapDispatch
)(App);
