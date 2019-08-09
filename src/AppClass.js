import React from 'react';
import './App.css';
import { Pratap } from './App';

class AppClass extends React.Component {
  state = {
    employess: [{ name: 'Pratap' }, { name: 'Krishna' }, { name: 'Raj' }]
  };

  handleClick = () => {
    console.log('State count inside handle click', this.state.count);
    this.setState({ count: this.state.count + 1 });
  };

  printEmployee = () => {
    // map filter reduce forEach
    const { employess } = this.state;
    let employeeDiv = [];

    // It just iterate and returns nothing
    employess.forEach((employee, index) => {
      employeeDiv.push(<Pratap name={employee.name} key={index} />);
    });
    return employeeDiv;
  };

  componentWillUnmount() {
    console.log('ComponentWillUnMount From AppClass');
  }

  render() {
    console.log('State count inside render ', this.state.count);
    return (
      <div className="App">
        <button onClick={this.handleClick}>Increment</button>
        {this.printEmployee()}
      </div>
    );
  }
}

export default AppClass;

// Differences
//1. Syntax
// 2. React.Component extends
// 3. Class will have state

// JSX -> Javascript XML

// Two types of component

// functional component -> stateless component
// class component -> stateful component

// LifeCycle of class
// Mounting - Lifecycle
// Updating lifecycle

// Higher Order Function -> map , filter, reduce, forEach
