import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import {
  Row,
  Card,
  Bold,
  GitLabel,
  LabelRow,
  CardTitle,
  TitleDate,
  ShareButton,
  TitleContainer,
} from './index';

const openJobPage = (item, repos) => () => {
  const baseUrl = window.location.href;
  const repo = repos.filter((repokey) => item.url.includes(repokey));
  window.open(`${baseUrl}${repo}/${item.number}`, '_blank');
};

const handleClick = (item, repos, click) => (event) => {
  if (event.ctrlKey || event.metaKey) {
    openJobPage(item, repos);
    return;
  }

  click(item.id);
};

const IssueCard = ({ click, repos, item }) => {
  const { labels, title, created_at: createdAt } = item;
  const date = new Date(createdAt);
  const month = (date.getMonth() + 1).toString().padStart(2, 0);

  const day = date
    .getDate()
    .toString()
    .padStart(2, 0);

  const dateStr = `${day}/${month}/${date.getFullYear()}`;
  const titleSplited = (title || '').split(/\[(.*?)\]/g);

  return (
    <Card>
      <TitleContainer onClick={handleClick(item, repos, click)}>
        <CardTitle>
          {titleSplited[1] && (
          <Bold>
[
            {titleSplited[1]}
]
          </Bold>
          )}
          {titleSplited[2] && titleSplited[2]}
          {titleSplited.length === 1 && titleSplited[0]}
        </CardTitle>
        <TitleDate>{dateStr}</TitleDate>
      </TitleContainer>

      <Row>
        <LabelRow>
          {(labels || []).map(({ color, name, id }) => (
            <GitLabel key={id} color={color}>
              {name}
            </GitLabel>
          ))}
        </LabelRow>

        <ShareButton onClick={openJobPage(item, repos)}>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </ShareButton>
      </Row>
    </Card>
  );
};

IssueCard.propTypes = {
  click: PropTypes.func,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  repos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

IssueCard.defaultProps = {
  click: () => null,
};

export default IssueCard;
