import React from 'react';
import { Provider } from './Context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Tracks from './data/Tracks';

export class ReactContext extends React.Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/" component={Tracks} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
