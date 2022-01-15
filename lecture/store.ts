import {
  AnyAction,
  applyMiddleware,
  compose,
  createStore,
  Dispatch,
  MiddlewareAPI,
} from "redux";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  user: {
    isLogginIn: false,
    data: null,
  },
  posts: [],
};

const firstMiddleware =
  (store: MiddlewareAPI) =>
  (next: Dispatch<AnyAction>) =>
  (action: AnyAction) => {
    console.log("로깅", action);
    next(action);
  };

const thunkMiddleware =
  (store: MiddlewareAPI) =>
  (next: Dispatch<AnyAction>) =>
  (action: AnyAction) => {
    if (typeof action === "function") {
      // 비동기
      return action(store.dispatch, store.getState);
    }
    return next(action); // 동기
  };

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(firstMiddleware))
    : composeWithDevTools(applyMiddleware(firstMiddleware, thunkMiddleware));

const store = createStore(reducer, initialState, enhancer);

export default store;
