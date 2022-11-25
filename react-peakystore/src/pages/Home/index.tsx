import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import CarrouselImage from "../../images/Rectangle2.png";
import FemineImage from "../../images/FemineImage.png";
import MasculineImage from "../../images/MasculineImage.png";
import childishImage from "../../images/ChildishImage.png";
import Pagination from "./Pagination";
import Arrow from "../../images/Vector.png"
import estilos from "./Home.module.scss";

function App() {

  const [data, setData] = useState([]);
  const carousel = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    fetch('http://localhost:3000/static/categories.json')
      .then((response) => response.json())
      .then(setData);
  }, [])

  const handleLeftClick = (event: any) => {
    event.preventDefault();
    console.log(carousel.current.offsetWidth);

    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    console.log(carousel.current.scrollLeft)

  }

  const handleRightClick = (event: any) => {
    event.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    console.log(carousel.current.scrollLeft)
  }

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
            <a href="">
              <img src={FemineImage} alt="Imagem seção feminina" />
            </a>
          </div>
          <h3>Feminino</h3>
        </div>
        <div className={estilos.sectionItem}>
          <div className={estilos.imageContainer}>
            <a href="">
              <img src={MasculineImage} alt="Imagem seção Masculina" />
            </a>
            <h3>Masculino</h3>
          </div>
        </div>
        <div className={estilos.sectionItem}>
          <div className={estilos.imageContainer}>
            <a href="">
              <img src={childishImage} alt="Imagem seção Infantil" />
            </a>
          </div>
          <h3>Infantil</h3>
        </div>
      </div>

      <div className={estilos.carrouselCategoryContainer} >
        <div className={estilos.buttons}>
        <button onClick={handleLeftClick}><img src={Arrow} alt="Scroll Left" /></button>
        </div>
        <div className={estilos.carrousel} ref={carousel}>
          {data.map((item) => {
            const { id, urlImg, categoryName } = item;
            return (
              <div className={estilos.categoryCard} key={id}>
                <div className={estilos.categoryImage}>
                  <a href=""><img src={urlImg} alt={categoryName} /></a>
                </div>
                <h3>{categoryName}</h3>
              </div>)
          })}
        </div>

        <div className={estilos.buttons}>
        <button className={estilos.rightButton} onClick={handleRightClick}><img src={Arrow} alt="Scroll Right" /></button>
        </div>
      </div>
    </div>
  );
}

export default App;
