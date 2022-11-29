import { IProduct } from '../../interfaces/IProduct'
import styles from './ProductDetails.module.scss'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import http from "../../http"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
//import { NumericFormat } from 'react-number-format';

interface productDetailsInterface {
    product: IProduct,
    operation: string
    closeModal(): void;
    updateProductList(product: IProduct, operation: string): void
}

const ProductDetails = ({ product, operation, closeModal, updateProductList }: productDetailsInterface) => {

    type OnChangeEvent = React.ChangeEvent<HTMLInputElement>
    const [productForm, setProductForm] = useState<IProduct>(product)

    const handleChange = (e: OnChangeEvent) => {
        const { name, value } = e.target;
        setProductForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleChangeSelect = (e: SelectChangeEvent) => {
        const { name, value } = e.target;
        setProductForm(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(productForm)
    };

    const updateProduct = () => {
        http.put('product/' + productForm.id, productForm)
            .then((response) => {
                updateProductList(response.data, "updateItem")
                closeModal()
            })
            .catch(error => {
                if (error?.response?.data?.message) {
                    alert(error.response.data.message)
                } else {
                    alert('Aconteceu um erro inesperado ao atualizar o produto! Entre em contato com o suporte!')
                    console.log(error)
                }

            })
    }

    const saveProduct = () => {
        http.post('product', productForm)
            .then((response) => {
                updateProductList(response.data, "addItem")
                closeModal()
            })
            .catch(error => {
                if (error?.response?.data?.message) {
                    alert(error.response.data.message)
                } else {
                    alert('Aconteceu um erro inesperado ao cadastrar o produto! Entre em contato com o suporte!')
                    console.log(error)
                }

            })
    }

    return (
        <Box component="form" noValidate autoComplete="off" className={styles.container}>
            {operation === "read" && (<h2>Modo de leitura</h2>)}
            {operation === "update" && (<h2>Atualizar produto</h2>)}
            {operation === "create" && (<h2>Novo produto</h2>)}

            <CloseIcon className={styles.close_icon} onClick={closeModal} />

            <Grid container spacing={2}>
                {operation !== "create" && (
                    <>
                        <TextField value={productForm.id} id="id" label="ID" className={styles.input} variant="outlined" fullWidth
                            InputProps={{ readOnly: true }} />

                        <TextField value={productForm.sku} id="sku" label="SKU" className={styles.input} variant="outlined" fullWidth
                            InputProps={{ readOnly: true }} />
                    </>
                )}

                <TextField value={operation !== "create" ? productForm.name : undefined} id="name"
                    label="Nome" className={styles.input} variant="outlined" fullWidth
                    {...(operation === "read" ? { inputProps: { readOnly: true } } : {})}
                    name="name" onChange={handleChange} />

                <TextField value={operation !== "create" ? productForm.description : undefined}
                    id="description" label="Descrição" className={styles.input}
                    multiline maxRows={10} fullWidth {...(operation === "read" ? { inputProps: { readOnly: true } } : {})}
                    name="description" onChange={handleChange} />


                {/* <NumericFormat value={operation !== "create" ? productForm.purchasePrice : undefined}
                customInput={TextField} id="purchasePrice" label="Preço de compra" className={styles.input}
                fullWidth {...(operation === "read" ? { inputProps: { readOnly: true } } : {})}
                name="purchasePrice" prefix="R$ " decimalSeparator="," thousandSeparator="."
                allowNegative={false} decimalScale={2}
            />

            <NumericFormat value={operation !== "create" ? productForm.salePrice : undefined}
                customInput={TextField} id="salePrice" label="Preço de venda" className={styles.input}
                fullWidth {...(operation === "read" ? { inputProps: { readOnly: true } } : {})}
                name="salePrice"
            /> */}


                <TextField value={operation !== "create" ? productForm.purchasePrice : undefined}
                    id="purchasePrice" label="Preço de compra" className={styles.input}
                    fullWidth {...(operation === "read" ? { inputProps: { readOnly: true } } : {})}
                    name="purchasePrice" onChange={handleChange} />

                <TextField value={operation !== "create" ? productForm.salePrice : undefined}
                    id="salePrice" label="Preço de venda" className={styles.input} variant="outlined" fullWidth
                    {...(operation === "read" ? { inputProps: { readOnly: true } } : {})}
                    type="number"
                    name="salePrice" onChange={handleChange} />



                <TextField value={operation !== "create" ? productForm.stockQuantity : undefined}
                    id="stockQuantity" label="Estoque" className={styles.input} variant="outlined" fullWidth
                    {...(operation === "read" ? { inputProps: { readOnly: true } } : {})}
                    type="number"
                    name="stockQuantity" onChange={handleChange} />

                <FormControl fullWidth>
                    <InputLabel id="product-brand-label">Marca</InputLabel>
                    <Select
                        className={styles.input}
                        labelId="product-brand-label"
                        id="product-brand"
                        name="productBrand"
                        value={productForm && productForm.productBrand ? productForm.productBrand : ''}
                        label="Marca"
                        onChange={handleChangeSelect}
                        {...(operation === "read" ? { inputProps: { readOnly: true } } : {})}
                    >
                        <MenuItem value={"NIKE"}>Nike</MenuItem>
                        <MenuItem value={"ADIDAS"}>Adidas</MenuItem>
                        <MenuItem value={"PUMA"}>Puma</MenuItem>
                        <MenuItem value={"POLO_WEAR"}>Polo Wear</MenuItem>
                        <MenuItem value={"FILA"}>Fila</MenuItem>
                        <MenuItem value={"LACOSTE"}>Lacoste</MenuItem>
                        <MenuItem value={"GUCCI"}>Gucci</MenuItem>
                        <MenuItem value={"LUPA"}>Lupo</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="product-color-label">Cor</InputLabel>
                    <Select
                        className={styles.input}
                        labelId="product-color-label"
                        id="product-color"
                        name="color"
                        value={productForm && productForm.color ? productForm.color : ''}
                        label="COR"
                        onChange={handleChangeSelect}
                        {...(operation === "read" ? { inputProps: { readOnly: true } } : {})}
                    >
                        <MenuItem value={"BLACK"}>Preto</MenuItem>
                        <MenuItem value={"WHITE"}>Branco</MenuItem>
                        <MenuItem value={"GREY"}>Cinza</MenuItem>
                        <MenuItem value={"BLUE"}>Azul</MenuItem>
                        <MenuItem value={"GREEN"}>Verde</MenuItem>
                        <MenuItem value={"RED"}>Vermelho</MenuItem>
                        <MenuItem value={"YELLOW"}>Amarelo</MenuItem>
                        <MenuItem value={"PURPLE"}>Roxo</MenuItem>
                        <MenuItem value={"PINK"}>Rosa</MenuItem>
                        <MenuItem value={"ORANGE"}>Laranja</MenuItem>
                        <MenuItem value={"BROWN"}>Marrom</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="product-size-label">tamanho</InputLabel>
                    <Select
                        className={styles.input}
                        labelId="product-size-label"
                        id="product-size"
                        name="size"
                        value={productForm && productForm.size ? productForm.size : ''}
                        label="TAMANHO"
                        onChange={handleChangeSelect}
                        {...(operation === "read" ? { inputProps: { readOnly: true } } : {})}
                    >
                        <MenuItem value={"XS"}>XP</MenuItem>
                        <MenuItem value={"S"}>P</MenuItem>
                        <MenuItem value={"M"}>M</MenuItem>
                        <MenuItem value={"L"}>G</MenuItem>
                        <MenuItem value={"XL"}>XG</MenuItem>
                        <MenuItem value={"XXL"}>XXG</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="product-category-label">Categoria</InputLabel>
                    <Select
                        className={styles.input}
                        labelId="product-category-label"
                        id="product-category"
                        name="category"
                        value={productForm && productForm.category ? productForm.category : ''}
                        label="CATEGORIA"
                        onChange={handleChangeSelect}
                        {...(operation === "read" ? { inputProps: { readOnly: true } } : {})}
                    >
                        <MenuItem value={"SHIRT"}>Camisa</MenuItem>
                        <MenuItem value={"TSHIRT"}>Camiseta</MenuItem>
                        <MenuItem value={"PANTS"}>Calça</MenuItem>
                        <MenuItem value={"JEANS"}>Jeans</MenuItem>
                        <MenuItem value={"SHORTS"}>Bermuda</MenuItem>
                        <MenuItem value={"BLOUSE"}>Blusa</MenuItem>
                        <MenuItem value={"JACKET"}>Jaqueta</MenuItem>
                        <MenuItem value={"COAT"}>Casaco</MenuItem>
                        <MenuItem value={"SWEATER"}>Suéter</MenuItem>
                        <MenuItem value={"PAJAMAS"}>Pijama</MenuItem>
                        <MenuItem value={"SKIRT"}>Saia</MenuItem>
                        <MenuItem value={"DRESS"}>Vestido</MenuItem>
                        <MenuItem value={"BATHROBE"}>Roupão</MenuItem>
                        <MenuItem value={"NIGHTGOWN"}>Camisola</MenuItem>
                        <MenuItem value={"PANTS_HOSE"}>Meia-calça</MenuItem>
                        <MenuItem value={"UNDERWEAR"}>Roupa Íntima</MenuItem>
                        <MenuItem value={"SWINSUITS"}>Maiô</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="product-section-label">Seção</InputLabel>
                    <Select
                        className={styles.input}
                        labelId="product-section-label"
                        id="product-section"
                        name="section"
                        value={productForm && productForm.section ? productForm.section : ''}
                        label="SEÇÃO"
                        onChange={handleChangeSelect}
                        {...(operation === "read" ? { inputProps: { readOnly: true } } : {})}
                    >
                        <MenuItem value={"MALE"}>Masculina</MenuItem>
                        <MenuItem value={"FEMALE"}>Feminina</MenuItem>
                        <MenuItem value={"UNISEX"}>Unisex</MenuItem>
                        <MenuItem value={"MALE_CHILDREN"}>Infantil masculina</MenuItem>
                        <MenuItem value={"FEMALE_CHILDREN"}>Infantil feminina</MenuItem>
                        <MenuItem value={"UNISEX_CHILDREN"}>Infantil unisex</MenuItem>
                    </Select>
                </FormControl>

                {operation !== "create" && (
                    <TextField value={productForm.lastUpdateDate} id="lastUpdateDate"
                        label="Última atualização" className={styles.input} variant="outlined" fullWidth
                        disabled />
                )}


                {operation === "update" && (
                    <Button className={styles.btn} onClick={updateProduct} variant="contained">
                        Salvar alterações
                    </Button>
                )}
                {operation === "create" && (
                    <Button className={styles.btn} onClick={saveProduct} variant="contained">
                        Adicionar produto
                    </Button>
                )}
                <Button className={styles.btn_voltar} onClick={closeModal} variant="outlined" sx={{ marginLeft: 1 }}>
                    Voltar
                </Button>

            </Grid>



        </Box>
    )

}

export default ProductDetails
