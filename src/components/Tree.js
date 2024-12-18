import React from 'react';
import './Tree.css';

const Tree = ({ photos }) => {
  return (
    <div className="tree">
      <div className="trunk"></div>
      <div className="branches">
        {photos.map((photo) => (
          <div key={photo.id} className="leaf">
            <img src={photo.url} alt={photo.story} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tree;