import { combineReducers } from "redux";
import repo from "./repo";
import issue from "./issue";
import issues from "./issues";

export default combineReducers({
  repo,
  issue,
  issues,
});
