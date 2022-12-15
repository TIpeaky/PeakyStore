import React from 'react'
import { useState, useEffect } from 'react'
import { IProduct } from '../../interfaces/IProduct'
import styles from './DetalhesProduto.module.scss'
import imgprincipal from './Rectangle.png'
import iconPix from './pix.png'
import iconCards from './cartoes.png'
import InputMask from "react-input-mask"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';





const DetalhesProduto = () => {
    const [produtos, setProdutos] = useState<IProduct[]>([{
        id: "123",
        sku: "ABC123",
        name: "Camisa manga curta branca",
        purchasePrice: "R$30.00",
        salePrice: "R$50.00",
        stockQuantity: "20",
        productBrand: "Adidas",
        lastUpdateDate: "01/12/2022",
        color: "BLUE",
        size: "M",
        category: "masculina",
        section: "a",
        description: "A Camisa manga curta PeakyStore é produzida em mix de fibras, sendo muito macia e confortável. Com modelagem regular, a peça possui mangas curtas e decote redondo. Aposte! Combine com uma bermuda de sarja e tênis para um visual casual."



    }, {
        id: "456",
        sku: "ABC456",
        name: "Camisa manga curta preta",
        purchasePrice: "R$30.00",
        salePrice: "R$50.00",
        stockQuantity: "20",
        productBrand: "Adidas",
        lastUpdateDate: "01/12/2022",
        color: "BLACK",
        size: "S",
        category: "masculina",
        section: "b",
        description: "A Camisa manga curta PeakyStore é produzida em mix de fibras, sendo muito macia e confortável. Com modelagem regular, a peça possui mangas curtas e decote redondo. Aposte! Combine com uma bermuda de sarja e tênis para um visual casual."
    },
    {
        id: "678",
        sku: "ABC789",
        name: "Camisa manga curta verde",
        purchasePrice: "R$30.00",
        salePrice: "R$50.00",
        stockQuantity: "20",
        productBrand: "Adidas",
        lastUpdateDate: "01/12/2022",
        color: "GREEN",
        size: "L",
        category: "masculina",
        section: "c",
        description: "A Camisa manga curta PeakyStore é produzida em mix de fibras, sendo muito macia e confortável. Com modelagem regular, a peça possui mangas curtas e decote redondo. Aposte! Combine com uma bermuda de sarja e tênis para um visual casual."
    }])

    /*BLUE("BL", "Blue"),
GREEN("GR", "Green"),
YELLOW("YE", "Yellow"),
PURPLE("PU", "Purple"),
PINK("PI", "Pink"),
RED("RE", "Red"),
ORANGE("OR", "Orange"),
BROWN("BR", "Brown"),
GREY("GR", "Grey"),
WHITE("WH", "White"),
BLACK("BA", "Black"); */

    const [colorList, setColorList] = useState<String[]>([])
    const addColors = () => {
        let listaTemporaria: String[] = []

        produtos.forEach((produto) => {
            switch (produto.color) {
                case "BLUE": listaTemporaria.push("#1E90FF"); break;

            }

        })
        setColorList(listaTemporaria)
    }

    useEffect(() => { addColors() }, [produtos, addColors])

    const [sizeList, setSizeList] = useState<String[]>([])
    const addSize = () => {
        let listaTemporaria: String[] = []

        produtos.forEach((produto) => {
            switch (produto.size) {
                case "XS": listaTemporaria.push("PP"); break;
                case "S": listaTemporaria.push("P"); break;
                case "M": listaTemporaria.push("M"); break;
                case "L": listaTemporaria.push("G"); break;
                case "XL": listaTemporaria.push("GG"); break;
                case "XXL": listaTemporaria.push("XG"); break;
            }

        })
        setSizeList(listaTemporaria)
    }

    useEffect(() => { addSize() }, [produtos, addSize])




    return (
        <div className={styles.container}>
            <div className={styles.carrousel}>
                <h1>Carrousel</h1>
                

            </div>

            <div className={styles.right_column}>

                <div className={styles.principal}>
                    <div className={styles.imagem_principal}>
                        < img src={imgprincipal} alt="imagem_do_produto" />
                    </div>

                    <div className={styles.info_produto}>
                        <h1> {produtos[0].name}</h1>
                        <div> <span className={styles.preco}> {produtos[0].salePrice} </span>
                            < img className={styles.icon_pix} src={iconPix} alt="icone_pix" />
                            <span className={styles.divisor}> | </span>
                            < img className={styles.icon_cards} src={iconCards} alt="icone_card" />
                        </div>

                        <div className={styles.container_cor}>
                            <h2>Cor</h2>
                            {colorList.map((cor, index) => (
                                <span style={{ backgroundColor: `${cor}` }} className={styles.color} key={index}>  </span>
                            ))}
                        </div>
                        <div className={styles.container_size}>
                            <h2>Tamanho</h2>
                            {sizeList.map((size, index) => (
                                <span className={styles.size} key={index}>{size}</span>
                            ))}
                        </div>
                        <div className={styles.container_shipping}>
                            <h2 className={styles.shipping} >Calcular Frete</h2>
                            <InputMask className={styles.input_shipping} mask="99999-999" />
                            <button className={styles.button_shipping} >OK</button>
                            <a className={styles.link_shipping} href='https://buscacepinter.correios.com.br/app/endereco/index.php' target="_blank" >Não sabe seu cep?</a>
                        </div>
                        <div className={styles.container_finish}>
                            <button className={styles.btn_cart}><ShoppingCartIcon className={styles.icon_cart} /><AddIcon className={styles.icon_cart} /></button>
                            <button className={styles.btn_finish}>Finalizar a Compra</button>
                        </div>



                    </div>

                </div>
                <div className={styles.container_description} >
                    <h1>Descrição</h1>
                    <p>{produtos[0].description}</p>
                    
                    <h3>Características</h3>
                    <ul>
                        <li>Marca: {produtos[0].productBrand}</li>
                        <li>Categoria: {produtos[0].category}</li>
                                
                    
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default DetalhesProduto