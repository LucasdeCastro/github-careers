import { getIssues } from "../requests";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  FETCH_ISSUES,
  FETCH_ISSUES_FAIL,
  FETCH_ISSUES_SUCCESS
} from "../reducers/issues";

export function* watcherSaga() {
  yield takeLatest(FETCH_ISSUES, fetchIssues);
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
