import { useState, useEffect, ChangeEvent } from "react";

// Style
import styles from "./Products.module.scss";

// Components
import ProductCard from "../../components/ProductCard";
import OrdinationSelector from "../../components/OrdinationSelector";
import http from "../../http";

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
import PaginationComponent from "../../components/PaginationComponent";
import { Pagination } from "@mui/material";

interface productApi {
  category: string;
  color: string;
  description: string;
  id: string;
  lastUpdateDate: string;
  name: string;
  productBrand: string;
  purchasePrice: number;
  salePrice: number;
  section: string;
  size: string;
  sku: string;
  stockQuantity: number;
}

// ?size=(número de elementos por página)&page=(número da página)

const Products = () => {
  const [products, setProducts] = useState<productApi[]>([]);
  const [pageSize, setPageSize] =  useState(1);
  const [pageNumber, setPageNumber] =  useState(Number);

  useEffect(() => {
    const fecthData = async () => {
      http
        .get("/product?size=" + pageSize + "&page=" + pageNumber)
        .then((response) => {
          setProducts(response.data["content"]);
        })
        .catch();
    };
    fecthData();
  }, [pageNumber]);

  const changePage = (event: ChangeEvent<unknown>, pagina: number) => {
    
    setPageNumber(pagina)
    console.log(pageNumber);

  }

  return (
    <div className={styles.page}>
      <div>
        <OrdinationSelector/>
      </div>
      
        <Grid
          className={styles.grid}
          spacing={3}
          container
          width="70%"
        >
          {products.map(
            (
              product,
              position // Tamanho do array = quantidade de produtos
            ) => (
              <Grid item xs={3} key={position}>
                <ProductCard
                  name={product.name}
                  price={product.salePrice}
                  img={image_1}
                  link="#"
                />
              </Grid>
            )
          )}
        </Grid>

        <Pagination count={10} onChange={changePage} page={pageNumber}/>
      
    </div>
  );
};

export default Products;
