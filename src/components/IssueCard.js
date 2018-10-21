import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import {
  Row,
  Card,
  Bold,
  GitLabel,
  LabelRow,
  CardTitle,
  TitleDate,
  ShareButton,
  TitleContainer
} from "./index";

const openJobPage = (item, repos) => () => {
  const baseUrl = window.location.href;
  const repo = repos.filter(repokey => item.url.includes(repokey));
  window.open(`${baseUrl}${repo}/${item.number}`, "_blank");
};

const handleClick = (item, repos, click) => event => {
  if (event.ctrlKey || event.metaKey) {
    openJobPage(item, repos);
    return;
  }

  click(item.id);
};

const IssueCard = ({ click, repos, item }) => {
  const date = new Date(item.created_at);
  const month = (date.getMonth() + 1).toString().padStart(2, 0);

  const day = date
    .getDate()
    .toString()
    .padStart(2, 0);

  const dateStr = `${day}/${month}/${date.getFullYear()}`;
  const labels = item.labels;
  const title = (item.title || "").split(/\[(.*?)\]/g);

  return (
    <Card>
      <TitleContainer onClick={handleClick(item, repos, click)}>
        <CardTitle>
          {title[1] && <Bold>[{title[1]}]</Bold>}
          {title[2] && title[2]}
          {title.length === 1 && title[0]}
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
  item: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired
};

IssueCard.defaultProps = {
  click: () => null
};

export default IssueCard;
