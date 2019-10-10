import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Card,
  Bold,
  GitLabel,
  LabelRow,
  CardTitle,
  TitleDate,
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

  click(item, repos);
};

const IssueCard = ({
  click, repos, item, selected,
}) => {
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
    <Card selected={(selected || {}).id === item.id}>
      <TitleContainer onClick={handleClick(item, repos, click)}>
        <CardTitle>

          {titleSplited.length <= 3 ? (
            <>
              {titleSplited[2] && titleSplited[2]}
              {titleSplited[1] && (
              <Row>
                <Bold style={{ fontSize: 11, flex: 1 }}>
                  {`[${titleSplited[1]}]`}
                </Bold>
                <TitleDate style={{ flex: 1, textAlign: 'right' }}>{dateStr}</TitleDate>
              </Row>
              )}
            </>
          ) : title}

          {titleSplited.length === 1 && titleSplited[0]}
        </CardTitle>
      </TitleContainer>

      <Row>
        <LabelRow>
          {(labels || []).slice(0, 3).map(({ color, name, id }) => (
            <GitLabel key={id} color={color}>
              {name}
            </GitLabel>
          ))}
        </LabelRow>
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
  selected: PropTypes.number.isRequired,
  repos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

IssueCard.defaultProps = {
  click: () => null,
};

export default IssueCard;
