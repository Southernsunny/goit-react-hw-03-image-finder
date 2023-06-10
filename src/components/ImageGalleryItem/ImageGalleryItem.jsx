import React from 'react';
// import { getImages } from 'service/image-service';
// import PropTypes from 'prop-types';
// import shortid from 'shortid';
// import { AiOutlineUserAdd } from 'react-icons/ai';
import { GalleryItem,GalleryImg } from './ImageGalleryItem.styled';



const ImageGalleryItem = ({item}) => {
  const { webformatURL, tags } = item;
  return (
    <GalleryItem>
      <GalleryImg src={webformatURL} alt={tags} loading="lazy"/>
    </GalleryItem>
  );
};

export default ImageGalleryItem;

// export default class ImageGallery extends Component {
//   state = {
//     images: [],

//   };

//   render() {
//     // const { images } = this.state;
//     return (
//       <>
//         <li class="gallery-item">
//           {images.map(({ id, src: { webformatURL }, alt: { tags } }) => (
//             <span key={id}>
//               <img src={webformatURL} alt={tags} />
//             </span>
//           ))}
//         </li>
//       </>
//     );
//   }
// }