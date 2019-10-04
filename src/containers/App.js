import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { githubLogin } from '../firebase';
import {
  Main,
  Title,
  Header,
  Container,
  HeaderContainer,
  LoginButton,
} from '../components';
import IssuePage from './IssuePage';
import Select from '../components/Select';
import IssuesList from './IssuesList';
import { FETCH_REPO, SET_LABEL } from '../reducers/repo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: localStorage.getItem('access_token'),
    };
  }

  componentDidMount() {
    const { fetchRepo, repos } = this.props;
    fetchRepo(repos.list);
  }

  setLabel = (el) => {
    const { setLabel } = this.props;
    el.target.blur();
    const value = el.target.value || null;
    setLabel(value);
  };

  login = () => {
    githubLogin().then((user) => {
      const token = user.credential.accessToken;
      this.setState({ isLogged: token });
    });
  };

  render() {
    const {
      repo: { labels },
    } = this.props;
    const { isLogged } = this.state;
    return (
      <Container>
        <Header>
          <HeaderContainer>
            <Title>github careers</Title>
            <Select
              data={labels}
              getValue={(e) => e.id}
              getLabel={(e) => e.name}
              onChange={this.setLabel}
            />
            {!isLogged && (
              <LoginButton onClick={this.login}>Login</LoginButton>
            )}
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

App.propTypes = {
  setLabel: PropTypes.func.isRequired,
  fetchRepo: PropTypes.func.isRequired,
  repos: PropTypes.objectOf({
    list: PropTypes.arrayOf,
  }).isRequired,
  repo: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const mapDispatch = (dispatch) => ({
  fetchRepo: (repos) => dispatch({ type: FETCH_REPO, repos }),
  setLabel: (id) => dispatch({ type: SET_LABEL, payload: id }),
});

export default connect(
  ({ repo, repos }) => ({ repo, repos }),
  mapDispatch,
)(App);
