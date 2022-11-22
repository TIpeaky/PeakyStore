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


interface productDetailsInterface {
    product: IProduct,
    operation: string
    closeModal(): void;
}

const ProductDetails = ({ product, operation, closeModal }: productDetailsInterface) => {
    
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
        
    }


    return (
        <Box component="form" noValidate autoComplete="off" className={styles.container}>
            {operation === "read" && (<h2>Modo de leitura</h2>)}
            {operation === "update" && (<h2>Atualizar produto</h2>)}

            <TextField value={productForm.id} id="id" label="ID" className={styles.input} variant="outlined" fullWidth
                disabled />

            <TextField value={productForm.sku} id="sku" label="SKU" className={styles.input} variant="outlined" fullWidth
                disabled />

            <TextField value={productForm.name} id="name" label="Nome" className={styles.input} variant="outlined" fullWidth
                {...(operation === "read" ? { disabled: true } : {})} 
                name="name" onChange={handleChange}/>

            <TextField value={productForm.description} id="description" label="Descrição" className={styles.input}
                multiline maxRows={4} fullWidth {...(operation === "read" ? { disabled: true } : {})} 
                name="description"  onChange={handleChange}/>

            <FormControl className={styles.input} fullWidth>
                <InputLabel htmlFor="purchasePrice">Preço de compra</InputLabel>
                <OutlinedInput
                    id="purchasePrice"
                    value={productForm.purchasePrice.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
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
                    value={productForm.salePrice.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                    startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    label="Preço de venda"
                    {...(operation === "read" ? { disabled: true } : {})}
                    name="salePrice" onChange={handleChange}
                />
            </FormControl>

            <TextField value={productForm.stockQuantity} id="stockQuantity" label="Estoque" className={styles.input} variant="outlined" fullWidth
                {...(operation === "read" ? { disabled: true } : {})} 
                name="stockQuantity" onChange={handleChange}/>

            <TextField value={productForm.productBrand} id="productBrand" label="Marca" className={styles.input} variant="outlined" fullWidth
                {...(operation === "read" ? { disabled: true } : {})} 
                name="productBrand" onChange={handleChange}/>

            <TextField value={productForm.color} id="color" label="Cor" className={styles.input} variant="outlined" fullWidth
                {...(operation === "read" ? { disabled: true } : {})} 
                name="color" onChange={handleChange}/>

            <TextField value={productForm.size} id="size" label="Tamanho" className={styles.input} variant="outlined" fullWidth
                {...(operation === "read" ? { disabled: true } : {})} 
                name="size" onChange={handleChange}/>

            <TextField value={productForm.category} id="category" label="Categoria" className={styles.input} variant="outlined" fullWidth
                {...(operation === "read" ? { disabled: true } : {})} />

            <TextField value={productForm.section} id="section" label="Seção" className={styles.input} variant="outlined" fullWidth
                {...(operation === "read" ? { disabled: true } : {})} 
                name="section" onChange={handleChange}/>

            <TextField value={productForm.lastUpdateDate} id="lastUpdateDate" label="Última atualização" className={styles.input} variant="outlined" fullWidth
                disabled />

            {operation === "update" && (
                <Button onClick={updateProduct} variant="contained">Salvar alterações</Button>
            )}
            <Button onClick={closeModal} variant="outlined">Voltar</Button>

        </Box>
    )

}

export default ProductDetails
