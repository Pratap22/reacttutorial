import React from 'react';

class TodoItem extends React.Component {
  state={
    input: ""
  }
  componentDidMount(){
    this.setState({input: this.props.name})
  }
  render(){
  return (
    <div>
      <input type="text" onChange={} value={this.state.input} />
        <span onClick={props.handleDeleteItem} style={{ cursor: 'pointer' }}>
          X
        </span>
        <span onClick={props.updateItem} style={{ cursor: 'pointer' }}>
          Update
        </span>
    </div>
  );
  }
};

export default TodoItem;
