import React from 'react';
import './PhotoCard.css';

const PhotoCard = ({ photo }) => {
  return (
    <div className="photo-card">
      <img src={photo.url} alt={photo.story} />
      <p>{photo.story}</p>
    </div>
  );
};

export default PhotoCard;