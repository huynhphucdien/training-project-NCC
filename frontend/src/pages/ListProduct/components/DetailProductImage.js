/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { Box } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

export default function DetailProductImage({ data }) {
  // const customRenderItem = (item, props) => {
  //   console.log('item', item);
  //   console.log('props', props);
  // };
  // const customRenderThumb = (children) => {
  //   children.map((item) => {
  //     // const videoId = getVideoId(item.props.url);
  //     // return <img src={getVideoThumb(videoId)} />;
  //     console.log('children', item);
  //   });
  // };

  return (
    <div>
      {!!data.mainImage && (
        <Carousel infiniteLoop>
          <Box>
            <img src={data.mainImage} alt={data.name} />
          </Box>

          {/* {data.image1?.length > 0 && (
            <Box>
              <img src={data.image1} alt={data.name} />
            </Box>
          )} */}
          {/* {data.image2?.length > 0 && (
            <Box>
              <img src={data.image2} alt={data.name} />
            </Box>
          )}
          {data.image3?.length > 0 && (
            <Box>
              <img src={data.image3} alt={data.name} />
            </Box>
          )} */}
          {/* {data.image4?.length > 0 && (
            <Box>
              <img src={data.image4} alt={data.name} />
            </Box>
          )} */}
        </Carousel>
      )}
    </div>
  );
}
