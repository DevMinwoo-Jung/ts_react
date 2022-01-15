import {
  LOG_IN_REQUEST,
  LOG_IN_SSUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
  LoginFailureAction,
  LoginRequestAction,
  LoginSuccessAction,
  LogoutAction,
} from "../actions/user";

const initialState = {
  isLoggingIn: false,
  data: null,
};

type UserReducerActions =
  | LoginFailureAction
  | LoginRequestAction
  | LoginSuccessAction
  | LogoutAction;

export interface UserState {
  isLoggiIn: boolean,
  data: {
    nickname: string 
  } | null
}

const userReducer = (prevState: UserState, action: UserReducerActions) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
    case LOG_IN_SSUCCESS:
    case LOG_IN_FAILURE:
    case LOG_OUT:
      return {
        ...prevState,
        data: null
      }
    default:
      return prevState;
  }
};

export default userReducer;
