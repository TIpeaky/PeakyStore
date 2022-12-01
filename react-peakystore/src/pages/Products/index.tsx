import ProductCard from "../../components/ProductCard";
import image_1 from "../../images/Products/Produto - 1.png";
import image_2 from "../../images/Products/jaqueta_jeans.jpg";
import styles from "./Products.module.scss";

const Products = () => {
  return (
    <div className={styles.page}>
      <section className={styles.container_products}>

        <ProductCard name="Camiseta Peak" price="49,90" img={image_1} link="#" />
        <ProductCard name="Pijama Peak" price="49,90" img={image_2} link="#" />
        <ProductCard name="Calça Peak" price="49,90" img={image_1} link="#" />
        <ProductCard name="Shorts Peak" price="49,90" img={image_1} link="#" />
        <ProductCard name="Meias Peak" price="49,90" img={image_1} link="#" />
        <ProductCard name="Camiseta Peak" price="49,90" img={image_1} link="#" />
        <ProductCard name="Pijama Peak" price="49,90" img={image_2} link="#" />
        <ProductCard name="Calça Peak" price="49,90" img={image_1} link="#" />
      </section>
    </div>
  );
};

export default Products;
