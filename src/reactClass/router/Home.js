import React from 'react';

const obj = { name: 'Pratap', address: 'Bangalore' };

class Home extends React.Component {
  passData = () => {
    this.props.history.push('/component2', obj);
  };
  render() {
    return (
      <div>
        <button onClick={this.passData}>Pass Data to Component 2</button>
      </div>
    );
  }
}
export default Home;
