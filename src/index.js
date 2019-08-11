import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Todo from './reactClass/Todo/React_05_TodoApp';

ReactDOM.render(<Todo />, document.getElementById('root'));
serviceWorker.unregister();
