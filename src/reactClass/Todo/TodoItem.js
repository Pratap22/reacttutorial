import React from 'react';

class TodoItem extends React.Component {
  state = {
    valueInput: ''
  };
  componentDidMount() {
    console.log('Called');
    this.setState({ valueInput: this.props.name });
  }
  handleInputChange = e => {
    console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <tbody>
        <tr style={{ border: '1px solid grey' }}>
          <td>
            <input
              type="text"
              name="valueInput"
              onChange={this.handleInputChange}
              value={this.state.valueInput}
            />
          </td>
          <td>
            <span
              onClick={this.props.handleDeleteItem}
              style={{ cursor: 'pointer' }}
            >
              Delete
            </span>
          </td>
          <td>
            <span
              onClick={() => this.props.updateItem(this.state.valueInput)}
              style={{ cursor: 'pointer' }}
            >
              Update
            </span>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default TodoItem;
