import { useState } from 'react';
import styles from './FilterProduct.module.scss'

function FilterProduct() {

    const [notification, setNotification] = useState(false);

    const handleChange = (
        evento: React.ChangeEvent<HTMLInputElement>
      ) => {
        if (evento.target.value == "true") {
          if (notification == true) {
            console.log("Desmarcado");
          }
          setNotification(!notification);
        }
      };

    return (
        <section>
            <div className={styles.filter_product}>
                <h5 className={styles.filter_product__title}>Categorias</h5>
                <div className={styles.filter_product__item}>
                    <input
                    type="checkbox"
                    id="notification"
                    className={styles.filter_product__input}
                    name="notification"
                    value="true"
                    onChange={handleChange}
                    />
                    <label htmlFor="notification" className={styles.filter_product__label}>
                    Nike
                    </label>
                </div>
                <span className={styles.filter_product__button}>+ ver mais</span>
                
                <div className={styles.filter_product__tamanhos}>
                    <h5 className={styles.filter_product__title}>Tamanhos</h5>
                    <div className={styles.filter_product__item}>
                        <input
                        type="checkbox"
                        id="notification"
                        className={styles.filter_product__input}
                        name="notification"
                        value="true"
                        onChange={handleChange}
                        />
                        <label htmlFor="notification" className={styles.filter_product__label}>
                        XS
                        </label>
                    </div>
                </div>

                <section className={styles.filter_product__cores}>
                    <h5 className={styles.filter_product__title}>Cores</h5>
                    <div className={styles.filter_product__cores__grid}>
                        <div className={styles.filter_product__cores_item}></div>
                        <div className={styles.filter_product__cores_item}></div>
                        <div className={styles.filter_product__cores_item}></div>
                        <div className={styles.filter_product__cores_item}></div>
                        <div className={styles.filter_product__cores_item}></div>
                        <div className={styles.filter_product__cores_item}></div>
                        <div className={styles.filter_product__cores_item}></div>
                        <div className={styles.filter_product__cores_item}></div>
                    </div>
                </section>

                <section  className={styles.filter_product__preco}>
                    <h5 className={styles.filter_product__title}>Preços</h5>
                    <div className={styles.filter_product__item}>
                        <p className={styles.filter_product__preco__label}>Max: R$</p>
                        <div className={styles.filter_product__preco__input}></div>
                    </div>
                    <div className={styles.filter_product__item}>
                        <p className={styles.filter_product__preco__label}>Min:  R$</p>
                        <div className={styles.filter_product__preco__input}></div>
                    </div>
                </section>
                

                <section  className={styles.filter_product__preco}>
                    <h5 className={styles.filter_product__title}>Gêneros</h5>
                    <div className={styles.filter_product__item}>
                        <input
                        type="checkbox"
                        id="notification"
                        className={styles.filter_product__input}
                        name="notification"
                        value="true"
                        onChange={handleChange}
                        />
                        <label htmlFor="notification" className={styles.filter_product__label}>
                        Unissex
                        </label>
                    </div>
                    <div className={styles.filter_product__item}>
                        <input
                        type="checkbox"
                        id="notification"
                        className={styles.filter_product__input}
                        name="notification"
                        value="true"
                        onChange={handleChange}
                        />
                        <label htmlFor="notification" className={styles.filter_product__label}>
                        Masculino
                        </label>
                    </div>
                    <div className={styles.filter_product__item}>
                        <input
                        type="checkbox"
                        id="notification"
                        className={styles.filter_product__input}
                        name="notification"
                        value="true"
                        onChange={handleChange}
                        />
                        <label htmlFor="notification" className={styles.filter_product__label}>
                        Feminino
                        </label>
                    </div>
                </section>


                <div className={styles.filter_product__}>
                    <h5 className={styles.filter_product__title}>Marcas</h5>
                        <div className={styles.filter_product__item}>
                            <input
                            type="checkbox"
                            id="notification"
                            className={styles.filter_product__input}
                            name="notification"
                            value="true"
                            onChange={handleChange}
                            />
                            <label htmlFor="notification" className={styles.filter_product__label}>
                            Nike
                            </label>
                        </div>
                        <div className={styles.filter_product__item}>
                            <input
                            type="checkbox"
                            id="notification"
                            className={styles.filter_product__input}
                            name="notification"
                            value="true"
                            onChange={handleChange}
                            />
                            <label htmlFor="notification" className={styles.filter_product__label}>
                            Puma
                            </label>
                        </div>
                </div>               
            </div>
        </section>
    )
}

export default FilterProduct;
