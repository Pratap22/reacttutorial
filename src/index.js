import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Recap from './reactClass/React_03_LifeCycle_recap';

ReactDOM.render(<Recap />, document.getElementById('root'));
serviceWorker.unregister();
