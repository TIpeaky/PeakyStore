import React, { useState, useEffect } from "react";
import CarrouselImage from "../../images/Rectangle2.png";
import FemineImage from "../../images/FemineImage.png";
import MasculineImage from "../../images/MasculineImage.png";
import childishImage from "../../images/ChildishImage.png";
import Pagination from "./Pagination";
import estilos from "./Home.module.scss";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/static/categories.json')
      .then((response) => response.json())
      .then(setData);
  }, [])

  if (!data || !data.length) return null;

  return (
    <div className={estilos.homeContainer}>
      <div className={estilos.carrouselContainer}>
        <div className={estilos.carrouselImageContainer}>
          <a href="link">
            <img src={CarrouselImage} alt="Carrosel imagem" />
          </a>
        </div>
        <div>
          <Pagination />
        </div>
      </div>
      <div className={estilos.sectionContainer}>
        <div className={estilos.sectionItem}>
          <div className={estilos.imageContainer}>
            <a href="link">
              <img src={FemineImage} alt="Imagem seção feminina" />
            </a>
          </div>
          <h3>Feminino</h3>
        </div>
        <div className={estilos.sectionItem}>
          <div className={estilos.imageContainer}>
            <a href="link">
              <img src={MasculineImage} alt="Imagem seção Masculina" />
            </a>
            <h3>Masculino</h3>
          </div>
        </div>
        <div className={estilos.sectionItem}>
          <div className={estilos.imageContainer}>
            <a href="link">
              <img src={childishImage} alt="Imagem seção Infantil" />
            </a>
          </div>
          <h3>Infantil</h3>
        </div>
      </div>

      <div className={estilos.carrouselCategoryContainer}>
        {data.map((item) => {
          const {id,urlImg, categoryName} = item;
          
          return (
          <div className={estilos.categoryCard} key={id}>
            <div className={estilos.categoryImage}>
              <img src={urlImg} alt={categoryName} />
            </div>
            <h3>{categoryName}</h3>
          </div>)
        })}
      </div>
    </div>
  );
}

export default App;
