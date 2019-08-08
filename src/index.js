import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Pratap } from './App';
import * as serviceWorker from './serviceWorker';
import AppClass from './AppClass';

ReactDOM.render(<AppClass />, document.getElementById('root'));
serviceWorker.unregister();
