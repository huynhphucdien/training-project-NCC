/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Box, Button, Input, Paper, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IMAGE_PLACEHOLDER, URL_IMAGE } from '../../../../../components/Constants';

const useStyles = makeStyles({
  img: {
    position: 'relative',
    marginRight: '16px',
    '&:hover >div:nth-child(2)': {
      display: 'inline-block',
      transition: '0.4s',
    },
    '&:hover': {
      boxShadow: '0 4px 15px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
      transition: '0.2s',
    },
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
  originalImg: {
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
});

export default function UploadImage1({ image1, imageAdded1 }) {
  const classes = useStyles();
  const [avarta1, setAvarta1] = useState(IMAGE_PLACEHOLDER);
  useEffect(() => {
    if (imageAdded1.image1.length > 0) {
      setAvarta1(`${URL_IMAGE}${imageAdded1.image1}`);
    }
  }, []);
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
      setAvarta1(preview);
      image1(file);
      return;
    }
    if (imageAdded1.image1.length > 0) {
      setAvarta1(`${URL_IMAGE}${imageAdded1.image1}`);
      image1(imageAdded1.image1);
      return;
    }
    setAvarta1(IMAGE_PLACEHOLDER);
    image1([]);
  };

  const handleDeleteImage = () => {
    setAvarta1(IMAGE_PLACEHOLDER);
    image1([]);
  };
  // const previewImage = imageAdded1.image1.length > 0 ? imageAdded1.image1 : avarta1;
  return (
    <Stack direction="column" className={classes.img}>
      <Paper elevation={3} variant="elevation" className={classes.paper}>
        <img
          src={avarta1}
          alt={imageAdded1.productName}
          width="100%"
          height="100%"
          className={classes.originalImg}
        />
      </Paper>
      <Box className={classes.imageBtn}>
        <Box className={classes.btn}>
          <label htmlFor="contained-button-file1">
            <Input
              className={classes.input}
              error
              accept="image/*"
              id="contained-button-file1"
              type="file"
              onChange={handleChange}
            />
            <Button variant="contained" color="success" size="small" component="div">
              Upload
            </Button>
          </label>
          <Box>
            <Button
              disabled={avarta1 === IMAGE_PLACEHOLDER}
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
    </Stack>
  );
}
