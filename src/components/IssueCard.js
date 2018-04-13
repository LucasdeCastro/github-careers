import React from "react";

import {
  Card,
  Bold,
  GitLabel,
  LabelRow,
  CardTitle,
  TitleDate,
  TitleContainer
} from "./index";

const IssueCard = ({ click, item }) => {
  const date = new Date(item.created_at);
  const month = date
    .getMonth()
    .toString()
    .padStart(2, 0);

  const day = date
    .getDate()
    .toString()
    .padStart(2, 0);

  const dateStr = `${day}/${month}/${date.getFullYear()}`;
  const labels = item.labels;
  const title = item.title.split(/\[(.*?)\]/g);

  return (
    <Card onClick={_ => click(item.id)}>
      <TitleContainer>
        <CardTitle>
          {title[1] && <Bold>[{title[1]}]</Bold>}
          {title[2] && title[2]}
          {title.length === 1 && title[0]}
        </CardTitle>

        <TitleDate>{dateStr}</TitleDate>
      </TitleContainer>

      <LabelRow>
        {labels.map(({ color, name, id }) => (
          <GitLabel key={id} color={color}>
            {name}
          </GitLabel>
        ))}
      </LabelRow>
    </Card>
  );
};

export default IssueCard;
