import { combineReducers } from 'redux';
import repo from './repo';
import issue from './issue';
import repos from './repos';
import issues from './issues';

export default combineReducers({
  repo,
  repos,
  issue,
  issues
});
