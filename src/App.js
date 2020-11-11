import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import Loading from './components/Loading';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

function App() {
  return(
    <main>
      <Header />
      <Loading />
      <Content />
      <Footer />
    </main>
  )
}

ReactDom.render(<App />, document.getElementById('root'));