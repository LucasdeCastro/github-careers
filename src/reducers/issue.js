export const FETCH_ISSUE_FAIL = "FETCH_ISSUE_FAIL";
export const FETCH_ISSUE_SUCCESS = "FETCH_ISSUE_SUCCESS";
export const FETCH_ISSUE = "FETCH_ISSUE";

export const getIssue = (repo, id) => ({ type: FETCH_ISSUE, payload: { repo, id } })

export default (state = { loading: true, data: {} }, { type, payload }) => {
  switch (type) {
    case FETCH_ISSUE_SUCCESS:
      return { ...state, loading: false, data: payload }
    case FETCH_ISSUE:
      return { ...state, loading: true }
    default:
      return state
  }
}