/* eslint-disable prefer-const */
/* eslint-disable import/no-named-default */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
import { default as Close } from '@mui/icons-material/Close';
import { Box, Dialog, DialogContent, IconButton, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
// import categoryProductApi from '../../../api/categoryProduct';
import productApi from '../../../api/productApi';
// import typeProductApi from '../../../api/typeProduct';
import useLoading from '../../../hooks/useLoading';
import UpdateForm from '../components/EditProductForm/UpdateForm';

const useStyles = makeStyles({
  closeButton: {
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
});
export default function ManageDetailProduct(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [editProduct, setEditProduct] = useState([]);
  const [showLoading, hideLoading] = useLoading();
  // Props
  const { typeProduct, categoryProduct } = props;

  const {
    params: { id },
  } = useRouteMatch();
  // Redirect to the target path
  const history = useHistory();

  // Call Api
  const getDataTable = async () => {
    try {
      // setLoading(true);
      showLoading();
      const data = await productApi.get(id);
      console.log('data', data);
      if (data) {
        setEditProduct(data);
        setOpen(true);
      }
      // setLoading(false);
      hideLoading();
    } catch (e) {
      console.log(e);
      // setLoading(false);
    }
    hideLoading();
  };
  useEffect(() => {
    getDataTable();
  }, []);

  // Update product
  const handleSubmit = async (values, images) => {
    const { mainImage, image1, image2, image3, image4 } = images;
    const newType = typeProduct.find((item) => item.id === values.productType);
    const newCategory = categoryProduct.find((item) => item.id === values.productCategory);
    // console.log('image1', image1);
    // console.log('editProduct');

    let formValues = new FormData();
    formValues.append('productName', values.productName);
    formValues.append('productType[id]', newType.id);
    formValues.append('productType[label]', newType.label);
    formValues.append('productCategory[id]', newCategory.id);
    formValues.append('productCategory[label]', newCategory.label);
    formValues.append('productCost', values.productCost);
    formValues.append('productDescription', values.productDescription);
    // MainImage
    if (mainImage?.name) {
      formValues.append('mainImage', mainImage);
    } else {
      formValues.append('mainImage', editProduct.mainImage);
    }
    // image1
    if (image1?.name) {
      formValues.append('image1', image1);
    } else if (image1.length === 0 || editProduct.image1.length === 0) {
      console.log('Delete successfull!');
    } else {
      formValues.append('image1', editProduct.image1);
    }
    // image2
    if (image2?.name) {
      formValues.append('image2', image2);
    } else if (image2.length === 0 || editProduct.image2.length === 0) {
      console.log('Delete successfull!');
    } else {
      formValues.append('image2', editProduct.image2);
    }
    // image3
    if (image3?.name) {
      formValues.append('image3', image3);
    } else if (image3.length === 0 || editProduct.image3.length === 0) {
      console.log('Delete successfull!');
    } else {
      formValues.append('image3', editProduct.image3);
    }
    // image4
    if (image4?.name) {
      formValues.append('image4', image4);
    } else if (image4.length === 0 || editProduct.image4.length === 0) {
      console.log('Delete successfull!');
    } else {
      formValues.append('image4', editProduct.image4);
    }

    // Update data to database
    const idEdited = editProduct.id;
    setOpen(false);
    showLoading();
    const update = await productApi.update(idEdited, formValues);
    hideLoading();
    if (update) {
      toast.success('Successfully');
    }
    history.push('/quan-ly-san-pham');
  };
  const handleClose = () => {
    setOpen(false);
    history.push('/quan-ly-san-pham');
  };
  return (
    <Box>
      <Paper>
        <Dialog open={open} fullWidth>
          <DialogContent>
            <IconButton className={classes.closeButton} onClick={handleClose}>
              <Close />
            </IconButton>
            <UpdateForm
              onSubmit={handleSubmit}
              editProduct={editProduct}
              typeProduct={typeProduct}
              categoryProduct={categoryProduct}
            />
          </DialogContent>
        </Dialog>
      </Paper>
    </Box>
  );
}
