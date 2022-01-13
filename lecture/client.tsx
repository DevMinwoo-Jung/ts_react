import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import GuGuDan from './GuGuDan';
import WordRelay from './WordRelay';
import NumberBaseBall from './NumberBaseBall';
import ResponseCheck from './ResponseCheck';
import RSP from './RSP';

const Hot = hot(RSP);


ReactDOM.render(
  <Hot />,document.querySelector('#root')
);