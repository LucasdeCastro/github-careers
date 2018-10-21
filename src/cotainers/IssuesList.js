import React, { Component } from "react";
import {
  RepoTab,
  Message,
  Loading,
  InputSearch,
  TabContainer,
  IssueListContainer
} from "../components";
import Issue from "./Issue";
import IssueCard from "../components/IssueCard";
import Accordion from "../components/Accordion";

import { connect } from "react-redux";
import {
  FETCH_ISSUES,
  FETCH_ISSUES_PAGE,
  FILTER_TITLE
} from "../reducers/issues";
import { filterRepo, removeFilter } from "../reducers/repos";

class IssuesList extends Component {
  componentDidMount() {
    const {
      repos: { list, filter }
    } = this.props;
    this.props.fetchIssues(list.filter(repo => !filter.includes(repo)));

    window.addEventListener("scroll", this.onScroll);
  }

  onScroll = el => {
    const scroll = el.target.body;
    const currentPosition = window.innerHeight + window.scrollY;
    const aroundEnd = scroll.scrollHeight - 240 <= currentPosition;
    if (aroundEnd) this.getNextPage();
  };

  getNextPage = () => {
    const {
      issues: { loading, page },
      repos: { list, filter }
    } = this.props;
    if (loading) return;

    this.props.fetchNextPage(
      page + 1,
      list.filter(repo => !filter.includes(repo))
    );
  };

  onSearch = el => {
    const value = el.target.value;
    this.props.filterTitle(value);
  };

  renderList() {
    const {
      issues: { data, filterData },
      repos
    } = this.props;

    const list = filterData.length ? filterData : data;

    return list.map(el => {
      return (
        <Accordion key={el.number}>
          <IssueCard item={el} repos={repos.list} />
          <Issue item={el} />
        </Accordion>
      );
    });
  }

  toggleFilter = (repo, filtered) => () => {
    const {
      repos: { list, filter }
    } = this.props;

    if (filtered) {
      this.props.fetchIssues(
        list.filter(item => item === repo || !filter.includes(item))
      );
      this.props.removeFilterConnect(repo);
    } else {
      this.props.fetchIssues(
        list.filter(item => item !== repo && !filter.includes(item))
      );
      this.props.filterRepoConnect(repo);
    }
  };

  render() {
    const {
      repos: { list, filter },
      issues: { loading, error }
    } = this.props;

    if (error) {
      return (
        <Message>
          Você atingiu o limite de requisições sem esta logado, realize o login
          para continuar ou aguarde 40 minutos
        </Message>
      );
    }

    return (
      <IssueListContainer>
        <InputSearch onChange={this.onSearch} placeholder={"Buscar vagas"} />
        <TabContainer>
          {list.map(repo => (
            <RepoTab
              key={repo}
              filted={filter.includes(repo)}
              onClick={this.toggleFilter(repo, filter.includes(repo))}
            >
              {repo}
            </RepoTab>
          ))}
        </TabContainer>
        {this.renderList()}
        <Loading isLoading={loading} />
      </IssueListContainer>
    );
  }
}

const mapDispatch = dispatch => ({
  fetchIssues: repos => dispatch({ type: FETCH_ISSUES, payload: repos }),
  filterTitle: filter => dispatch({ type: FILTER_TITLE, payload: filter }),
  fetchNextPage: (page, repos) =>
    dispatch({ type: FETCH_ISSUES_PAGE, page, repos }),
  filterRepoConnect: repo => dispatch(filterRepo(repo)),
  removeFilterConnect: repo => dispatch(removeFilter(repo))
});

export default connect(
  ({ issues, repo: { filterLabel }, repos }) => ({
    issues,
    filterLabel,
    repos
  }),
  mapDispatch
)(IssuesList);
