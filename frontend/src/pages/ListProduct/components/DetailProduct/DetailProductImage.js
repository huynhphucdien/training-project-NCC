/* eslint-disable function-paren-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { URL_IMAGE } from '../../../../components/Constants';
import './image.css';
// import 'react-alice-carousel/lib/alice-carousel.css';

export default function DetailProductImage({ data }) {
  console.log(data);
  const images = [data?.mainImage];
  if (data.image1?.length > 0) {
    images.push(data?.image1);
  }
  if (data.image2?.length > 0) {
    images.push(data?.image2);
  }
  if (data.image3?.length > 0) {
    images.push(data?.image3);
  }
  if (data.image4?.length > 0) {
    images.push(data?.image4);
  }
  console.log('images', images);
  return (
    <div>
      <Carousel showArrows infiniteLoop>
        {images.map((url, index) => (
          <img key={index} src={`${URL_IMAGE}${url}`} alt="" />
        ))}
      </Carousel>
    </div>
  );
}
