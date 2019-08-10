import React from 'react';
import AppClass from './AppClass';

class Recap extends React.Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('Parent Count: ', this.state.count);
    console.log('*******************');
    return (
      <div>
        <button onClick={this.handleClick}>Parent Increment</button>
        <p>Parent Count: {this.state.count}</p>
        <AppClass
          parentCount={this.state.count}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
export default Recap;
