export const SET_LABEL = "SET_LABEL";
export const FETCH_REPO = "FETCH_REPO";
export const FETCH_REPO_FAIL = "FETCH_REPO_FAIL";
export const FETCH_REPO_SUCCESS = "FETCH_REPO_SUCCESS";

const initialState = {
  repo: {},
  labels: [],
  error: false,
  loading: false,
  errorMessage: "",
  filterLabel: null
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_LABEL:
      return {
        ...state,
        filterLabel: payload ? parseInt(payload, 10) : payload
      };
    case FETCH_REPO:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: ""
      };
    case FETCH_REPO_SUCCESS:
      return { ...state, loading: false, ...payload };
    case FETCH_REPO_FAIL:
      return { ...state, error: true, errorMessage: payload };
    default:
      return state;
  }
}
