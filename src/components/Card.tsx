import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';

function Card() {
  const { films, favorites, addFavorite } = useContext(FilmsContext);
  // console.log(films);

  return (
    <div className="card-wrapper">
      {films.map((film: any) => (
        <div className="card" key={ film.id }>
          <h2>{film.title}</h2>
          <img
            style={ { width: '200px' } }
            src={ film.movie_banner }
            alt={ film.title }
          />
          <p>
            {film.description.length > 100
              ? `${film.description.substring(0, 100)}...`
              : film.description}

          </p>
          <button
            onClick={ () => addFavorite(film) }
          >
            {(favorites.some((favorite: any) => favorite.id === film.id))
              ? 'Remover dos favoritos'
              : 'Adicionar aos favoritos'}

          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;
