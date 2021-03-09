import { combineReducers } from "redux";
import Reducer from "./RootReducer";

export default combineReducers({
  root: Reducer,
});
