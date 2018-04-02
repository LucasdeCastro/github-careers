export const FETCH_ISSUES = "FETCH_ISSUES";
export const FETCH_ISSUES_PAGE = "FETCH_ISSUES_PAGE";
export const FETCH_ISSUES_FAIL = "FETCH_ISSUES_FAIL";
export const FETCH_ISSUES_SUCCESS = "FETCH_ISSUES_SUCCESS";
export const FETCH_ISSUES_PAGE_SUCCESS = "FETCH_ISSUES_PAGE_SUCCESS";

const initialState = {
  page: 1,
  data: [],
  error: false,
  loading: false,
  errorMessage: ""
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_ISSUES:
    case FETCH_ISSUES_PAGE:
      return Object.assign({}, state, { loading: true });
    case FETCH_ISSUES_SUCCESS:
      return Object.assign({}, state, { data: payload.data, loading: false });
    case FETCH_ISSUES_PAGE_SUCCESS:
      return Object.assign({}, state, {
        page: ++state.page,
        loading: false,
        data: state.data.concat(payload.data)
      });
    case FETCH_ISSUES_FAIL:
      return Object.assign({}, state, {
        error: true,
        errorMessage: payload.message
      });
    default:
      return state;
  }
}
