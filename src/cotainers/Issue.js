import { MarkdownContainer } from "../components";

import React from "react";
import Markdown from "react-markdown";

const EMAIL_URL = "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1";

export default class Issue extends React.PureComponent {
  getSubject = body => {
    const str = body.match(/(?=assunto).*$/gim)[0];
    if (str) {
      return str
        .replace("assunto", "")
        .replace(":", "")
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
    window.open(`${EMAIL_URL}&to=${emails.join(",")}&su=${subject}`);
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
        <button onClick={this.sendEmail}>Apply</button>
        <Markdown skipHtml={true} source={item.body} />
      </MarkdownContainer>
    );
  }
}
