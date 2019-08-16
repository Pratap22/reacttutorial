import React from 'react';

class AppClass extends React.Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // printEmployee = () => {
  //   // map filter reduce forEach
  //   const { employess } = this.state;
  //   let employeeDiv = [];

  //   // It just iterate and returns nothing
  //   employess.forEach((employee, index) => {
  //     employeeDiv.push(<Pratap name={employee.name} key={index} />);
  //   });
  //   return employeeDiv;
  // };

  // componentWillUnmount() {
  //   console.log('ComponentWillUnMount From AppClass');
  // }

  render() {
    console.log('Child State: ', this.state.count);
    console.log('Parent Props State: ', this.props.parentCount);
    return (
      <div className="App">
        <button onClick={this.handleClick}>Child Increment</button>
        <br />
        <br />
        <button onClick={this.props.handleClick}>
          Parent increment from Child Increment
        </button>

        {/* {this.printEmployee()} */}
        <p>Child {this.state.count}</p>
        <p>Parent {this.props.parentCount}</p>
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

// Todo App (Only React -> using react state | No endpoints involved)
// 1. Display list of todos
// 2. Delete
// 3. Update
// 4. Done
// child to parent communication
// How to pass props to childern
// Getting callback from childern

// Routing

// Rest API call

// Rest API call + React ContextAPI -> App
// -> 3-4 restApi call -> respnse -> store in global state

// Node server -> How to create ->
// MEAN -> MongoDb Express Angular Node  MERN -> MongoDb Express React Node

// Combine React state, Routing, Rest Api, Node(server)

// Todo App (Only React -> using react state and Database -> node.js(server) API involved)
// 1. Display list of todos
// 2. Delete
// 3. Update
// 4. Done

// Parent to child communication
// Child to parent communication
// Passing props to child
// getting callback from children

// Hooks implementation

// React-Redux -> ///
