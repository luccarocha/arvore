import React, { useState, useEffect } from 'react';
import Tree from './components/Tree';
import PhotoCard from './components/PhotoCard';
import { useShakeDetector } from './hooks/useShakeDetector';
import './App.css';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState(null);

  useEffect(() => {
    // Simula o carregamento de fotos de um arquivo JSON ou API
    setPhotos([
      { id: 1, url: '/images/photo1.jpg', story: 'Nosso primeiro encontro' },
      { id: 2, url: '/images/photo2.jpg', story: 'Nossa primeira viagem juntos' },
      { id: 3, url: '/images/photo3.jpg', story: 'O dia do pedido de namoro' },
      // Adicione mais fotos conforme necessário
    ]);
  }, []);

  const handleShake = () => {
    if (photos.length > 0) {
      const randomIndex = Math.floor(Math.random() * photos.length);
      setCurrentPhoto(photos[randomIndex]);
    }
  };

  useShakeDetector(handleShake);

  return (
    <div className="app">
      <h1>Nossos 4 Anos de Amor</h1>
      <Tree photos={photos} />
      {currentPhoto && <PhotoCard photo={currentPhoto} />}
    </div>
  );
};

export default App;