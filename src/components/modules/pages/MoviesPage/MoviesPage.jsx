import { useState, useEffect } from 'react';
import { useSearchMovie } from 'components/shared/hooks/hooks';
import styles from './movies-page.module.css';
import Searchbar from './Searchbar/Searchbar';
import MovieList from 'components/shared/components/MovieList/MovieList';
import Loader from 'components/shared/components/Loader/Loader';
import ErrorField from 'components/shared/components/ErrorField/ErrorField';
import { fetchMoviesBySearch } from 'components/api/movies-api';

const Movies = () => {
  const [search, setSearch] = useSearchMovie();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = value => {
    if (value !== search && value) {
      setSearch(value);
    }
  };

  useEffect(() => {
    if (search) {
      setLoading(true);
      setError(false);
      fetchMoviesBySearch(search)
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
    }
  }, [search]);

  return (
    <section>
      <Searchbar onSubmit={handleSearch} defaultValue={search ? search : ''} />
      <MovieList movies={movies} />
      {loading && <Loader />}
      {error && <ErrorField errorMessage={error} />}
    </section>
  );
};

export default Movies;

Movies.propTypes = {};
