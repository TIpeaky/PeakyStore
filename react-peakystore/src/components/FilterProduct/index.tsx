import { useState } from 'react';
import http from '../../http';
import styles from './FilterProduct.module.scss'

export interface IOpcao {
    id: number;
    name: string;
}

export interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

function FilterProduct({ filtro, setFiltro }: Props) {

    const [categorys, setCategorys] = useState([]);

    http.get('product/teste')
    .then(resposta => {
        setCategorys(resposta.data)
    })
    .catch(erro => {
        if (erro?.response?.data?.message) {
            alert(erro.response.data.message)
        } else {
            alert('Aconteceu um erro inesperado! Entre em contato com o suporte!')
        }

    })

    function handleChange(opcao: IOpcao) {
        if (filtro === opcao.id) return setFiltro(null);
        return setFiltro(opcao.id);
      }

    return (
        <section>
            <div className={styles.filter_product}>
                <h5 className={styles.filter_product__title}>Categorias</h5>
                <div className={styles.filter_product__item}>
                    {categorys.map ( opcao => (
                        <>
                            <input
                            key={opcao.id}
                            type="checkbox"
                            id={opcao.id}
                            className={styles.filter_product__input}
                            name={opcao.name}
                            value="true"
                            onClick={() => handleChange(opcao)}/>
                            <label htmlFor={opcao.name} className={styles.filter_product__label}>
                                {opcao.name}
                            </label></>
                        </>
                    ))}
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
                        //onChange={handleChange}
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
                        //onChange={handleChange}
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
                        //onChange={handleChange}
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
                        //onChange={handleChange}
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
                            //onChange={handleChange}
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
                            //onChange={handleChange}
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
