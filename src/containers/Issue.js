import React from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import { MarkdownContainer, ApplyButton } from '../components';

const EMAIL_URL = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1';

class Issue extends React.PureComponent {
  getSubject = (body) => {
    const str = body.match(/(?=(assunto|subject)).*$/gim);
    if (str) {
      return str[0]
        .replace(/(assunto|subject)/g, '')
        .split('.')[0]
        .replace(/[^a-zA-Z ]/g, '')
        .trim();
    }

    return undefined;
  };

  getEmails = (body) => {
    const emails = body.match(
      /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi,
    );

    return (
      emails
      && emails.reduce((xs, _x) => {
        const x = _x.trim();
        if (xs.indexOf(x) < 0) xs.push(x);
        return xs;
      }, [])
    );
  };

  openEmail = (emails, subject = '') => {
    const reg = /Android|iPhone|iPad|iPod/i;
    if (reg.test(navigator.userAgent)) {
      return window.open(`mailto:${emails.join(',')}?&subject=${subject}`);
    }
    return window.open(`${EMAIL_URL}&to=${emails.join(',')}&su=${subject}`);
  };

  sendEmail = () => {
    const { item } = this.props;
    if (!item) return;

    const subject = this.getSubject(item.body);
    const emails = this.getEmails(item.body);

    // eslint-disable-next-line
    if (!emails) return alert('Verifique na descrição como aplicar para essa vaga');

    this.openEmail(emails, subject);
  };

  render() {
    const { item, history } = this.props;
    const body = item.body.split('-->');
    if (!item) return history.replace({ pathname: '/' });

    return (
      <MarkdownContainer>
        <Markdown
          skipHtml
          source={body[1] ? body[1] : body[0]}
          escapeHtml
        />
        <ApplyButton onClick={this.sendEmail}>Apply</ApplyButton>
      </MarkdownContainer>
    );
  }
}

Issue.propTypes = {
  item: PropTypes.objectOf({ body: PropTypes.string }).isRequired,
  history: PropTypes.func.isRequired,
};

export default Issue;
