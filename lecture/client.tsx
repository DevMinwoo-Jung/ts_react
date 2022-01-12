import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import GuGuDan from './GuGuDan';
import WordRelay from './WordRelay';
import NumberBaseBall from './NumberBaseBall';
import ResponseCheck from './ResponseCheck';

const Hot = hot(ResponseCheck);


ReactDOM.render(
  <Hot />,document.querySelector('#root')
);