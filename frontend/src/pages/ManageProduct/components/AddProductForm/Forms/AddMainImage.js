/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Box, Button, Input, Paper, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { IMAGE_PLACEHOLDER } from '../../../../../components/Constants';

const useStyles = makeStyles({
  stack: {
    position: 'relative',
    width: '40%',
    '&:hover >div:nth-child(2)': {
      display: 'inline-block',
      transition: '0.4s',
    },
    '&:hover': {
      boxShadow: '0 4px 15px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
      transition: '0.2s',
    },
    margin: '16px auto 60px',
    height: '220px',
    flex: '1 0 auto',
    borderRadius: '4px',
  },
  imageBtn: {
    display: 'none',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -80%)',
    width: '100%',
  },
  image: {
    borderRadius: '4px',
    objectFit: 'cover',
  },
  paper: {
    height: '220px',
    width: '100%',
  },
  btn: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 16px',
  },
  input: {
    display: 'none !important',
  },
  message: {
    color: '#d32f2f',
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    fontWeight: '400',
    fontSize: '0.75rem',
    lineHeight: '1.66',
    letterSpacing: '0.03333em',
    textAlign: 'left',
    marginTop: '10px',
    marginRight: '14px',
    marginBottom: '0',
    marginLeft: '14px',
  },
});

export default function AddMainImage({ fileImg, message }) {
  const classes = useStyles();
  const [avarta, setAvarta] = useState(IMAGE_PLACEHOLDER);
  // const [message, setMessage] = useState('vui long chon anh');

  const handleChange = (e) => {
    const file = e.target.files[0];

    // Validate file extension
    if (
      file &&
      file?.type !== 'image/png' &&
      file?.type !== 'image/jpeg' &&
      file?.type !== 'image/jpg'
    ) {
      toast.error('Vui long chon file: png, jpeg, jpg', {
        position: 'bottom-center',
        autoClose: 2000,
      });
      return;
    }
    //  Validate file size
    if (file && file?.size > 6e6) {
      toast.error('Vui long chon file nho hon 6MB', {
        position: 'bottom-center',
        autoClose: 2000,
      });
      return;
    }
    if (e.target.files.length > 0) {
      const preview = URL.createObjectURL(file);
      setAvarta(preview);
      fileImg(file);
    }
  };
  const handleDeleteImage = (e) => {
    setAvarta(IMAGE_PLACEHOLDER);
    fileImg([]);
  };
  return (
    <Stack direction="column" className={classes.stack}>
      <Paper elevation={3} variant="elevation" sx={{ height: '220px', width: '100%' }}>
        <img className={classes.image} src={avarta} alt={avarta.name} width="100%" height="100%" />
      </Paper>
      <Box className={classes.imageBtn}>
        <Box className={classes.btn}>
          <label htmlFor="contained-button-file-main-image">
            <Input
              className={classes.input}
              error
              accept="image/*"
              id="contained-button-file-main-image"
              type="file"
              onChange={handleChange}
            />
            <Button variant="contained" color="success" size="small" component="div">
              Upload
            </Button>
          </label>
          <Box>
            <Button
              disabled={avarta === IMAGE_PLACEHOLDER}
              variant="contained"
              color="error"
              size="small"
              onClick={handleDeleteImage}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Box>
      {message && (
        <Box className={classes.message} component="p">
          Vui lòng chọn ảnh
        </Box>
      )}
    </Stack>
  );
}
