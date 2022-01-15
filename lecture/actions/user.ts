import { addPost } from './post';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST' as const;
export const LOG_IN_SSUCCESS = 'LOG_IN_SSUCCESS' as const;
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE' as const;
export const LOG_OUT = 'LOG_OUT';

export interface LoginRequestAction {
  type: typeof LOG_IN_REQUEST,
  data: {id: string, password: string},
}

export interface LoginSuccessAction {
  type: typeof LOG_IN_SSUCCESS,
  data: {userId: number, nickname: string},
}

export interface LoginFailureAction {
  type: typeof LOG_IN_FAILURE,
  error: Error,
}

interface ThunkDispatch {
  (thinkAction: ThunkAction): void,
  <A>(action: A): A,
  <TAction>(action: TAction | ThunkAction): TAction;
}

type ThunkAction = (dispatch: ThunkDispatch) => void;

export const logInRequest = (data: {id: string, password: string}): LoginRequestAction => {
  return {
    type: LOG_IN_REQUEST,
    data,
  }
}

export const logInSuccess = (data: {userId: number, nickname: string}): LoginSuccessAction => {
  return {
    type: LOG_IN_SSUCCESS,
    data,
  }
}

export const loginFailure = (error: Error): LoginFailureAction => {
  return {
    type: LOG_IN_FAILURE,
    error,
  }
}

export const login = (data: {id: string, password: string}): ThunkAction => {
  return (dispatch) => {
    dispatch(logInRequest(data));
    try{
      setTimeout(() => {
        dispatch(logInSuccess({
          userId: 1,
          nickname: 'minwoo!',
        }));
        dispatch(addPost(''));
      }, 1000)
    } catch (err) {
      // dispatch(loginFailure(err))
    }
  }
};




export interface LogoutAction {
  type: typeof LOG_OUT,
};

export const logout = () => {
  return {
    type: LOG_OUT,
  };
};