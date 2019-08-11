import React from 'react';

const TodoItem = props => {
  // presentational component or stateless component
  return (
    <div>
      <p title={props.tips}>
        {props.name}{' '}
        <span onClick={props.handleDeleteItem} style={{ cursor: 'pointer' }}>
          X
        </span>
      </p>
    </div>
  );
};

export default TodoItem;
