import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import NavBar from '../../components/NavBar';
import Rodape from '../../components/footer/Footer';
import estilos from './Home.module.scss';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Rodape />
    </>
  );
}

export default App;
