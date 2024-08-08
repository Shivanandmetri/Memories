import { combineReducers } from "redux";

import posts from "./posts";

export default combineReducers({
  //   posts: posts,   if both key and value are same then keep key only
  posts,
});
