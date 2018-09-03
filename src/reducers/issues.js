import { SET_LABEL } from "./repo";

export const FETCH_ISSUES = "FETCH_ISSUES";
export const FILTER_TITLE = "FILTER_TITLE";
export const FETCH_ISSUES_PAGE = "FETCH_ISSUES_PAGE";
export const FETCH_ISSUES_FAIL = "FETCH_ISSUES_FAIL";
export const FETCH_ISSUES_SUCCESS = "FETCH_ISSUES_SUCCESS";
export const FETCH_ISSUES_PAGE_SUCCESS = "FETCH_ISSUES_PAGE_SUCCESS";

const initialState = {
  page: 1,
  data: [],
  filterData: [],
  error: false,
  loading: false,
  errorMessage: ""
};

const filterByLabel = (payload, { data }) => {
  if (!payload) return [];

  return data.filter(
    issue =>
      issue.labels.length &&
      issue.labels.find(({ id }) => id === parseInt(payload))
  );
};

const filterByTitle = (payload, { data }) => {
  return data.filter(issue =>
    issue.title.toLowerCase().includes(payload.toLowerCase())
  );
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_ISSUES:
    case FETCH_ISSUES_PAGE:
      return Object.assign({}, state, { loading: true });
    case FILTER_TITLE:
      return Object.assign({}, state, {
        filterData: filterByTitle(payload, state)
      });
    case SET_LABEL:
      return Object.assign({}, state, {
        filterData: filterByLabel(payload, state)
      });
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
