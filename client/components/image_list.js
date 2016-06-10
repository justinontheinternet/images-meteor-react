import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
  { title: 'Pen', link: 'http://dummyimage.com/600x400' },
  { title: 'Pine Tree', link: 'http://dummyimage.com/600x400' },
  { title: 'Mug', link: 'http://dummyimage.com/600x400' }
]

const ImageList = () => {
  const RenderedImages = IMAGES.map(function(image) {
    return <ImageDetail image={image} key={image.title} />
  });

  return (
    <ul>
      {RenderedImages}
    </ul>
  );
};

export default ImageList;