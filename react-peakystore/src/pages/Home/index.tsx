import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import Rodape from '../../components/footer/index';
import estilos from './Home.module.scss';

function App() {
  return (
    <>
      <Banner />
      <Rodape />
    </>
  );
}

export default App;
