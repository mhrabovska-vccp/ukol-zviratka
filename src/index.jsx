import { render } from 'react-dom';
import React from 'react';
import './style.css';
import Animal from './components/Animal';

const App = () => {



  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        <Animal/>
      

      </div>

    </>
  );
}

render(<App />, document.querySelector('#app'));