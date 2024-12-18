import React, { useState, useEffect } from 'react';
import MemoryWall from './components/MemoryWall';
import './App.css';

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Simula o carregamento de fotos de um arquivo JSON ou API
    setPhotos([
      { id: 1, url: '/images/photo1.jpg', story: 'Nosso primeiro encontro' },
      { id: 2, url: '/images/photo2.jpg', story: 'Nossa primeira viagem juntos' },
      { id: 3, url: '/images/photo3.jpg', story: 'O dia do pedido de namoro' },
      // Adicione mais fotos conforme necessário
    ]);
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Nossas Memórias</h1>
        <p>4 Anos de Amor e Aventuras</p>
      </header>
      <MemoryWall photos={photos} />
    </div>
  );
};

export default App;