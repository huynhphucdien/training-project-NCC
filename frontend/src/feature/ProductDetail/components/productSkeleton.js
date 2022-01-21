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
          <Box padding={1} key={index}>
            <Skeleton variant="rectangular" width={100} height={118} />
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
