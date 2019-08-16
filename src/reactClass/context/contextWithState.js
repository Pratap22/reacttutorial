import React, { Component } from 'react';

class ContextWithState extends Component {
  state = {
    type: 'number'
  };

  toggleState = () => {
    this.setState(state => ({
      type: state.type === 'number' ? 'string' : 'number'
    }));
  };

  render() {
    return (
      <div>
        <Component1 type={this.state.type} toggleState={this.toggleState} />
      </div>
    );
  }
}
export default ContextWithState;

// Prettier - Code formatter
//ES7 React/Redux/GraphQL

// state type = number
// 10 -> type = number
// 40 -> type = number

//ContextWithState(type, toggleState) -> Component1(type, toggleState)
// -> Component2((type, toggleState))

function Component1(props) {
  return (
    <div>
      Component 1 {props.type}
      <Component2 type={props.type} toggleState={props.toggleState} />
      <Component2A type={props.type} toggleState={props.toggleState} />
    </div>
  );
}

function Component2(props) {
  return (
    <div>
      Component 2{props.type}
      <button onClick={props.toggleState}>Chnage type</button>
    </div>
  );
}

function Component2A(props) {
  return (
    <div>
      Component 2A {props.type}
      <button onClick={props.toggleState}>Chnage type</button>
    </div>
  );
}

//  A

// B C

//
