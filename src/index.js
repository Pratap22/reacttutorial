import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Pratap } from './App';
import * as serviceWorker from './serviceWorker';
import AppClass from './AppClass';
import ReactLifeCycle from './React_03_LifeCycle';

ReactDOM.render(<ReactLifeCycle />, document.getElementById('root'));
serviceWorker.unregister();
