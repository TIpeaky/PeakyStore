import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowsProp, GridToolbarQuickFilter, GridActionsCellItem } from '@mui/x-data-grid';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Modal from '@mui/material/Modal';
import http from "../../http"
import { useState, useEffect } from 'react';
import ProductDetails from './ProductDetails';
import { IProduct } from '../../interfaces/IProduct';

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

  const [productList, setProductList] = useState<GridRowsProp>([]);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>()

  //Modal
  const [openModal, setOpenModal] = React.useState(false);

  const [operation, setOperation] = useState("Sou uma operação");


  const handleOpen = (product: IProduct) => {
    setOpenModal(true)
    setSelectedProduct(product)

  };
  const handleClose = () => setOpenModal(false);

  //COLUNAS
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'NOME', width: 200 },
    { field: 'category', headerName: 'CATEGORIA', width: 130 },
    { field: 'section', headerName: 'SEÇÃO', width: 130 },
    { field: 'productBrand', headerName: 'MARCA', width: 130 },
    { field: 'color', headerName: 'COR', width: 130 },
    { field: 'size', headerName: 'TAMANHO', width: 100 },
    { field: 'stockQuantity', headerName: 'ESTOQUE', width: 100 },
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
          onClick={() => handleOpen(param.row)}
  
        />,
        <GridActionsCellItem
          icon={<EditOutlinedIcon />}
          label="Update"
          key="update"
          onClick={() => console.log(param.row)}
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
    <Box key={1} sx={{ height: 500, width: 1 }}>
      <DataGrid
        rows={productList} columns={columns}
        disableSelectionOnClick
        disableColumnSelector
        disableDensitySelector
        components={{ Toolbar: QuickSearchToolbar }}
        initialState={{
          pagination: {
            pageSize: 25,
          },
        }}
      />
    </Box>

    <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ProductDetails product={selectedProduct!} operation={operation}/>
      </Modal>
    </>
    
  )
}

export default ProductCrud