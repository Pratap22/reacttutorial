import React from 'react';

class TodoInput extends React.Component {
  state = {
    input: ''
  };
  handleKeyPress = e => {
    const key = e.key;

    if (key === 'Enter') {
      this.props.onTodoItemAdd(this.state.input);
      this.setState({
        input: ''
      });
    }
  };

  handleSubmitClick = () => {
    this.props.onTodoItemAdd(this.state.input);
    this.setState({
      input: ''
    });
  };

  handleInputCHange = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          title="SOme"
          onKeyPress={e => this.handleKeyPress(e)}
          onChange={e => this.handleInputCHange(e)}
          value={this.state.input}
          placeholder="Enter todo item"
        />
        <button onClick={this.handleSubmitClick}>Submit</button>
      </div>
    );
  }
}

export default TodoInput;

// map -> iterate and returns new
// forEach -> only iterate
// filter -> iterate, condition check, if true return item in new array
