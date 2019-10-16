/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
  MarkdownContainer, ApplyButton, MarkdownTitle, ButtonAlt,
} from '../components';

marked.setOptions({
  renderer: new marked.Renderer(),
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});


const EMAIL_URL = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1';

const openJobPage = (item, repos) => () => {
  const baseUrl = window.location.href;
  const repo = repos.filter((repokey) => item.url.includes(repokey));
  window.open(`${baseUrl}${repo}/${item.number}`, '_blank');
};

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
    const {
      item, history, repos, noFixed, isPage = false,
    } = this.props;
    const body = item.body.split('-->');
    const parsed = marked(body[1] || body[0]);
    if (!item) return history.replace({ pathname: '/' });

    return (
      <MarkdownContainer>
        <MarkdownTitle noFixed={noFixed} style={{ display: 'flex', justifyContent: 'center' }}>
          <h2>{item.title}</h2>
          <ApplyButton onClick={this.sendEmail}>Candidatar-se agora</ApplyButton>
          {!isPage && (
          <ButtonAlt onClick={openJobPage(item, repos)}>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </ButtonAlt>
          )}

        </MarkdownTitle>
        <div style={{ padding: 10, marginTop: noFixed ? 0 : 80 }}>
          <div dangerouslySetInnerHTML={{ __html: parsed }} />
        </div>
      </MarkdownContainer>
    );
  }
}


Issue.propTypes = {
  isPage: PropTypes.bool.isRequired,
  noFixed: PropTypes.bool.isRequired,
  item: PropTypes.objectOf({ body: PropTypes.string }).isRequired,
  repos: PropTypes.arrayOf(PropTypes.string).isRequired,
  history: PropTypes.func.isRequired,
};

export default Issue;
