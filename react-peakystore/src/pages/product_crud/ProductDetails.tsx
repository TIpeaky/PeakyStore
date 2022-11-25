import { IProduct } from '../../interfaces/IProduct'
import styles from './ProductDetails.module.scss'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import http from "../../http"

interface productDetailsInterface {
    product: IProduct,
    operation: string
    closeModal(): void;
    updateProductList(product: IProduct): void
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
        console.log(productForm)
    };

    const updateProduct = () => {
        http.put('product/' + productForm.id, productForm)
            .then((response) => {
                updateProductList(response.data)
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
                updateProductList(response.data)
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

            {operation !== "create" && (
                <div>
                    <TextField value={productForm.id} id="id" label="ID" className={styles.input} variant="outlined" fullWidth
                        disabled />

                    <TextField value={productForm.sku} id="sku" label="SKU" className={styles.input} variant="outlined" fullWidth
                        disabled />
                </div>
            )}

            <TextField value={operation !== "create" ? productForm.name : undefined} id="name" label="Nome" className={styles.input} variant="outlined" fullWidth
                {...(operation === "read" ? { disabled: true } : {})}
                name="name" onChange={handleChange} />

            <TextField value={operation !== "create" ? productForm.description : undefined} id="description" label="Descrição" className={styles.input}
                multiline maxRows={4} fullWidth {...(operation === "read" ? { disabled: true } : {})}
                name="description" onChange={handleChange} />

            <FormControl className={styles.input} fullWidth>
                <InputLabel htmlFor="purchasePrice">Preço de compra</InputLabel>
                <OutlinedInput
                    id="purchasePrice"
                    value={operation !== "create" ? productForm.purchasePrice.toLocaleString('pt-br', { minimumFractionDigits: 2 }) : undefined}
                    startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    label="Preço de compra"
                    {...(operation === "read" ? { disabled: true } : {})}
                    name="purchasePrice" onChange={handleChange}
                />
            </FormControl>

            <FormControl className={styles.input} fullWidth>
                <InputLabel htmlFor="salePrice">Preço de venda</InputLabel>
                <OutlinedInput
                    id="salePrice"
                    value={operation !== "create" ? productForm.salePrice.toLocaleString('pt-br', { minimumFractionDigits: 2 }) : undefined}
                    startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    label="Preço de venda"
                    {...(operation === "read" ? { disabled: true } : {})}
                    name="salePrice" onChange={handleChange}
                />
            </FormControl>

            <TextField value={operation !== "create" ? productForm.stockQuantity : undefined} id="stockQuantity" label="Estoque" className={styles.input} variant="outlined" fullWidth
                {...(operation === "read" ? { disabled: true } : {})}
                name="stockQuantity" onChange={handleChange} />

            <TextField value={operation !== "create" ? productForm.productBrand : undefined} id="productBrand" label="Marca" className={styles.input} variant="outlined" fullWidth
                {...(operation === "read" ? { disabled: true } : {})}
                name="productBrand" onChange={handleChange} />

            <TextField value={operation !== "create" ? productForm.color : undefined} id="color" label="Cor" className={styles.input} variant="outlined" fullWidth
                {...(operation === "read" ? { disabled: true } : {})}
                name="color" onChange={handleChange} />

            <TextField value={operation !== "create" ? productForm.size : undefined} id="size" label="Tamanho" className={styles.input} variant="outlined" fullWidth
                {...(operation === "read" ? { disabled: true } : {})}
                name="size" onChange={handleChange} />

            <TextField value={operation !== "create" ? productForm.category : undefined} id="category" label="Categoria" className={styles.input} variant="outlined" fullWidth
                {...(operation === "read" ? { disabled: true } : {})} name="category" onChange={handleChange} />

            <TextField value={operation !== "create" ? productForm.section : undefined} id="section" label="Seção" className={styles.input} variant="outlined" fullWidth
                {...(operation === "read" ? { disabled: true } : {})}
                name="section" onChange={handleChange} />

            {operation !== "create" && (
                <TextField value={productForm.lastUpdateDate} id="lastUpdateDate" label="Última atualização" className={styles.input} variant="outlined" fullWidth
                    disabled />
            )}


            {operation === "update" && (
                <Button onClick={updateProduct} variant="contained">
                    Salvar alterações
                </Button>
            )}
            {operation === "create" && (
                <Button onClick={saveProduct} variant="contained">
                    Adicionar produto
                </Button>
            )}
            <Button onClick={closeModal} variant="outlined" sx={{ marginLeft: 1 }}>
                Voltar
            </Button>
        </Box>
    )

}

export default ProductDetails
