/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import { Grid, Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export default function ProductSkeleton({ length }) {
  // const skeletonList = [];
  // for (let i = 0; i < length; i++) {
  //   skeletonList.push(i);
  // }
  // console.log(skeletonList)
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((a, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Box padding={1}>
              <Skeleton variant="rectangular" width="100%" height={150} />
              <Skeleton width="30%" />
              <Skeleton width="50%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
