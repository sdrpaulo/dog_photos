import React from 'react';
import Dog from './Dog';
import './Content.css';

function Content() {
  return (
    <section className="pictures">
      <Dog img={'https://placedog.net/500'} />
      <Dog img={'https://placedog.net/500'} />
      <Dog img={'https://placedog.net/500'} />
      <Dog img={'https://placedog.net/500'} />
    </section>
  )
}

export default Content;