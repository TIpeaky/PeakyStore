import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbarQuickFilter, GridActionsCellItem } from '@mui/x-data-grid';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Modal from '@mui/material/Modal';
import http from "../../http"
import { useState, useEffect } from 'react';
import ProductDetails from './ProductDetails';
import { IProduct } from '../../interfaces/IProduct';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from './ProductCrud.module.scss'

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter />
    </Box>
  );
}


const ProductCrud = () => {

  const [productList, setProductList] = useState<IProduct[]>([]);

  const [selectedProduct, setSelectedProduct] = useState<IProduct>()

  //Modal
  const [openModal, setOpenModal] = React.useState(false);

  const [operation, setOperation] = useState("read");

  useEffect(() => {
    setProductList(productList)
  }, [productList])

  const updateProductList = (newProduct: IProduct): void => {
    let updatedList = [...productList]
    let updated: boolean = false
    productList.forEach((product, i) => {
      if (product.id === newProduct.id) {
        updatedList[i] = newProduct
        setProductList(updatedList)
        updated = true
      }
    })
    if (!updated) {
      updatedList.push(newProduct)
      setProductList(updatedList)
    }

  }



  const handleOpen = (operation: string, product?: IProduct): void => {
    setOperation(operation)
    setSelectedProduct(product)
    setOpenModal(true)
  };

  const closeModal = (): void => { setOpenModal(false) }

  //COLUNAS
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'NOME', width: 200 },
    { field: 'category', headerName: 'CATEGORIA', width: 130 },
    { field: 'section', headerName: 'SEÇÃO', width: 130 },
    { field: 'productBrand', headerName: 'MARCA', width: 130 },
    { field: 'color', headerName: 'COR', width: 130 },
    { field: 'size', headerName: 'TAMANHO', width: 100 },
    { field: 'stockQuantity', headerName: 'ESTOQUE', width: 130 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'AÇÕES',
      width: 80,
      renderCell: (param) => [
        <GridActionsCellItem
          icon={<RemoveRedEyeOutlinedIcon />}
          label="Read"
          key="read"
          onClick={() => handleOpen("read", param.row)}

        />,
        <GridActionsCellItem
          icon={<EditOutlinedIcon />}
          label="Update"
          key="update"
          onClick={() => handleOpen("update", param.row)}
        />,
        <GridActionsCellItem
          icon={<DeleteOutlineOutlinedIcon />}
          label="Delete"
          key="delete"
          onClick={() => console.log(param.row)}
        />
      ]
    }
  ];


  //LINHAS
  useEffect(() => {
    http.get('product')
      .then(response => {
        setProductList(response.data)
      })
      .catch(erro => {
        console.log(erro)
      })
  }, [])

  return (
    <>
      <Box key={1} sx={{ height: 500, padding: 2 }}>
        <h1>Produtos</h1>
        <Button className={styles.btn_save_product} size="small" variant="contained" startIcon={<AddShoppingCartIcon />}
          onClick={() => handleOpen("create")}>
          Adicionar novo produto
        </Button>
        <DataGrid
          rows={productList} columns={columns} disableSelectionOnClick disableColumnSelector disableDensitySelector
          components={{ Toolbar: QuickSearchToolbar }}
          initialState={{ pagination: { pageSize: 25, } }} />
      </Box>

      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ProductDetails product={selectedProduct!} operation={operation} closeModal={closeModal} updateProductList={updateProductList} />
      </Modal>
    </>

  )
}

export default ProductCrud