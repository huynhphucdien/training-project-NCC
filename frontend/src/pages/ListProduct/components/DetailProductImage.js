/* eslint-disable react/prop-types */
import { Box } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

export default function DetailProductImage({ data }) {
  return (
    <Box>
      <Carousel infiniteLoop>
        <Box>
          <img src={data.image} alt={data.name} />
        </Box>
        <Box>
          <img src={data.image} alt={data.name} />
        </Box>
      </Carousel>
    </Box>
  );
}
