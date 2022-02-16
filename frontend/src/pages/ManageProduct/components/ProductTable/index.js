/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
// /* eslint-disable object-curly-newline */
import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useHistory } from 'react-router-dom';
import DeleteSingleProduct from '../DataDrid/DeleteSingleProduct';
import EditProduct from '../DataDrid/EditProduct';
import PaginationTable from '../DataDrid/PaginationTable';

export default function ProductTable(props) {
  const { productData, deleteSingleProduct, count, page, limit, onChange } = props;
  const columns = [
    {
      field: 'id',
      headerName: 'STT',
      width: 70,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'productName',
      headerName: 'Tên Sản Phẩm',
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'productCode',
      headerName: 'Mã Sản phẩm',
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'productType',
      headerName: 'Loại Sản phẩm',
      flex: 0.5,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'productCategory',
      headerName: 'Danh mục Sản Phẩm',
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'productCost',
      headerName: 'Giá Sản Phẩm',
      type: 'number',
      sortable: false,
      disableColumnMenu: true,
      align: 'left',
      flex: 0.5,
    },
    {
      field: 'description',
      headerName: 'Thao Tác',
      sortable: false,
      flex: 1.5,
      renderCell: (params) => (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <Box>
            <EditProduct paramEdit={params} productData={productData} />
          </Box>
          <DeleteSingleProduct
            productData={productData}
            params={params}
            deleteSingleProduct={deleteSingleProduct}
          />
        </Box>
      ),
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true,
    },
  ];
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={productData.map((value, index) => ({
          id: limit * (page - 1) + index + 1,
          productName: value.productName,
          productCode: value.productCode,
          productType: value.productType,
          productCategory: value.productCategory,
          productCost: value.productCost,
        }))}
        columns={columns}
        components={{
          Pagination: PaginationTable,
        }}
        componentsProps={{
          pagination: { countTable: count, pageTable: page, onChangeTable: onChange },
        }}
        // pagination
        pageSize={6}
        rowsPerPageOptions={[6, 12]}
        disableSelectionOnClick
      />
    </div>
  );
}
