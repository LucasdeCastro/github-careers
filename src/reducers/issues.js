export const FETCH_ISSUES = "FETCH_ISSUES";
export const FETCH_ISSUES_SUCCESS = "FETCH_ISSUES_SUCCESS";
export const FETCH_ISSUES_FAIL = "FETCH_ISSUES_FAIL";

const initialState = {
  data: [],
  error: false,
  loading: false,
  errorMessage: ""
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_ISSUES:
      return Object.assign({}, state, { loading: true });
    case FETCH_ISSUES_SUCCESS:
      return Object.assign({}, state, { data: payload.data });
    case FETCH_ISSUES_FAIL:
      return Object.assign({}, state, {
        error: true,
        errorMessage: payload.message
      });
    default:
      return state;
  }
}
