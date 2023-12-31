import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import Header from '../components/Header';

export default function Favorites() {
  const { favorites, addFavorite } = useContext(FilmsContext);
  return (
    <>
      <Header />
      <h1>Favorites</h1>
      <div className="card-wrapper">
        {
          favorites.map((favorite: any) => (
            <div className="card" key={ favorite.id }>
              <div className="poster">
                <img
                  src={ favorite.movie_banner }
                  alt={ favorite.title }
                />

              </div>
              <div className="details">
                <h2>{favorite.title}</h2>
                <p>
                  {favorite.description.length > 100
                    ? `${favorite.description.substring(0, 100)}...`
                    : favorite.description}

                </p>
                <button
                  onClick={ () => addFavorite(favorite) }
                >
                  {(favorites.some((fav: any) => fav.id === favorite.id))
                    ? 'Remover dos favoritos'
                    : 'Adicionar aos favoritos'}

                </button>

              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}
