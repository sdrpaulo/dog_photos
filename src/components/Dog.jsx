import React from 'react';
import './Dog.css';

const dog = (props) => {
  return (
    <div className="dog">
      <img src={props.img} alt={props.alt} className="dog-pic"/>
    </div>
  )
}

export default dog;