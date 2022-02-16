/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-named-default */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
import { makeStyles } from '@material-ui/core/styles';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Box, Button, Dialog, DialogContent, IconButton, Paper } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';
import useLoading from '../../../hooks/useLoading';
import AddProductForm from '../components/AddProductForm/ManageForms/AddProductForm';
import ProductTable from '../components/ProductTable';

const useStyles = makeStyles({
  root: {
    position: 'absolute !important',
    top: '8px',
    right: '20px',
    '&:hover': {
      backgroundColor: '#e57373 !important',
    },
    backgroundColor: '#f5f5f5 !important',
    zIndex: 10,
    align: 'right',
  },
  btn: {
    display: 'flex !important',
    margin: '0 16px 16px !important',
    marginLeft: 'auto !important',
  },
});

export default function ManageForm(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [productData, setProductData] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 6,
    total: 6,
  });
  const [filter, setFilter] = useState({ page: 1, limit: 6 });
  const [showLoading, hideLoading] = useLoading();

  const { categoryProduct, typeProduct } = props;

  // Call Api
  const getProductApi = async () => {
    try {
      // setLoading(true);
      showLoading();
      const { product, total, limit, page } = await productApi.getAll(filter);
      if (product) {
        setProductData(product);
        setPagination({ total, limit, page });
      }
      // setLoading(false);
      hideLoading();
    } catch (e) {
      // setLoading(false);
      showLoading();
    }
  };

  useEffect(() => {
    getProductApi();
  }, [filter]);

  // Handle change page
  const handlePageChange = (e, page) => {
    setFilter((prev) => ({
      ...prev,
      page,
    }));
  };

  // Handle Submit form
  const handleSubmit = async (values, fileChange) => {
    // Post form to backend
    let formValues = new FormData();
    formValues.append('productName', values.productName);
    formValues.append('productType', values.productType);
    formValues.append('productCategory', values.productCategory);
    formValues.append('productCost', values.productCost);
    formValues.append('productDescription', values.productDescription);
    formValues.append('mainImage', fileChange);
    if (values && fileChange?.name) {
      await productApi.create(formValues);
    } else {
      return;
    }
    await getProductApi();
    setOpen(false);
  };
  // Handle open and close form
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
    // setMessage(false);
  };
  // Delete product
  const handleDelete = async (id) => {
    await productApi.remove(id);
    getProductApi();
  };
  return (
    <Box>
      <Paper sx={{ pt: 2 }}>
        <Button variant="outlined" className={classes.btn} onClick={handleClickOpen}>
          ADD NEW PRODUCT
        </Button>
        <Dialog open={open} fullWidth>
          <DialogContent>
            <IconButton className={classes.root} onClick={handleClose}>
              <CancelOutlinedIcon />
            </IconButton>
            <AddProductForm
              onSubmit={handleSubmit}
              fileImg={handleSubmit}
              typeProduct={typeProduct}
              categoryProduct={categoryProduct}
            />
          </DialogContent>
        </Dialog>
        <ProductTable
          productData={productData}
          count={Math.ceil(pagination.total / pagination.limit)}
          page={pagination.page}
          limit={pagination.limit}
          onChange={handlePageChange}
          deleteSingleProduct={handleDelete}
        />
      </Paper>
    </Box>
  );
}
