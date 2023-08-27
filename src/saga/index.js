import {
  all,
  put,
  call,
  takeEvery,
  takeLatest,
  delay,
} from "redux-saga/effects";
import { loginService } from "../service/request";

function* login(action) {
  try {
    const loginInfo = yield call(loginService, action.account);
    yield put({ type: "loginSuccess", loginInfo });
    alert('login Success!')
  } catch (error) {
    alert(error.msg);
  }
}

function* loginOut() {
  yield put({
    type: "loginSuccess",
    loginInfo: { success: false, name: "", password: "" },
  });
  alert('loginOut Success!')

}

function* increment() {
  yield put({ type: "increment" });
}
function* decrement() {
  yield put({ type: "decrement" });
}
function* IncrementAsync() {
  yield delay(1000);
  yield put({ type: "increment" });
}
function* watchIncrement() {
  yield takeEvery("increment_saga", increment);
  yield takeEvery("decrement_saga", decrement);
  yield takeLatest("incrementAsync_saga", IncrementAsync);
  yield takeLatest("login", login);
  yield takeLatest("loginOut", loginOut);
}
function* rootSaga() {
  yield all([watchIncrement()]);
}
export default rootSaga;
