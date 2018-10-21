import { getIssue } from '../requests';
import { call, put } from 'redux-saga/effects';
import {
  FETCH_ISSUE_FAIL,
  FETCH_ISSUE_SUCCESS,
} from '../reducers/issue';

export function* fetchIssue({ payload: { repo, id } }) {
  try {
    const { data } = yield call(getIssue, repo, id);
    yield put({ type: FETCH_ISSUE_SUCCESS, payload: data });
  } catch (errorMessage) {
    yield put({ type: FETCH_ISSUE_FAIL, payload: { errorMessage } });
  }
}