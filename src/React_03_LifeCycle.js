import React, { Component } from 'react';

const employees = [
  {
    name: 'Raj',
    age: '20'
  },
  {
    name: 'Laxma',
    age: '25'
  },
  {
    name: 'Himanshu',
    age: '23'
  },
  {
    name: 'Imran',
    age: '27'
  },
  {
    name: 'Imad',
    age: '25'
  }
];

class React_03_LifeCycle extends Component {
  // Mounting lifecycle
  //1. constructor
  //2. componentWillMount -> deprecated
  //3. render()
  //4. componentDidMount
  //5. componentWillUnmount

  constructor(props) {
    super(props);
    console.log('1. Constructor Called - Mounting');
    this.state = {
      count: 0
    };
  }

  componentWillMount() {
    console.log('2. ComponetWillMount - Mounting');
    // Used for calling RestApi
    // to get device width/height
  }
  componentDidMount() {
    console.log('4. ComponentDidMount - Mounting');
    // Used for calling RestApi
    // to get device width/height
    // any other stuffs
  }

  componentWillUnmount() {
    console.log('5. ComponentWillUnMount - Mounting');
    // Closing open API Calls -> asynchronous
    // Closing memory related stuffs -> asynchronous
  }

  // class A(state) ->  Class B(props, state) or Function B(props)

  // updating lifecycle
  //1. shouldComponentUpdate
  //2. componeWillUpdate
  //3. render
  //4. componentDidUpdate

  componentWillUpdate() {
    console.log('2. componentWillUpdate');
  }

  shouldComponentUpdate() {
    console.log('1. ShouldComponentUpdate');
    if (this.state.count === 3) {
      console.log('Inside if');
      return false;
    } else {
      console.log('Inside Els');
      return true;
    }
  }
  componentDidUpdate() {
    console.log('4. ComponentDidUpdate');
    //api calls
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  higherOrderFunctionExample = () => {
    //map loops through the array and return new array
    // return employees.map((employee, index) => {
    //   return (
    //     <div key={index}>
    //       <p>{employee.name}</p>
    //       <p>{employee.age}</p>
    //     </div>
    //   );
    // });

    return employees.map((employee, index) => (
      <div key={index}>
        <p>{employee.name}</p>
        <p>{employee.age}</p>
      </div>
    ));
  };

  render() {
    console.log('3. Render Mounting');
    console.log('3. Render Updating');
    const { count } = this.state;
    // to handle logics related to sate.

    return (
      <div>
        React Lifecycle
        <button onClick={this.handleClick}>Click me</button>
        {/*Conditional Rendering */}
        {/* this.state.count && <AppClass /> */}
        <p>{count}</p>
        {this.higherOrderFunctionExample()}
      </div>
    );
  }
}

export default React_03_LifeCycle;
