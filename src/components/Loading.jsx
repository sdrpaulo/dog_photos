import React from 'react';
import Icon from '../assets/img/loading.svg';
import './Loading.css';

function Loading() {
  return (
    <div className="loading">
      <img src={Icon} alt="a dog's paw spinning" className="loading-icon"/>
    </div>
  )
}

export default Loading;