import { takeLatest } from 'redux-saga/effects';
import { FETCH_ISSUE } from '../reducers/issue';
import { FETCH_ISSUES, FETCH_ISSUES_PAGE } from '../reducers/issues';
import { FETCH_REPO } from '../reducers/repo';

import { fetchIssues, fetchIssuesPage } from './issues';
import { fetchIssue } from './issue';
import { fetchRepo } from './repo';

export function* watcherSaga() {
  yield takeLatest(FETCH_REPO, fetchRepo);
  yield takeLatest(FETCH_ISSUE, fetchIssue);
  yield takeLatest(FETCH_ISSUES, fetchIssues);
  yield takeLatest(FETCH_ISSUES_PAGE, fetchIssuesPage);
}
