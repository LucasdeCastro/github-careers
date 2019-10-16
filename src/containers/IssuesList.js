import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  RepoTab,
  Message,
  Loading,
  InputSearch,
  TabContainer,
  ScrollContainer,
  IssueListContainer,
} from '../components';

import Issue from './Issue';
import IssueCard from '../components/IssueCard';
import EmptyState from '../components/EmptyState';

import {
  FETCH_ISSUES,
  FETCH_ISSUES_PAGE,
  FILTER_TITLE,
} from '../reducers/issues';
import { filterRepo, removeFilter } from '../reducers/repos';

class IssuesList extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedItem: null, isMobile: document.body.offsetWidth <= 1200 };
  }

  componentDidMount() {
    const {
      fetchIssues,
      repos: { list, filter },
    } = this.props;
    fetchIssues(list.filter((repo) => !filter.includes(repo)));
  }

  componentDidUpdate() {
    const { selectedItem } = this.state;
    const { issues: { filterData } } = this.props;
    if (!selectedItem && filterData.length) {
      setTimeout(() => this.setState({ selectedItem: filterData[0] }), 0);
    }
  }

  onScroll = (el) => {
    const scroll = el.target;
    const currentPosition = scroll.clientHeight + scroll.scrollTop;
    const aroundEnd = scroll.scrollHeight - 240 <= currentPosition;
    if (aroundEnd) this.getNextPage();
  };

  getNextPage = () => {
    const {
      fetchNextPage,
      issues: { loading, page },
      repos: { list, filter },
    } = this.props;
    if (loading) return;

    fetchNextPage(
      page + 1,
      list.filter((repo) => !filter.includes(repo)),
    );
  };

  onSearch = (el) => {
    const { filterTitle } = this.props;
    const { value } = el.target;
    filterTitle(value);
  };

  toggleFilter = (repo, filtered) => () => {
    const {
      repos: { list, filter },
      fetchIssues,
      filterRepoConnect,
      removeFilterConnect,
    } = this.props;

    if (filtered) {
      fetchIssues(
        list.filter((item) => item === repo || !filter.includes(item)),
      );
      removeFilterConnect(repo);
    } else {
      fetchIssues(
        list.filter((item) => item !== repo && !filter.includes(item)),
      );
      filterRepoConnect(repo);
    }
  };

  selectItem = (selectedItem) => {
    const { repos: { list: repos }, history } = this.props;
    const { isMobile } = this.state;
    if (isMobile) {
      const repo = repos.filter((repokey) => selectedItem.url.includes(repokey));
      history.push(`${repo}/${selectedItem.number}`);
    } else {
      this.setState({ selectedItem });
    }
  }

  renderList() {
    const {
      issues: { data, filterData },
      repos,
    } = this.props;
    const { selectedItem = {} } = this.state;
    const list = filterData.length ? filterData : data;

    return list.map((el) => (
      <IssueCard selected={selectedItem} item={el} repos={repos.list} click={this.selectItem} />
    ));
  }

  render() {
    const {
      repos: { list, filter },
      issues: { loading, error },
      history,
    } = this.props;
    const { selectedItem, isMobile } = this.state;
    if (error) {
      return (
        <Message>
          Você atingiu o limite de requisições sem esta logado, realize o login
          para continuar ou aguarde 40 minutos
        </Message>
      );
    }

    return (
      <IssueListContainer onScroll={this.onScroll}>
        <InputSearch onChange={this.onSearch} placeholder="Buscar vagas" />
        <TabContainer>
          {list.map((repo) => (
            <RepoTab
              key={repo}
              filted={filter.includes(repo)}
              onClick={this.toggleFilter(repo, filter.includes(repo))}
            >
              {repo}
            </RepoTab>
          ))}
        </TabContainer>
        <Row>
          <ScrollContainer style={{ width: isMobile ? '100%' : 400 }}>
            {this.renderList()}
            <Loading isLoading={loading} />

          </ScrollContainer>
          {!isMobile && (
            <ScrollContainer style={{ width: 800 }}>
              {selectedItem && <Issue repos={list} item={selectedItem} history={history} />}
              {!selectedItem && (
                <EmptyState />
              )}
            </ScrollContainer>
          )}
        </Row>
      </IssueListContainer>
    );
  }
}

const mapDispatch = (dispatch) => ({
  fetchIssues: (repos) => dispatch({ type: FETCH_ISSUES, payload: repos }),
  filterTitle: (filter) => dispatch({ type: FILTER_TITLE, payload: filter }),
  fetchNextPage: (page, repos) => dispatch({ type: FETCH_ISSUES_PAGE, page, repos }),
  filterRepoConnect: (repo) => dispatch(filterRepo(repo)),
  removeFilterConnect: (repo) => dispatch(removeFilter(repo)),
});

export default connect(
  ({ issues, repo: { filterLabel }, repos }) => ({
    issues,
    filterLabel,
    repos,
  }),
  mapDispatch,
)(IssuesList);
