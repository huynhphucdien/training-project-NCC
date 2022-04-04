/* eslint-disable radix */
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
import queryString from 'query-string';
// import { makeStyles } from '@mui/styles';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
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
  const { categoryProduct, typeProduct } = props;
  // UseStates
  const [showLoading, hideLoading] = useLoading();
  const [open, setOpen] = useState(false);
  const [productData, setProductData] = useState([]);
  // Queries
  const history = useHistory();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const queries = queryString.parse(location.search);
    return {
      ...queries,
      limit: Number.parseInt(queries.limit) || 6,
      page: Number.parseInt(queries.page) || 1,
    };
  }, [location]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 6,
    total: 6,
  });

  // Call Api
  const getProductApi = async () => {
    try {
      // setLoading(true);
      showLoading();
      const { product, total, limit, page } = await productApi.getAll(queryParams);
      if (product.length === 0) {
        const filters = {
          ...queryParams,
          page: queryParams.page - 1,
        };
        history.push({
          pathname: history.location.pathname,
          search: queryString.stringify(filters),
        });
      }
      if (product) {
        setProductData(product);
        setPagination({ total, limit, page });
      }
      // setLoading(false);
      hideLoading();
    } catch (e) {
      console.log('fail', e);
      // setLoading(false);
    }
    hideLoading();
  };

  useEffect(() => {
    getProductApi();
  }, [queryParams]);

  // Handle change page
  const handlePageChange = (e, page) => {
    const filters = {
      ...queryParams,
      page,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  // Handle Submit form
  const handleSubmit = async (values, fileChange) => {
    const newType = typeProduct.find((item) => item.id === values.productType);
    const newCategory = categoryProduct.find((item) => item.id === values.productCategory);
    // Post form to backend
    let formValues = new FormData();
    formValues.append('productName', values.productName);
    formValues.append('productType[id]', newType.id);
    formValues.append('productType[label]', newType.label);
    formValues.append('productCategory[id]', newCategory.id);
    formValues.append('productCategory[label]', newCategory.label);
    // formValues.append('productCategory', values.productCategory);
    formValues.append('productCost', values.productCost);
    formValues.append('productDescription', values.productDescription);
    formValues.append('mainImage', fileChange);
    if (!values && !fileChange?.name) {
      return;
    }
    setOpen(false);
    showLoading();
    const addProduct = await productApi.create(formValues);
    hideLoading();
    if (addProduct) {
      toast.success('Successfully!!!');
    }
    const filters = {
      ...queryParams,
      page: 1,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
    // await getProductApi();
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
    const deleteProduct = await productApi.remove(id);
    if (deleteProduct) {
      toast.success('Successfully!!!');
    }
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
          typeProduct={typeProduct}
          categoryProduct={categoryProduct}
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
