import { IProduct } from '../../interfaces/IProduct'
import styles from './ProductDetails.module.scss'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';



interface productDetailsInterface {
    product: IProduct,
    operation: string
}

const ProductDetails = ({ product, operation }: productDetailsInterface) => {
    return (
        <Box component="form" noValidate autoComplete="off" className={styles.container}>
            <h2>{operation}</h2>
            <TextField value={product.id} id="id" label="Nome" className={styles.input} variant="outlined" fullWidth />
            <TextField value={product.sku} id="sku" label="SKU" className={styles.input} variant="outlined" fullWidth />
            <TextField value={product.name} id="name" label="Nome" className={styles.input} variant="outlined" fullWidth />
            <TextField value={product.description} id="description" label="Descrição" className={styles.input}
                multiline maxRows={4} fullWidth/>
            <TextField value={product.purchasePrice} id="purchasePrice" label="Preço de compra" className={styles.input} variant="outlined" fullWidth />
            <TextField value={product.salePrice} id="salePrice" label="Preço de venda" className={styles.input} variant="outlined" fullWidth />
            <TextField value={product.stockQuantity} id="stockQuantity" label="Estoque" className={styles.input} variant="outlined" fullWidth />
            <TextField value={product.productBrand} id="productBrand" label="Marca" className={styles.input} variant="outlined" fullWidth />
            <TextField value={product.color} id="color" label="Cor" className={styles.input} variant="outlined" fullWidth />
            <TextField value={product.size} id="size" label="Tamanho" className={styles.input} variant="outlined" fullWidth />
            <TextField value={product.category} id="category" label="Categoria" className={styles.input} variant="outlined" fullWidth />
            <TextField value={product.section} id="section" label="Seção" className={styles.input} variant="outlined" fullWidth />
            <TextField value={product.lastUpdateDate} id="lastUpdateDate" label="Última atualização" className={styles.input} variant="outlined" fullWidth />
        </Box>
    )

}

export default ProductDetails




// id, sku, name, description,
//     purchasePrice, salePrice, stockQuantity, productBrand,
//     , color, size, category, section, operation
//lastUpdateDate