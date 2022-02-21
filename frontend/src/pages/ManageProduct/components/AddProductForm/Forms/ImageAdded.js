/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Box, Button, Input, Paper, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IMAGE_PLACEHOLDER, URL_IMAGE } from '../../../../../components/Constants';

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
    marginLeft: '32px',
    marginBottom: '16px',
    height: '220px',
    objectFit: 'cover',
    flex: '1',
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
    objectFit: 'cover',
    borderRadius: '4px',
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 16px',
  },
  input: {
    display: 'none !important',
  },
});

export default function ImageAdded({ imageAdded, imageChange }) {
  const classes = useStyles();
  const [avarta, setAvarta] = useState(IMAGE_PLACEHOLDER);

  useEffect(() => {
    if (imageAdded.mainImage.length > 0) {
      setAvarta(`${URL_IMAGE}${imageAdded.mainImage}`);
    }
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    // Validate file extension
    if (file.type !== 'image/png' && file.type !== 'image/jpeg' && file.type !== 'image/jpg') {
      toast.error('Vui long chon file: png, jpeg, jpg', {
        position: 'bottom-center',
        autoClose: 2000,
      });
      return;
    }
    //  Validate file size
    if (file.size > 6e6) {
      toast.error('Vui long chon file nho hon 6MB', {
        position: 'bottom-center',
        autoClose: 2000,
      });
      return;
    }
    if (e.target.files.length > 0) {
      const preview = URL.createObjectURL(file);
      setAvarta(preview);
      imageChange(file);
    }
  };
  return (
    <Stack direction="column" className={classes.stack}>
      <Paper elevation={3} variant="elevation" sx={{ height: '220px', width: '100%' }}>
        <img
          className={classes.image}
          src={avarta}
          alt={imageAdded.productName}
          width="100%"
          height="100%"
        />
      </Paper>
      <Box className={classes.imageBtn}>
        <Box className={classes.btn}>
          <label htmlFor="contained-button-file">
            <Input
              className={classes.input}
              error
              accept="image/*"
              id="contained-button-file"
              type="file"
              onChange={handleChange}
            />
            <Button variant="contained" color="success" size="small" component="div">
              Upload
            </Button>
          </label>
        </Box>
      </Box>
    </Stack>
  );
}
