import React, {Component} from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

class Todo extends Component {
  state = {
    todos: [
      {
        id: 1,
        name: 'To get things done',
        isCompleted: true
      }
    ]
  };

  handleItemAdd = value => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.concat([
          {
            id: Math.random(),
            name: value,
            isCompleted: false
          }
        ])
      };
    });
  };

  handleItemDelete = id => {
    // Never muatate the state
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(item => item.id !== id)
      };
    });
  };

  render() {
    return (
      <div>
        <TodoInput onTodoItemAdd={value => this.handleItemAdd(value)} />
        {this.state.todos.map((item, index) => (
          <TodoItem
            name={item.name}
            tips="This is todo"
            handleDeleteItem={() => this.handleItemDelete(item.id)}
            key={`${index} - ${item.id}`}
          />
        ))}
      </div>
    );
  }
}

export default Todo;

// Higher Order Function -> a function that takes a function and returns a function
// Higher Order Component ->  a function take takes component and returns a component


// TO impleted complete
// Update the Todo