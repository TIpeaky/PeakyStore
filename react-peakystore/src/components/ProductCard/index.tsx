import styles from "./ProductCard.module.scss"
import image from "../../images/Products/Produto - 1.png"

const ProductCard = () => {

    return(

        <div className={styles.card}>
            <img src={image} alt="" className={styles.card_img} />

            <h1 className={styles.card_h1}>
                Produto
            </h1>

            <p className={styles.card_p}>R$49,90</p>
        </div>









    );

}

export default ProductCard;