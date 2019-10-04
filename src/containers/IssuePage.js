import React from 'react';
import { connect } from 'react-redux';
import Issue from './Issue';
import { getIssue } from '../reducers/issue';
import {
  Bold,
  Card,
  Loading,
  IssueComponent,
  TitleDate,
  CardTitle,
  TitleContainer,
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

    const date = new Date(issue.created_at);
    const month = (date.getMonth() + 1).toString().padStart(2, 0);
    const day = date
      .getDate()
      .toString()
      .padStart(2, 0);

    const dateStr = `${day}/${month}/${date.getFullYear()}`;
    const title = (issue.title || '').split(/\[(.*?)\]/g);

    if (loading) return <Loading isLoading={loading} />;

    return (
      <IssueComponent>
        <Card>
          <TitleContainer>
            <CardTitle>
              {title[1] && (
              <Bold>
[
                {title[1]}
]
              </Bold>
              )}
              {title[2] && title[2]}
              {title.length === 1 && title[0]}
            </CardTitle>

            <TitleDate>{dateStr}</TitleDate>
          </TitleContainer>
        </Card>
        <Issue item={issue} />
      </IssueComponent>
    );
  }
}

export default connect(
  ({ issue }) => ({ issue }),
  { getIssueConnect: getIssue },
)(IssuePage);
