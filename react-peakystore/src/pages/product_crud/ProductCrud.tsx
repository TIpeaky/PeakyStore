import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowsProp, GridToolbarQuickFilter, GridActionsCellItem } from '@mui/x-data-grid';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import http from "../../http"
import { useState, useEffect } from 'react';
//import { IProduct } from '../../interfaces/IProduct';






const ProductCrud = () => {

  const [productList, setProductList] = useState<GridRowsProp>([]);

  useEffect(() => {
    http.get('product')
      .then(response => {
        setProductList(response.data)
      })
      .catch(erro => {
        console.log(erro)
      })
  }, [])


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
      renderCell: () => [
        <GridActionsCellItem
          icon={<RemoveRedEyeOutlinedIcon />}
          label="Read"
          key="read"
        //onClick={() => alert("Leitura")}
        />,
        <GridActionsCellItem
          icon={<EditOutlinedIcon />}
          label="Update"
          key="update"
        //onClick={() => alert("Atualização")}
        />,
        <GridActionsCellItem
          icon={<DeleteOutlineOutlinedIcon />}
          label="Delete"
          key="delete"
        //onClick={() => alert("Exclusão")}
        />
      ]
    }
  ];

  return (
    <Box key={1} sx={{ height: 500, width: 1 }}>
      <DataGrid
        rows={productList} columns={columns}
        disableSelectionOnClick
        disableColumnFilter
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
  )
}

export default ProductCrud






