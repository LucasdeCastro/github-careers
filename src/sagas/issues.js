import { getIssues, getIssuesPage } from "../requests";
import { call, put } from "redux-saga/effects";
import {
  FETCH_ISSUES_FAIL,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_PAGE_SUCCESS
} from "../reducers/issues";

export function* fetchIssues() {
  try {
    const response = yield call(getIssues);
    const data = response.data;

    yield put({ type: FETCH_ISSUES_SUCCESS, payload: { data } });
  } catch (errorMessage) {
    yield put({ type: FETCH_ISSUES_FAIL, payload: { errorMessage } });
  }
}

export function* fetchIssuesPage({ page }) {
  try {
    const response = yield call(getIssuesPage, page);
    const data = response.data;

    yield put({ type: FETCH_ISSUES_PAGE_SUCCESS, payload: { data } });
  } catch (errorMessage) {
    yield put({ type: FETCH_ISSUES_FAIL, payload: { errorMessage } });
  }
}
