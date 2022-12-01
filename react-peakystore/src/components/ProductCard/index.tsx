import styles from "./ProductCard.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

interface props {
  name: string;
  price: string;
  img: string;
  link?: string;
}

const ProductCard = ({ name, price, img, link }: props) => {
  const [isActive, SetIsActive] = useState(false);
  const [color, setColor] = useState("#FFFFFF");
  const [stroke, setStroke] = useState("#000000");

  const changeFavorite = () => {
    if(!isActive) {
      setColor("#FF0000");
      setStroke("#FF0000");
      SetIsActive(true)
    } else {
      setColor("#FFFFFF");
      setStroke("#000000");
      SetIsActive(false);
    }
  };

  return (
    <div className={styles.card}>
      <a href={link}>
        <img src={img} alt="" className={styles.card_img} />

        <h1 className={styles.card_h1}>{name}</h1>
      </a>

      <div className={styles.card_container}>

        <p className={styles.card_p}>R${price}</p>

        <FavoriteIcon
          className={styles.card_icon}
          onClick={changeFavorite}
          sx={{
            color: color,
            stroke: stroke,
            strokeWidth: 1.7,
            "&:hover": {
              color: "#FF0000",
              stroke: "#FF0000",
              strokeWidth: 1.7,
            },
            cursor: "pointer",
          }}
        />

        {/* <SvgIcon
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium ProductCard_card_icon__BaRHv css-i4bv87-MuiSvgIcon-root"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="FavoriteBorderIcon"
        >
          <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
        </SvgIcon> */}
      </div>
    </div>
  );
};

export default ProductCard;
