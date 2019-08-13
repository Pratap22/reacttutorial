import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './reactClass/router/Home';
import All from './reactClass/router/All';
import ComponentA from './reactClass/router/ComponentA';
import Component2 from './reactClass/router/Component2';
import Component3 from './reactClass/router/Component3';
import NavBar from './reactClass/router/Navbar';
import Login from './reactClass/router/Login';
import Private from './reactClass/router/Private';
import './App.css';
import { ProtectedRoute } from './reactClass/router/PrivateRoute';

class App extends React.Component {
  state = {
    isLoggedIn: true
  };

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/all" component={All} />
          <ProtectedRoute
            path="/admin"
            component={ComponentA}
            isLoggedIn={this.state.isLoggedIn}
          />
          <ProtectedRoute
            path="/private"
            component={Private}
            isLoggedIn={this.state.isLoggedIn}
          />
          <Route path="/component2" component={Component2} />
          <Route path="/component3" component={Component3} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

// JSX -> Javascript XML

// Two types of component

// functional component -> stateless component
// class component -> stateful component
