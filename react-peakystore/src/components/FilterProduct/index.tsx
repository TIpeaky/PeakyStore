import { Collapse } from "@mui/material";
import { useEffect, useState } from "react";
import http from "../../http";
import styles from "./FilterProduct.module.scss";

export interface IOpcao {
  id: number;
  name: string;
}

export interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

function FilterProduct({ filtro, setFiltro }: Props) {
  const [checkedCategory, setCheckedCategory] = useState(false);
  const [checkedSize, setCheckedSize] = useState(false);
  const [checkedProductBrand, setCheckedProductBrand] = useState(false);

  const [collapseCategory, setCollapseCategory] = useState<string>("+ ver mais");
  const [collapseSize, setCollapseSize] = useState("+ ver mais");
  const [collapseProductBrand, setCollapseProductBrand] = useState("+ ver mais");

  const [category, setCategory] = useState("");

  const [categorys, setCategorys] = useState<IOpcao[]>([]);
  const [sizes, setSizes] = useState<IOpcao[]>([]);
  const [productBrands, setProductBrands] = useState<IOpcao[]>([]);

  useEffect(() => {
    http
      .get<{ category: IOpcao[], size: IOpcao[], productBrand: IOpcao[]}>("product/teste")
      .then((resposta) => {
        setCategorys(resposta.data.category);
        setSizes(resposta.data.size);
        setProductBrands(resposta.data.productBrand);
      })
      .catch((erro) => {
        if (erro?.response?.data?.message) {
          alert(erro.response.data.message);
        } else {
          alert(
            "Aconteceu um erro inesperado! Entre em contato com o suporte!"
          );
        }
      });
  }, []);

  function handleChange(opcao: IOpcao) {
    if (filtro === opcao.id) return setFiltro(null);
    return setFiltro(opcao.id);
  }

  function handleChangeCollapse(
    checked: boolean,
    setchecked: React.Dispatch<React.SetStateAction<boolean>>,
    setcollapse: any
  ) {
    setchecked((prev) => !prev);
    if (checked) {
      setcollapse("+ ver mais");
    } else {
      setcollapse("- ver menos");
    }
  }

  return (
    <section>
      <div className={styles.filter_product}>
        <h5 className={styles.filter_product__title}>Categorias</h5>
        <Collapse
          orientation="vertical"
          in={checkedCategory}
          collapsedSize={142}
        >
          {categorys.map((opcao) => (
            <div className={styles.filter_product__item}>
              <input
                key={opcao.id}
                type="checkbox"
                className={styles.filter_product__input}
                name={opcao.name}
                onClick={() => handleChange(opcao)}
              />
              <label
                htmlFor={opcao.name}
                className={styles.filter_product__label}
              >
                {opcao.name}
              </label>
            </div>
          ))}
        </Collapse>
        <button
          onClick={() =>
            handleChangeCollapse(
              checkedCategory,
              setCheckedCategory,
              setCollapseCategory
            )
          }
          className={styles.filter_product__button}
        >
          {collapseCategory}
        </button>

        <h5 className={styles.filter_product__title}>Tamanhos</h5>
        <Collapse orientation="vertical" in={checkedSize} collapsedSize={142}>
          {sizes.map((opcao) => (
            <div className={styles.filter_product__item}>
              <input
                key={opcao.id}
                type="checkbox"
                className={styles.filter_product__input}
                name={opcao.name}
                onClick={() => handleChange(opcao)}
              />
              <label
                htmlFor={opcao.name}
                className={styles.filter_product__label}
              >
                {opcao.name}
              </label>
            </div>
          ))}
        </Collapse>
        <button
          onClick={() =>
            handleChangeCollapse(checkedSize, setCheckedSize, setCollapseSize)
          }
          className={styles.filter_product__button}
        >
          {collapseSize}
        </button>

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

        <section className={styles.filter_product__preco}>
          <h5 className={styles.filter_product__title}>Preços</h5>
          <div className={styles.filter_product__item}>
            <p className={styles.filter_product__preco__label}>Max: R$</p>
            <div className={styles.filter_product__preco__input}></div>
          </div>
          <div className={styles.filter_product__item}>
            <p className={styles.filter_product__preco__label}>Min: R$</p>
            <div className={styles.filter_product__preco__input}></div>
          </div>
        </section>

        <section className={styles.filter_product__preco}>
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
            <label
              htmlFor="notification"
              className={styles.filter_product__label}
            >
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
            <label
              htmlFor="notification"
              className={styles.filter_product__label}
            >
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
            <label
              htmlFor="notification"
              className={styles.filter_product__label}
            >
              Feminino
            </label>
          </div>
        </section>

        
        <h5 className={styles.filter_product__title}>Marcas</h5>
        <Collapse orientation="vertical" in={checkedProductBrand} collapsedSize={142}>
        {productBrands.map((opcao) => (
            <div className={styles.filter_product__item}>
            <input
                key={opcao.id}
                type="checkbox"
                className={styles.filter_product__input}
                name={opcao.name}
                onClick={() => handleChange(opcao)}
            />
            <label
                htmlFor={opcao.name}
                className={styles.filter_product__label}
            >
                {opcao.name}
            </label>
            </div>
        ))}
        </Collapse>
        <button
        onClick={() =>
            handleChangeCollapse(checkedProductBrand, setCheckedProductBrand, setCollapseProductBrand)
        }
        className={styles.filter_product__button}
        >
        {collapseProductBrand}
        </button>
        
      </div>
    </section>
  );
}

export default FilterProduct;
