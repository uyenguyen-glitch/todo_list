import { combineReducers } from "redux";
import colorReducer from "./colorReducer";
import countReducer from "./counterReducer";
import todoReducer from "./todoReducer";
// combineReducers là hàm dùng để kết hợp tất cả reducer
// lại thành 1 reducer tông

const rootReducer = combineReducers({
  count: countReducer,
  colors: colorReducer,
  todo: todoReducer,
});

export default rootReducer;
