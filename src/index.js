import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import ContextWithContext from './reactClass/context/contextWithContext';

ReactDOM.render(<ContextWithContext />, document.getElementById('root'));
serviceWorker.unregister();

// admin -> Need to check if user is login.
//If islogged in redirect to to admin dashboard else redirect to login page
