import { getIssues, getIssuesPage } from "../requests";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  FETCH_ISSUES,
  FETCH_ISSUES_PAGE,
  FETCH_ISSUES_FAIL,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_PAGE_SUCCESS
} from "../reducers/issues";

export function* watcherSaga() {
  yield takeLatest(FETCH_ISSUES, fetchIssues);
  yield takeLatest(FETCH_ISSUES_PAGE, fetchIssuesPage);
}

function* fetchIssues() {
  try {
    const response = yield call(getIssues);
    const data = response.data;

    yield put({ type: FETCH_ISSUES_SUCCESS, payload: { data } });
  } catch (errorMessage) {
    yield put({ type: FETCH_ISSUES_FAIL, payload: { errorMessage } });
  }
}

function* fetchIssuesPage({ page }) {
  try {
    const response = yield call(getIssuesPage, page);
    const data = response.data;

    yield put({ type: FETCH_ISSUES_PAGE_SUCCESS, payload: { data } });
  } catch (errorMessage) {
    yield put({ type: FETCH_ISSUES_FAIL, payload: { errorMessage } });
  }
}
