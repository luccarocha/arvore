import React, { useState } from 'react';
import './Tree.css';

const Tree = ({ photos }) => {
  const [fallenLeaf, setFallenLeaf] = useState(null);

  const shakeTree = () => {
    if (photos.length > 0) {
      const randomIndex = Math.floor(Math.random() * photos.length);
      setFallenLeaf(photos[randomIndex]);
    }
  };

  return (
    <div className="tree-container">
      <div className="tree">
        <div className="trunk"></div>
        <div className="branches">
          {photos.map((photo, index) => (
            <div key={photo.id || index} className="leaf">
              <img src={photo.url} alt={photo.story} />
            </div>
          ))}
        </div>
      </div>
      <button className="shake-button" onClick={shakeTree}>Balançar a Árvore</button>
      {fallenLeaf && (
        <div className="fallen-leaf">
          <img src={fallenLeaf.url} alt={fallenLeaf.story} />
          <p>{fallenLeaf.story}</p>
        </div>
      )}
    </div>
  );
};

export default Tree;