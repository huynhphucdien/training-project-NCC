/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* eslint-disable max-len */
import { yupResolver } from '@hookform/resolvers/yup';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Avatar, Box, LinearProgress, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from './InputField';

export default function AddProductForm() {
  //   const [open, setOpen] = useState(false);
  //   const [type, setType] = useState('61d3ecdf816e10e417f84bd1');
  //   const [formValues, setFormValues] = useState();
  // console.log(type);

  //   const {
  //     onChanges,
  //     labelSelect,
  //     labelChoose,
  //     getAvarta,
  //     typeList,
  //     productChoosen,
  //     productGetApi,
  //   } = props;

  const schema = yup.object().shape({
    productName: yup
      .string()
      .required('Vui long nhap ten san pham')
      .min(10, 'Vui long nhap tren 10 ky tu'),
    productType: yup.string().required('Vui long chon'),
    productChoosen: yup.string().required('Vui long chon'),
    productCost: yup
      .number()
      .typeError('number')
      .min(1000)
      .required('vui long nhap so'),
    productDescription: yup.string().required('Vui long nhap'),
  });

  const form = useForm({
    mode: 'all',
    defaultValue: {
      productName: '',
      productType: '',
      productChoosen: '',
      productCost: '',
      productDescription: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    console.log(values);
  };
  // Display Loading
  const { isSubmitting } = form.formState;
  // Style Component
  //   const classes = useStyles();
  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };
  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  // setValue giong nhu setState cho Controller, khi code chay dung nhung du lieu ko render ra ta can phai set lai value cho controller
  //   const { setValue } = form;
  //   const handleId = (newId) => {
  //     setType(newId);

  //     setValue('productType', newId);
  //   };

  //   const handleTypeId = (selectId) => {
  //     setValue('productChoosen', selectId);
  //   };
  return (
    <Box>
      <Avatar sx={{ bgcolor: green[500] }}>
        <AssignmentIcon />
      </Avatar>
      <Typography component="h3" variant="h5">
        ADD PRODUCT
      </Typography>
      <form
        //   className={classes.root}
        onSubmit={form.handleSubmit(handleSubmit)}
        // selectType={labelSelect}
      >
        {isSubmitting && <LinearProgress />}
        <InputField name="productName" label="Tên sản phẩm" form={form} />
        <InputField name="productType" label="Loại sản phẩm " form={form} />
        <InputField
          name="productCategory"
          label="Danh mục sản phẩm"
          form={form}
        />
        <InputField name="productCost" label="Giá sản phẩm" form={form} />
        <InputField name="productDescription" label="Mô tả" form={form} />
      </form>
    </Box>
  );
}
