import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';
import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';

const App = () => {

  const [data, setData] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState({});

  useEffect(() => {
    fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
      .then(response => response.json())
      .then(data => setData(data.zvirata));
  },
    []
  );

  const chooseAnimal = (chosenAnimal) => {
    setSelectedAnimal(chosenAnimal);
  };

  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        <AnimalList data={data} chooseAnimal={chooseAnimal} />
        <AnimalDetail
          selectedAnimal={selectedAnimal}
          data={data} />

      </div>

    </>
  );
}

render(<App />, document.querySelector('#app'));