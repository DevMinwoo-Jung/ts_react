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
  data: {useId: string, nickname: string},
}

export interface LoginFailureAction {
  type: typeof LOG_IN_FAILURE,
  error: Error,
}

export const login = (data: {id: string, password: string}) => {

};


export interface LogoutAction {
  type: typeof LOG_OUT,
};

export const logout = () => {
  return {
    type: LOG_OUT,
  };
};