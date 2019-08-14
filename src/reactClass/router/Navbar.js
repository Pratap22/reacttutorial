import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/private">Private</Link>
        </li>
        {/* <li>
          <Link to="/componentA">Component A</Link>
        </li> */}
        <li>
          <Link to="/component2">Component B</Link>
        </li>
      </nav>
    );
  }
}

export default NavBar;
