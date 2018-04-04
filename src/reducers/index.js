import { combineReducers } from "redux";
import repo from "./repo";
import issues from "./issues";

export default combineReducers({
  issues,
  repo
});
