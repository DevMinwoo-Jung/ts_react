import { createStore } from 'redux';

import reducer from './reducers';


const initialState = {
  user: {
    isLogginIn: false,
    data: null,
  },
  posts: [],
}

const store = createStore(reducer, initialState);

export default store;