import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FilmsContext from './context/FilmsContext';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [films, setFilms] = useState([]);
  const [favorites, setFavorites] = useState<any[]>([]);

  const addFavorite = (film: any) => {
    const isFavorite = favorites.some((favorite) => favorite.id === film.id);

    if (isFavorite) {
      const newFavorites = favorites.filter((favorite) => favorite.id !== film.id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, film]);
    }
  };

  useEffect(() => {
    const getFilms = async () => {
      const response = await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations');
      const results = await response.json();
      setFilms(results);
    };

    getFilms();
  }, []);

  return (
    <FilmsContext.Provider value={ { films, favorites, addFavorite } }>
      <Routes>
        <Route path="/" Component={ Home } />
        <Route path="/favorites" Component={ Favorites } />
      </Routes>
    </FilmsContext.Provider>
  );
}

export default App;
