import React, { Component } from 'react';

// 1. Creating an context

// Provider , Consumer

// 2. Provider -> Provides value to the children

// 3. Consumer -> The childern then can consume the value passed to the provider

// Create a context
const MyContext = React.createContext();

class ContextWithContext extends Component {
  state = {
    type: 'number',
    name: 'Shreskar',
    role: {
      admin: true,
      schoolName: 'DPS'
    }
  };

  toggleState = () => {
    this.setState(state => ({
      type: state.type === 'number' ? 'string' : 'number'
    }));
  };

  render() {
    // value in provider is initial state
    return (
      <MyContext.Provider
        value={{ state: this.state, updateState: () => this.toggleState() }}
      >
        <Component1 />
      </MyContext.Provider>
    );
  }
}
export default ContextWithContext;

function Component1() {
  return (
    <div style={{ background: 'red', paddingBottom: 30 }}>
      Component
      <Component2 />
      <Component2A />
    </div>
  );
}

function Component2() {
  return (
    <MyContext.Consumer>
      {value => {
        console.log('Component 2 ', value);
        return (
          <div style={{ background: '#DDD' }}>
            Component 2{value.state.type} {value.state.role.schoolName}
            <button onClick={value.updateState}>Click</button>
          </div>
        );
      }}
    </MyContext.Consumer>
  );
}

function Component2A() {
  return (
    <MyContext.Consumer>
      {value => {
        console.log('Component 2A ', value);
        return (
          <div style={{ background: '#DFF' }}>
            Component 2A{value.state.type} {value.state.role.schoolName}
            <button onClick={value.updateState}>Click</button>
          </div>
        );
      }}
    </MyContext.Consumer>
  );
}
