import React, { Component } from "react";

import Issue from "./Issue";
import IssueCard from "../components/IssueCard";
import Accordion from "../components/Accordion";

import { connect } from "react-redux";
import { FETCH_ISSUES } from "../reducers/issues";

class IssuesList extends Component {
  componentDidMount() {
    this.props.fetchIssues();
  }

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

    return <div>{list}</div>;
  }
}

const mapDispatch = dispatch => ({
  fetchIssues: _ => dispatch({ type: FETCH_ISSUES })
});

export default connect(({ issues }) => ({ issues }), mapDispatch)(IssuesList);
