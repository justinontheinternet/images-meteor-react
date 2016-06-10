import React from 'react';

const ImageDetail = (props) => {
  return (
    <li>
      <img src={props.image.link} />
      {props.image.title}
    </li>
  );
}

export default ImageDetail;