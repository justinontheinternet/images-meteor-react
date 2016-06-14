import React from 'react';
import ImageDetail from './image_detail';

const ImageList = (props) => {
  // filter returns new array with images where condition is true
    // ie. image is not an album
  const validImages = props.images.filter(image => !image.is_album);

  const RenderedImages = validImages.map(image => {
    return <ImageDetail image={image} key={image.title} />
  });

  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
};

export default ImageList;