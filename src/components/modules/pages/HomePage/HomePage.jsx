import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MovieList from 'components/shared/components/MovieList/MovieList';
import Loader from 'components/shared/components/Loader/Loader';
import ErrorField from 'components/shared/components/ErrorField/ErrorField';
import { fetchTrendingMoviesOfDay } from 'components/api/movies-api';
import styles from './home-page.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetchTrendingMoviesOfDay()
      .then(data => {
        if (data.results.length) {
          setMovies(data.results);
        } else {
          throw new Error('Nothing found!');
        }
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <MovieList movies={movies} />
      {loading && <Loader />}
      {error && <ErrorField errorMessage={error} />}
    </section>
  );
};

export default HomePage;
