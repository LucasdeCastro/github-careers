import { getRepo, getLabels } from "../requests";
import { call, put } from "redux-saga/effects";
import {
  FETCH_REPO_FAIL,
  FETCH_REPO_SUCCESS,
  FETCH_REPO_PAGE_SUCCESS
} from "../reducers/repo";

export function* fetchRepo() {
  try {
    const labels = yield call(getLabels);
    const repo = yield call(getRepo);

    yield put({
      type: FETCH_REPO_SUCCESS,
      payload: { repo: repo.data, labels: labels.data }
    });
  } catch (errorMessage) {
    yield put({ type: FETCH_REPO_FAIL, payload: { errorMessage } });
  }
}
