/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-syntax */
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
import { Avatar, Box, Button, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import { CATEGORY_ID, CATEGORY_LABEL, TYPE_ID } from '../../../../../components/Constants';
import AddMainImage from '../Forms/AddMainImage';
import InputField from '../Forms/InputField';
import SelectField from '../Forms/SelectField';

const useStyles = makeStyles({
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '16px',
    alignItems: 'center',
  },
});

export default function AddProductForm(props) {
  const classes = useStyles();
  const [typeId, setTypeId] = useState(TYPE_ID);
  const [fileChange, setFileChange] = useState({});
  // const [message, setMessage] = useState(false);

  const { typeProduct, categoryProduct, onSubmit } = props;

  // Textfield cho phần mô tả
  const rows = 5;
  const textline = 'multiline';

  // value !== TYPE_ID,
  const schema = yup.object().shape({
    productName: yup
      .string()
      .required('Vui long nhap ten san pham')
      .max(50, 'Vui long nhap duoi 50 ky tu'),
    productType: yup
      .string()
      .required('Vui long chon')
      .test('customType', 'Vui long chon', (value) => value !== TYPE_ID),
    productCategory: yup
      .string()
      .required('Vui long chon')
      .test('customType', 'Vui long chon', (value) => value !== CATEGORY_ID),
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
      productName: '',
      productType: '',
      productCategory: '',
      productCost: '',
      productDescription: '',
    },
    resolver: yupResolver(schema),
  });

  // Prevent key down

  const handleChange = (e) => {
    const keys = e.keyCode;
    if (keys === 189 || keys === 69) {
      e.preventDefault();
    }
  };
  const handleScroll = (e) => {
    e.target.blur();
  };

  // set value cho product type
  const { setValue } = form;

  // Get file image
  const handleGetFile = (file) => {
    setFileChange(file);
  };
  // Submit form values
  const handleSubmitForm = (values) => {
    onSubmit(values, fileChange);
  };

  const handleGetTypeId = (e) => {
    setTypeId(e);
    setValue('productType', e);
  };
  const newCategoryProduct = categoryProduct.filter((item) => item.typeId === typeId);
  const newListCategory = [{ id: CATEGORY_ID, label: CATEGORY_LABEL }, ...newCategoryProduct];

  return (
    <Box>
      <Box className={classes.title}>
        <Avatar sx={{ bgcolor: green[500], mr: 1 }}>
          <AssignmentIcon />
        </Avatar>
        <Typography component="h3" variant="h5">
          ADD PRODUCT
        </Typography>
      </Box>
      <form onSubmit={form.handleSubmit(handleSubmitForm)}>
        <InputField name="productName" label="Tên sản phẩm" form={form} />
        <SelectField
          name="productType"
          label="Loại sản phẩm "
          getTypeId={handleGetTypeId}
          form={form}
          productType={typeProduct}
        />
        <SelectField
          name="productCategory"
          label="Danh mục sản phẩm"
          typeId={typeId}
          form={form}
          productCategory={newListCategory}
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
        <AddMainImage fileImg={handleGetFile} />

        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{ mt: 1 }}
          // onClick={handleNotify}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
