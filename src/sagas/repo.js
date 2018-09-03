import { REPOS } from "./issues";
import { getRepo, getLabels } from "../requests";
import { call, put, all } from "redux-saga/effects";
import { FETCH_REPO_FAIL, FETCH_REPO_SUCCESS } from "../reducers/repo";

export function* fetchRepo() {
  try {
    const labels = yield all(REPOS.map(repo => call(getLabels, repo)));
    const repo = yield all(REPOS.map(repo => call(getRepo, repo)));

    yield put({
      type: FETCH_REPO_SUCCESS,
      payload: {
        repo: [].concat(...repo.map(({ data }) => data)),
        labels: [].concat(...labels.map(({ data }) => data))
      }
    });
  } catch (errorMessage) {
    yield put({ type: FETCH_REPO_FAIL, payload: { errorMessage } });
  }
}
