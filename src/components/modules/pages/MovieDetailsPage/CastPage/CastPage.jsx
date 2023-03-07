import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'components/api/movies-api';
import { IMG_IS_MISSING } from 'components/shared/utils/utils';
import styles from './cast-page.module.css';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(data => {
      setCast(data.cast);
    });
  }, []);

  const elements = cast.map(actor => {
    return (
      <li key={uuid()}>
        <img
          src={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
              : IMG_IS_MISSING
          }
          alt={actor.name}
          width="200"
        />
        <h3>{actor.name}</h3>
        <p>
          Character: <span>{actor.character}</span>
        </p>
      </li>
    );
  });

  if (elements.length) {
    return <ul> {elements} </ul>;
  } else {
    return <p>We don't have a cast for this movie.</p>;
  }
};

export default CastPage;
