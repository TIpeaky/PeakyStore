import { useState, useEffect } from "react";

// Style
import styles from "./Products.module.scss";

// Components
import ProductCard from "../../components/ProductCard";
import OrdinationSelector from "../../components/OrdinationSelector";

// MUI Material
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// Images
import image_1 from "../../images/Products/Produto - 1.png";
import image_2 from "../../images/Products/jaqueta_jeans.jpg";
import image_3 from "../../images/Products/pijama.jpg";
import image_4 from "../../images/Products/calca_jeans.jpg";
import image_5 from "../../images/Products/meias.jpg";
import image_6 from "../../images/Products/camiseta_listrada.jpg";
import image_7 from "../../images/Products/shorts.jpg";
import image_8 from "../../images/Products/vestido.jpg";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:8080/product")
        .then((response) => response.json)
        .then(data => data);

      setProducts(result);
    }
    fetchData()
  }, []);

  const arrayProducts: Array<product> = [
    {
      product1: (
        <ProductCard
          name="Camiseta Peak"
          price="49,90"
          img={image_1}
          link="#"
        />
      ),
    },
    {
      product1: (
        <ProductCard name="Pijama Peak" price="49,90" img={image_3} link="#" />
      ),
    },
    {
      product1: (
        <ProductCard
          name="Camiseta Peak"
          price="49,90"
          img={image_1}
          link="#"
        />
      ),
    },
    {
      product1: (
        <ProductCard
          name="Camiseta Peak"
          price="49,90"
          img={image_1}
          link="#"
        />
      ),
    },
    {
      product1: (
        <ProductCard
          name="Camiseta Peak"
          price="49,90"
          img={image_1}
          link="#"
        />
      ),
    },
    {
      product1: (
        <ProductCard
          name="Camiseta Peak"
          price="49,90"
          img={image_1}
          link="#"
        />
      ),
    },
  ];

  interface product {
    product1: object;
  }

  return (
    <div className={styles.page}>
      <OrdinationSelector />

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {arrayProducts.map(
            (
              product,
              position // Tamanho do array = quantidade de produtos
            ) => (
              <Grid item xs={12} sm={4} md={4} key={position}>
                {position}
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default Products;
