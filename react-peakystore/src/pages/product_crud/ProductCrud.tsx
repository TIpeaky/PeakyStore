import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowsProp, GridToolbarQuickFilter, GridActionsCellItem } from '@mui/x-data-grid';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

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
const rows: GridRowsProp = [
  { id: 1, name: 'Camiseta branca', stock: '100', category: 'Camiseta', section: 'Masculina', brand: "Nike" },

  { id: 2, name: 'Camiseta preta', stock: '200', category: 'Camiseta', section: 'Feminina', brand: 'Adidas' },

  { id: 3, name: 'Pijama listrado', stock: '350', category: 'Pijama', section: 'Infantil Unisex', brand: 'Zara' },

  { id: 4, name: 'Vestido de casamento', stock: '240', category: 'Vestido', section: 'Feminina', brand: 'Louis Vuitton' },

  { id: 5, name: 'Bermuda de praia', stock: '80', category: 'Bermuda', section: 'Masculina', brand: 'Nike' },
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'name', headerName: 'NOME', width: 200 },
  { field: 'stock', headerName: 'ESTOQUE', width: 100 },
  { field: 'category', headerName: 'CATEGORIA', width: 150 },
  { field: 'section', headerName: 'SEÇÃO', width: 150 },
  { field: 'brand', headerName: 'MARCA', width: 150 },
  {
    field: 'actions',
    type: 'actions',
    headerName: 'AÇÕES',
    width: 80,
    renderCell: () => [
      <GridActionsCellItem
        icon={<RemoveRedEyeOutlinedIcon/>}
        label="Read"
        //onClick={() => alert("oi")}
      />,
      <GridActionsCellItem
        icon={<EditOutlinedIcon/>}
        label="Update"
        //onClick={() => alert("oi")}
      />,
      <GridActionsCellItem
        icon={<DeleteOutlineOutlinedIcon/>}
        label="Delete"
        //onClick={() => alert("oi")}
      />
    ]
  }
];

const ProductCrud = () => {
  return (
    <Box sx={{ height: 400, width: 1 }}>
      <DataGrid
        rows={rows} columns={columns}
        disableSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        components={{ Toolbar: QuickSearchToolbar }}
      />
    </Box>
  )
}

export default ProductCrud






