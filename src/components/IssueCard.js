import React, { Component } from "react";

import {
  Main,
  Title,
  Card,
  GitLabel,
  LabelRow,
  CardTitle,
  TitleDate,
  TitleContainer
} from "./index";

import Issue from "../cotainers/Issue";

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

  return (
    <Card onClick={_ => click(item.id)}>
      <TitleContainer>
        <CardTitle>{item.title}</CardTitle>

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
