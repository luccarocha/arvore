import React from 'react';
import './MemoryWall.css';

const MemoryWall = ({ photos }) => {
  return (
    <div className="memory-wall">
      {photos.map((photo, index) => (
        <div key={photo.id || index} className="memory-card">
          <img src={photo.url} alt={photo.story} />
          <div className="memory-story">{photo.story}</div>
        </div>
      ))}
    </div>
  );
};

export default MemoryWall;