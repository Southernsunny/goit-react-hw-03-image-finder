import ImageGalleryItem from 'components/ImageGalleryItem';
import React from 'react';
// import { getImages } from 'service/image-service';
// import Searchbar from 'components/Searchbar';
// import PropTypes from 'prop-types';
// import shortid from 'shortid';
// import { AiOutlineUserAdd } from 'react-icons/ai';
import { Gallery } from './ImageGallery.styled';


const ImageGallery = ({images }) => {
  return (
    <Gallery className="gallery">
      {images.map((item) => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </Gallery>
  );
};

export default ImageGallery;