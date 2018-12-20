import { connect } from "react-redux";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { githubLogin } from "../firebase";
import {
  Main,
  Title,
  Header,
  Container,
  HeaderContainer,
  LoginButton
} from "../components";
import IssuePage from "./IssuePage";
import Select from "../components/Select";
import GithubCorner from '../components/GithubCorner';
import IssuesList from "./IssuesList";
import { FETCH_REPO, SET_LABEL } from "../reducers/repo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: localStorage.getItem("access_token")
    };
  }
  componentDidMount() {
    this.props.fetchRepo(this.props.repos.list);
  }

  setLabel = el => {
    el.target.blur();
    const value = el.target.value || null;
    this.props.setLabel(value);
  };

  login = () => {
    githubLogin().then(user => {
      const token = user.credential.accessToken;
      this.setState({ isLogged: token });
    });
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
            {!this.state.isLogged && (
              <LoginButton onClick={this.login}>Login</LoginButton>
            )}
            <GithubCorner />
          </HeaderContainer>
        </Header>

        <Main>
          <Route exact path="/" component={IssuesList} />
          <Route exact path="/:repo/:id" component={IssuePage} />
        </Main>
      </Container>
    );
  }
}

const mapDispatch = dispatch => ({
  fetchRepo: repos => dispatch({ type: FETCH_REPO, repos }),
  setLabel: id => dispatch({ type: SET_LABEL, payload: id })
});

export default connect(
  ({ repo, repos }) => ({ repo, repos }),
  mapDispatch
)(App);
