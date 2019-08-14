import React from 'react';

export default function Component2(props) {
  const { name, address } = props.location.state;
  return (
    <div>
      <p>{name}</p>
      <p>{address}</p>
    </div>
  );
}
