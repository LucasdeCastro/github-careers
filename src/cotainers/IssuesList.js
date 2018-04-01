import React, { Component } from "react";

import { IssueListContainer } from "../components";

import Issue from "./Issue";
import IssueCard from "../components/IssueCard";
import Accordion from "../components/Accordion";

import { connect } from "react-redux";
import { FETCH_ISSUES } from "../reducers/issues";

class IssuesList extends Component {
  componentDidMount() {
    this.props.fetchIssues();
  }

  onScroll = el => {
    const scroll = el.target;
    const currentPosition = scroll.offsetHeight + scroll.scrollTop;
    const aroundEnd =
      scroll.scrollHeight - scroll.scrollHeight * 0.3 <= currentPosition;

    if (aroundEnd) {
      console.log("around END");
    }
  };

  render() {
    const { issues: { data } } = this.props;
    const list = data.map(el => {
      return (
        <Accordion key={el.number}>
          <IssueCard item={el} />
          <Issue item={el} />
        </Accordion>
      );
    });

    return (
      <IssueListContainer onScroll={this.onScroll}>{list}</IssueListContainer>
    );
  }
}

const mapDispatch = dispatch => ({
  fetchIssues: _ => dispatch({ type: FETCH_ISSUES })
});

export default connect(({ issues }) => ({ issues }), mapDispatch)(IssuesList);
