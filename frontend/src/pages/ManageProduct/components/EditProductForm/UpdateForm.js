/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable brace-style */
/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* eslint-disable max-len */
import { yupResolver } from '@hookform/resolvers/yup';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import { CATEGORY_ID, CATEGORY_LABEL, TYPE_ID } from '../../../../components/Constants';
import ImageAdded from '../AddProductForm/Forms/ImageAdded';
import InputField from '../AddProductForm/Forms/InputField';
import SelectField from '../AddProductForm/Forms/SelectField';
import UploadImage1 from '../AddProductForm/Forms/UploadImage1';
import UploadImage2 from '../AddProductForm/Forms/UploadImage2';
import UploadImage3 from '../AddProductForm/Forms/UploadImage3';
import UploadImage4 from '../AddProductForm/Forms/UploadImage4';

const useStyles = makeStyles({
  title: {
    display: 'flex',
    justifyContent: 'center',
    margin: '16px 0 32px',
    alignItems: 'center',
  },
  stack: {
    padding: '8px 32px',
    flex: '1',
  },
});

export default function UpdateForm(props) {
  const classes = useStyles();
  const { onSubmit, editProduct, categoryProduct, typeProduct } = props;
  const [typeId, setTypeId] = useState(editProduct.productType.id);
  const [image1, setImage1] = useState({});
  const [image2, setImage2] = useState({});
  const [image3, setImage3] = useState({});
  const [image4, setImage4] = useState({});
  const [mainImage, setMainImage] = useState({});

  // Textfield cho phần mô tả
  const rows = 5;
  const textline = 'multiline';
  // Push to quann-ly-san-pham
  const history = useHistory();

  const schema = yup.object().shape({
    productName: yup
      .string()
      .required('Vui long nhap ten san pham')
      .max(50, 'Vui long nhap duoi 50 ky tu'),
    productType: yup
      .string()
      .required('Vui long chon')
      .test('custom', 'Vui long chon', (value) => value !== TYPE_ID),
    productCategory: yup
      .string()
      .required('Vui long chon')
      .test('custom', 'Vui long chon', (value) => value !== CATEGORY_ID),
    productCost: yup
      .number()
      .typeError('Vui long nhap so')
      .min(1001, 'Gia san pham phai lon hon 1000')
      .max(1000000000, 'Gia san pham nho hon 1000000000')
      .required('vui long nhap gia san pham'),
  });

  const form = useForm({
    mode: 'all',
    defaultValues: {
      productCode: editProduct.productCode,
      productName: editProduct.productName,
      productType: editProduct.productType.id,
      productCategory: editProduct.productCategory.id,
      productCost: editProduct.productCost,
      productDescription: editProduct.productDescription,
    },
    resolver: yupResolver(schema),
  });
  // Prevent key down
  const handleChange = (e) => {
    // e.preventDefault();
    const keys = e.keyCode;
    console.log('code', keys);
    if (keys === 189 || keys === 69) {
      e.preventDefault();
    }
  };
  const handleScroll = (e) => {
    e.target.blur();
  };

  // Images for slide
  const images = { image1, image2, image3, image4, mainImage };
  // Submit data
  const handleSubmitForm = (values) => {
    onSubmit(values, images);
  };
  // set value cho product type
  const { setValue } = form;

  const handleGetTypeId = (e) => {
    setTypeId(e);
    setValue('productType', e);
  };
  // Get value productCategory by productType
  const newCategoryProduct = categoryProduct.filter((item) => item.typeId === typeId);
  const newListCategory = [{ id: CATEGORY_ID, label: CATEGORY_LABEL }, ...newCategoryProduct];
  // Get images
  const handleGetImage1 = (file1) => {
    setImage1(file1);
  };
  const handleGetImage2 = (file2) => {
    setImage2(file2);
  };
  const handleGetImage3 = (file3) => {
    setImage3(file3);
  };
  const handleGetImage4 = (file4) => {
    setImage4(file4);
  };
  const handleGetMainImage = (filemainImage) => {
    setMainImage(filemainImage);
  };
  return (
    <Box>
      <Box className={classes.title}>
        <Avatar sx={{ bgcolor: green[500], mr: 1 }}>
          <AssignmentIcon />
        </Avatar>
        <Typography component="h3" variant="h5">
          UPDATE PRODUCT
        </Typography>
      </Box>
      <form onSubmit={form.handleSubmit(handleSubmitForm)}>
        <InputField name="productCode" label="Mã sản phẩm" form={form} disabled />
        <InputField name="productName" label="Tên sản phẩm" form={form} />
        <SelectField
          name="productType"
          label="Loại sản phẩm "
          getTypeId={handleGetTypeId}
          form={form}
          typeProductUpdate={typeProduct}
        />
        <SelectField
          name="productCategory"
          label="Danh mục sản phẩm"
          typeIdUpdate={typeId}
          form={form}
          productCategoryUpdate={newListCategory}
        />
        <InputField
          name="productCost"
          label="Giá sản phẩm"
          type="number"
          keyChange={handleChange}
          mouseScroll={handleScroll}
          form={form}
        />
        <InputField
          name="productDescription"
          label="Mô tả"
          multiline={textline}
          rows={rows}
          form={form}
        />
        <ImageAdded imageAdded={editProduct} imageChange={handleGetMainImage} />
        <Stack direction="row" justifyContent="space-between" className={classes.stack}>
          <UploadImage1 image1={handleGetImage1} imageAdded1={editProduct} />
          <UploadImage2 image2={handleGetImage2} imageAdded2={editProduct} />
        </Stack>
        <Stack direction="row" justifyContent="space-between" className={classes.stack}>
          <UploadImage3 image3={handleGetImage3} imageAdded3={editProduct} />
          <UploadImage4 image4={handleGetImage4} imageAdded4={editProduct} />
        </Stack>
        <Stack direction="row" justifyContent="space-between" sx={{ pr: 4, pl: 4 }}>
          {/* <UploadImage3 />
          <UploadImage4 /> */}
        </Stack>
        <Button variant="contained" fullWidth type="submit" sx={{ mt: 1 }}>
          UPDATE
        </Button>
      </form>
    </Box>
  );
}
