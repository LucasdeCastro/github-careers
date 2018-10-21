const initialState = {
  list: ["frontendbr", "backend-br", "react-brasil"],
  filter: []
};

export const TYPES = {
  ADD_REPO: "ADD_REPO",
  FILTER_REPO: "FILTER_REPO",
  REMOVE_FILTER: "REMOVE_FILTER"
};

export const addRepo = payload => ({ type: TYPES.ADD_REPO, payload });
export const removeFilter = payload => ({ type: TYPES.REMOVE_FILTER, payload });
export const filterRepo = payload => ({ type: TYPES.FILTER_REPO, payload });

const repos = (state = initialState, { payload, type }) => {
  switch (type) {
    case TYPES.ADD_REPO:
      return {
        ...state,
        list: state.list.concat(payload)
      };
    case TYPES.FILTER_REPO:
      return {
        ...state,
        filter: state.filter.concat(payload)
      };
    case TYPES.REMOVE_FILTER:
      return {
        ...state,
        filter: state.filter.filter(repo => repo !== payload)
      };
    default:
      return state;
  }
};

export default repos;
