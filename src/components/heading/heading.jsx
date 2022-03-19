import React from 'react';
import './heading.scss';

function Heading(props) {
  return (
    <div className='Heading'>
      <h1>{props.type}</h1>
    </div>
  );
}

export { Heading };
