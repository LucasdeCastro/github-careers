import { MarkdownContainer, ApplyButton } from "../components";

import React from "react";
import Markdown from "react-markdown";

const EMAIL_URL = "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1";

export default class Issue extends React.PureComponent {
  getSubject = body => {
    const str = body.match(/(?=(assunto|subject)).*$/gim);
    if (str) {
      return str[0]
        .replace(/(assunto|subject)/g, "")
        .split(".")[0]
        .replace(/[^a-zA-Z ]/g, "")
        .trim();
    }

    return undefined;
  };

  getEmails = body => {
    const emails = body.match(
      /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi
    );

    return emails.reduce((xs, _x) => {
      const x = _x.trim();
      if (xs.indexOf(x) < 0) xs.push(x);
      return xs;
    }, []);
  };

  openEmail = (emails, subject = "") => {
    const reg = /Android|iPhone|iPad|iPod/i;
    if (reg.test(navigator.userAgent)) {
      window.open(`mailto:${emails.join(",")}?&subject=${subject}`);
    } else {
      window.open(`${EMAIL_URL}&to=${emails.join(",")}&su=${subject}`);
    }
  };

  sendEmail = () => {
    if (!this.props.item) return;

    const item = this.props.item;
    const subject = this.getSubject(item.body);
    const emails = this.getEmails(item.body);

    if (!emails)
      return alert("Verifique na descrição como aplicar para essea vaga");

    this.openEmail(emails, subject);
  };

  render() {
    const { item } = this.props;

    if (!item) return this.props.history.replace({ pathname: "/" });

    return (
      <MarkdownContainer>
        <Markdown skipHtml={true} source={item.body} />
        <ApplyButton onClick={this.sendEmail}>Apply</ApplyButton>
      </MarkdownContainer>
    );
  }
}
