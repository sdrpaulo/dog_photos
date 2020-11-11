import React from 'react';
import './Header.css';

const display = {
  DOG_API: 'https://dog.ceo/api/breeds/list/all',

  loading() {
    let loading = document.querySelector('.loading');
    loading.classList.add('on');
  
    setTimeout(() => {
      loading.classList.remove('on');
    }, 3000);
  },

  init() {
    display.loading();
  }
}


function Header() {
  return (
    <section className="header">
      <h1 className="header-title">Dog Photos</h1>
      <p className="header-text">
        Are you feeling upset? Select a breed from the list below and make your day so much better with dog pictures!
      </p>
      <div className="header-breed">
        <select name="" id="" className="header-breed-select"></select>
        <button className="header-breed-button" onClick={display.init}>Search</button>
      </div>
    </section>
  )
}

export default Header;