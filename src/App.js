import React from 'react';
import logo from './logo.svg';
import './App.css';

export const Pratap = props => {
  console.log('Props inside Pratap ', props);
  return (
    <div className="App">
      <p>{props.name}</p>
    </div>
  );
};

// JSX -> Javascript XML

// Two types of component

// functional component -> stateless component
// class component -> stateful component
