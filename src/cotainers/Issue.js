import { MarkdownContainer } from "../components";

import Markdown from "react-markdown";
import React, { Component } from "react";

export default class Issue extends Component {
  render() {
    const { item } = this.props;

    if (!item) return this.props.history.replace({ pathname: "/" });

    return (
      <MarkdownContainer>
        <Markdown skipHtml={true} source={item.body} />
      </MarkdownContainer>
    );
  }
}
