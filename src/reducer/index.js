import { combineReducers } from "redux";

function counterReducer(state = 1, action = {}) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function setLoginInfoReducer(state = {}, action = {}) {
  switch (action.type) {
    case "loginSuccess":
      return { ...state, ...action.loginInfo };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
  loginInfo: setLoginInfoReducer,
});
export default rootReducer;
