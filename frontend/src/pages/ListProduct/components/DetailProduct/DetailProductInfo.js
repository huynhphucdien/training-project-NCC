/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import formatCost from '../../../../utils/formatNumber';

const useStyles = makeStyles({
  producDetail: {
    paddingBottom: '32px',
    fontSize: '2rem !important',
  },
  productName: {
    textAlign: 'center',
    // wordWrap: 'break-word',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  borderBottom: {
    borderBottom: '1px solid #8080803b',
    padding: '16px 0',
    marginBottom: '16px',
  },
  detailProductType: {
    color: '#44b5ff',
    fontSize: '1rem !important',
    fontWeight: '400px !important',
    lineHeight: '100% important',
    height: '1.2rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis !important',
    whiteSpace: 'nowrap',
    paddingLeft: '8px',
  },
  productCost: {
    color: 'red',
    fontSize: '1.6rem !important',
    fontWeight: '400px !important',
    lineHeight: '100% important',
    height: '1.4rem',
  },
  formatCost: {
    backgroundColor: '#eff7e8',
    padding: '8px',
    margin: '8px auto !important',
    textAlign: 'center',
    // width: '100% !important',
  },
  productDescription: {
    wordWrap: 'break-word',
    overflow: 'auto !important',
    textOverflow: 'ellipsis !important',
    textIndent: '10px',
    textTransform: 'capitalize',
    fontSize: '0.9rem !important',
    lineHeight: '1.8rem !important',
    maxHeight: '215px',
  },
});

export default function DetailProductInfo({ data }) {
  const classes = useStyles();
  return (
    <Box padding={2} height="100%">
      <Box>
        <Typography className={classes.productName} component="h1" variant="h3">
          {data.productName}
        </Typography>
      </Box>
      <Box className={classes.borderBottom}>
        <table>
          <tr>
            <td>
              <Typography component="span" className={classes.detailProductType}>
                Mã sản phẩm:
              </Typography>
            </td>
            <td>
              <Typography component="span" className={classes.detailProductType}>
                {data.productCode}
              </Typography>
            </td>
          </tr>
          <tr>
            <td>
              <Typography component="span" className={classes.detailProductType}>
                Loại sản phẩm:
              </Typography>
            </td>
            <td>
              <Typography component="span" className={classes.detailProductType}>
                {data.productCategory?.label}
              </Typography>
            </td>
          </tr>
        </table>
        <Typography sx={{ pt: 2, pl: 2 }} className={classes.formatCost}>
          <Typography component="span" className={classes.productCost}>
            {formatCost(data.productCost)}
          </Typography>
        </Typography>
      </Box>
      <Typography component="div">
        <Typography component="h5" variant="h6" sx={{ pr: 1 }}>
          Mô tả:
        </Typography>
        <Typography component="p" className={classes.productDescription}>
          {data.productDescription}
        </Typography>
      </Typography>
    </Box>
  );
}
