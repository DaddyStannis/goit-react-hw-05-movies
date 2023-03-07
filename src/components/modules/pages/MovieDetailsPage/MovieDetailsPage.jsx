import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import {
  Outlet,
  NavLink,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { fetchMovieDetail, fetchImage } from 'components/api/movies-api';
import Loader from 'components/shared/components/Loader/Loader';
import ErrorField from 'components/shared/components/ErrorField/ErrorField';
import styles from './movie-detail-page.module.css';

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [poster, setPoster] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetail(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (movie) {
      fetchImage(movie.poster_path).then(blob => {
        setPoster(URL.createObjectURL(blob));
      });
    }
  }, [movie]);

  const releaseYear = new Date(movie?.release_date).getFullYear();
  const genres = movie?.genres.map(({ name }) => name).join(', ');

  return (
    <section>
      <button
        className={styles.button}
        onClick={e => {
          navigate(location.state?.from);
        }}
      >
        Go back
      </button>
      {loading && <Loader />}
      {error && <ErrorField errorMessage={error} />}
      {movie && (
        <div className={styles.content}>
          <img src={poster} alt={movie.title} />
          <div className={styles.info}>
            <h2 className={styles['movie-name']}>
              {movie.original_title}(<span>{releaseYear}</span>)
            </h2>
            <p>
              User score<span></span>
            </p>
            <h3>Overwiev</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{genres}</p>
          </div>
        </div>
      )}
      <div className={styles.submenu}>
        <h4>Additional information</h4>
        <ul>
          <li key={uuid()}>
            <NavLink to={`cast`} state={{ from: location.state?.from }}>
              Cast
            </NavLink>
          </li>
          <li key={uuid()}>
            <NavLink to={`reviews`} state={{ from: location.state?.from }}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </section>
  );
};

export default MovieDetailPage;
