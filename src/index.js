import React from 'react';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGhost } from '@fortawesome/free-solid-svg-icons';

import './styles/main.css';
import App from './containers';

ReactGA.initialize('UA-128061632-1');

const { pathname, search, href } = window.location;

ReactGA.pageview(`${pathname}/${href.split('#/')[1]}${search}`);

library.add(faGhost);

ReactDOM.render(<App />, document.getElementById('root'));
