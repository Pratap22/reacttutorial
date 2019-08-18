import React from 'react';
import { Provider } from './Context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Lyrics from './data/Lyrics';
import Index from './components';

export class ReactContext extends React.Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/lyrics/track/:id" component={Lyrics} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
