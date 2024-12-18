import React, { useState, useEffect } from 'react';
import Tree from './components/Tree';
import './App.css';

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Simula o carregamento de fotos
    setPhotos([
      { id: 1, url: '/images/photo1.jpg', story: 'Nosso primeiro encontro' },
      { id: 2, url: '/images/photo2.jpg', story: 'Nossa primeira viagem juntos' },
      { id: 3, url: '/images/photo3.jpg', story: 'O dia do pedido de namoro' },
      { id: 4, url: '/images/photo1.jpg', story: 'Nosso primeiro encontro' },
      { id: 5, url: '/images/photo2.jpg', story: 'Nossa primeira viagem juntos' },
      { id: 6, url: '/images/photo3.jpg', story: 'O dia do pedido de namoro' },
      { id: 7, url: '/images/photo1.jpg', story: 'Nosso primeiro encontro' },
      { id: 8, url: '/images/photo2.jpg', story: 'Nossa primeira viagem juntos' },
      { id: 9, url: '/images/photo3.jpg', story: 'O dia do pedido de namoro' },
      { id: 10, url: '/images/photo1.jpg', story: 'Nosso primeiro encontro' },
      { id: 11, url: '/images/photo2.jpg', story: 'Nossa primeira viagem juntos' },
      { id: 12, url: '/images/photo3.jpg', story: 'O dia do pedido de namoro' },
      { id: 13, url: '/images/photo3.jpg', story: 'O dia do pedido de namoro' },
      { id: 14, url: '/images/photo1.jpg', story: 'Nosso primeiro encontro' },
      { id: 15, url: '/images/photo2.jpg', story: 'Nossa primeira viagem juntos' },
      { id: 16, url: '/images/photo3.jpg', story: 'O dia do pedido de namoro' },
      { id: 17, url: '/images/photo1.jpg', story: 'Nosso primeiro encontro' },
      { id: 18, url: '/images/photo2.jpg', story: 'Nossa primeira viagem juntos' },
      { id: 19, url: '/images/photo3.jpg', story: 'O dia do pedido de namoro' },
      { id: 20, url: '/images/photo3.jpg', story: 'O dia do pedido de namoro' },
      // Adicione mais fotos conforme necessário
    ]);
  }, []);

  return (
    <div className="app">
      <h1>Nossa Árvore de Memórias</h1>
      <p>4 Anos de Amor e Aventuras</p>
      <Tree photos={photos} />
    </div>
  );
};

export default App;