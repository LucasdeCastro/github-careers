import React from 'react';
import { connect } from 'react-redux';
import Issue from './Issue';
import { getIssue } from '../reducers/issue';
import {
  Loading,
  IssueComponent,
} from '../components';

class IssuePage extends React.Component {
  componentDidMount() {
    const {
      getIssueConnect,
      match: {
        params: { id, repo },
      },
    } = this.props;
    getIssueConnect(repo, id);
  }

  render() {
    const {
      issue: { loading, data: issue },
    } = this.props;

    if (loading) return <Loading isLoading={loading} />;

    return (
      <IssueComponent>
        <Issue noFixed isPage item={issue} />
      </IssueComponent>
    );
  }
}

export default connect(
  ({ issue }) => ({ issue }),
  { getIssueConnect: getIssue },
)(IssuePage);
