export const ADD_POST = 'ADD_POST' as const;

export interface AddPostAction {
  type: typeof ADD_POST,
  data: string,
}

export const addPost = (data: string) => {
  return {
    type: ADD_POST,
    data,
  }
}