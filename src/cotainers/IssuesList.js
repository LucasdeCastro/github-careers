import React, { Component } from "react";

import { IssueListContainer, Loading, InputSearch } from "../components";

import Issue from "./Issue";
import IssueCard from "../components/IssueCard";
import Accordion from "../components/Accordion";

import { connect } from "react-redux";
import {
  FETCH_ISSUES,
  FETCH_ISSUES_PAGE,
  FILTER_TITLE
} from "../reducers/issues";

class IssuesList extends Component {
  componentDidMount() {
    this.props.fetchIssues();

    window.addEventListener("scroll", this.onScroll);
  }

  onScroll = el => {
    const scroll = el.target.body;
    const currentPosition = window.innerHeight + window.scrollY;
    const aroundEnd = scroll.scrollHeight - 240 <= currentPosition;
    if (aroundEnd) this.getNextPage();
  };

  getNextPage = () => {
    const { loading, page } = this.props.issues;
    if (loading) return;

    this.props.fetchNextPage(page + 1);
  };

  onSearch = el => {
    const value = el.target.value;
    this.props.filterTitle(value);
  };

  renderList() {
    const {
      issues: { data, filterData }
    } = this.props;

    const list = filterData.length ? filterData : data;

    return list.map(el => {
      return (
        <Accordion key={el.number}>
          <IssueCard item={el} />
          <Issue item={el} />
        </Accordion>
      );
    });
  }

  render() {
    const {
      issues: { loading },
      filterTitle
    } = this.props;

    return (
      <IssueListContainer>
        <InputSearch onChange={this.onSearch} placeholder={"Buscar vagas"} />
        {this.renderList()}
        <Loading isLoading={loading} />
      </IssueListContainer>
    );
  }
}

const mapDispatch = dispatch => ({
  fetchIssues: _ => dispatch({ type: FETCH_ISSUES }),
  filterTitle: filter => dispatch({ type: FILTER_TITLE, payload: filter }),
  fetchNextPage: page => dispatch({ type: FETCH_ISSUES_PAGE, page })
});

export default connect(
  ({ issues, repo: { filterLabel } }) => ({ issues, filterLabel }),
  mapDispatch
)(IssuesList);
