import { useState, useEffect, ChangeEvent } from "react";

// Style
import styles from "./Products.module.scss";

// Components
import ProductCard from "../../components/ProductCard";
import OrdinationSelector from "../../components/OrdinationSelector";
import http from "../../http";
import FilterProduct from '../../components/FilterProduct';

// MUI Material
import Grid from "@mui/material/Grid";
import { Pagination } from "@mui/material";

// Images
import image_1 from "../../images/Products/Produto - 1.png";
import image_2 from "../../images/Products/jaqueta_jeans.jpg";
import image_3 from "../../images/Products/pijama.jpg";
import image_4 from "../../images/Products/calca_jeans.jpg";
import image_5 from "../../images/Products/meias.jpg";
import image_6 from "../../images/Products/camiseta_listrada.jpg";
import image_7 from "../../images/Products/shorts.jpg";
import image_8 from "../../images/Products/vestido.jpg";

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
  const [pageSize, setPageSize] = useState(1);
  const [pageNumber, setPageNumber] = useState(Number);
  const [totalPages, setTotalPages] = useState(Number);
  const [sort, setSort] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);

  useEffect(() => {
    const fecthData = async () => {
      http
        .get(
          "/product?pageSize=" + pageSize + "&pageNumber=" + pageNumber + "&pageSort=" + sort
        )
        .then((response) => {
          setProducts(response.data["content"]);
          setTotalPages(response.data["totalPages"]);
        })
        .catch();
    };
    fecthData();
  }, [pageNumber, sort]);

  const changePage = (event: ChangeEvent<unknown>, pagina: number) => {
    setPageNumber(pagina - 1);
  };

  const onChangeSelector = (option: string) => {
    setSort(option);
  };

  return (
    <div className={styles.page_products}>
      <div className={styles.selector}>
        <OrdinationSelector onAddOption={onChangeSelector} />
      </div>

      <div>
        <FilterProduct filtro={filtro} setFiltro={setFiltro}/>
      </div>

      <Grid
        className={styles.container_products}
        spacing={3}
        container
        width="70%"
        marginRight="5%"
        marginTop="1%"
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
      <Pagination
        className={styles.pagination}
        count={totalPages}
        onChange={changePage}
        page={pageNumber + 1}
      />
    </div>
  );
};

export default Products;
