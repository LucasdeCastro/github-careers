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
  filterTitle: "",
  filterLabel: "",
  filterData: [],
  error: false,
  loading: false,
  errorMessage: ""
};

const filterByLabel = (payload, { data, filterTitle }) => {
  if (!payload) return [];

  const filtered = data.filter(
    issue =>
      issue.labels.length &&
      issue.labels.find(({ id }) => id === parseInt(payload, 10))
  );

  return filterTitle ? filterByTitle(filterTitle, { data: filtered }) : filtered
};

const filterByTitle = (payload, { data, filterLabel }) => {
  const filtered = data.filter(issue => issue.title && payload && issue.title.toLowerCase().indexOf(payload.toLowerCase()) >= 0);
  return filterLabel ? filterByLabel(filterLabel, { data: filtered }) : filtered
};

const nextPage = (state, payload) => {
  const newData = state.data.concat(payload.data)
  const filtered = filterByTitle(state.filterTitle, { ...state, data: newData })
  return Object.assign({}, state, {
    page: ++state.page,
    loading: false,
    data: newData,
    filterData: filtered
  });
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_ISSUES:
    case FETCH_ISSUES_PAGE:
      return Object.assign({}, state, { loading: true });
    case FILTER_TITLE:
      return Object.assign({}, state, {
        filterData: filterByTitle(payload, state),
        filterTitle: payload
      });
    case SET_LABEL:
      return Object.assign({}, state, {
        filterData: filterByLabel(payload, state),
        filterLabel: payload
      });
    case FETCH_ISSUES_SUCCESS:
      return Object.assign({}, state, { data: payload.data, loading: false });
    case FETCH_ISSUES_PAGE_SUCCESS:
      return nextPage(state, payload)
    case FETCH_ISSUES_FAIL:
      return Object.assign({}, state, {
        error: true,
        loading: false,
        errorMessage: payload.message
      });
    default:
      return state;
  }
}
