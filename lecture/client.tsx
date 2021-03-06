import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import GuGuDan from './GuGuDan';
import WordRelay from './WordRelay';
import NumberBaseBall from './NumberBaseBall';
import ResponseCheck from './ResponseCheck';
import RSP from './RSP';
import Lotto from './Lotto';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

const Hot = hot(App);


ReactDOM.render(
  <Provider store={store}>
    <Hot />
  </Provider>
  ,document.querySelector('#root')
);