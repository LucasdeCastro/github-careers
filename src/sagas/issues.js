import { getIssues, getIssuesPage } from "../requests";
import { call, put, all } from "redux-saga/effects";
import {
  FETCH_ISSUES_FAIL,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_PAGE_SUCCESS
} from "../reducers/issues";

export const REPOS = ["frontendbr", "backend-br", "react-brasil"];

export function* fetchIssues() {
  try {
    const data = yield all(REPOS.map(repo => call(getIssues, repo)));

    const sorted = []
      .concat(...data.map(response => response.data))
      .sort((a, b) => {
        if (a.created_at < b.created_at) return 1;
        if (a.created_at === b.created_at) return 0;
        return -1;
      });
    yield put({ type: FETCH_ISSUES_SUCCESS, payload: { data: sorted } });
  } catch (errorMessage) {
    yield put({ type: FETCH_ISSUES_FAIL, payload: { errorMessage } });
  }
}

export function* fetchIssuesPage({ page }) {
  try {
    const data = yield all(REPOS.map(repo => call(getIssuesPage, repo, page)));
    const sorted = []
      .concat(...data.map(response => response.data))
      .sort((a, b) => {
        if (a.created_at < b.created_at) return 1;
        if (a.created_at === b.created_at) return 0;
        return -1;
      });

    yield put({ type: FETCH_ISSUES_PAGE_SUCCESS, payload: { data: sorted } });
  } catch (errorMessage) {
    yield put({ type: FETCH_ISSUES_FAIL, payload: { errorMessage } });
  }
}
