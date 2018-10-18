import React from "react";
import { REPOS } from "../sagas/issues";
import {
  Card,
  Bold,
  GitLabel,
  LabelRow,
  CardTitle,
  TitleDate,
  TitleContainer
} from "./index";

const handleClick = (item, click) => (event) => {
  if (event.ctrlKey || event.metaKey) {
    const baseUrl = window.location.href;
    const repo = REPOS.filter(repokey => item.url.includes(repokey))
    window.open(`${baseUrl}${repo}/${item.number}`, '_blank');
    return
  }

  click(item.id)
}

const IssueCard = ({ click, item }) => {
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
    <Card onClick={handleClick(item, click)}>
      <TitleContainer>
        <CardTitle>
          {title[1] && <Bold>[{title[1]}]</Bold>}
          {title[2] && title[2]}
          {title.length === 1 && title[0]}
        </CardTitle>

        <TitleDate>{dateStr}</TitleDate>
      </TitleContainer>

      <LabelRow>
        {(labels || []).map(({ color, name, id }) => (
          <GitLabel key={id} color={color}>
            {name}
          </GitLabel>
        ))}
      </LabelRow>
    </Card>
  );
};

export default IssueCard;
