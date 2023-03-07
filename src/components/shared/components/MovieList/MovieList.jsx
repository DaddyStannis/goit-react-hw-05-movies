import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './movie-list.module.css';

const MovieList = ({ movies = [] }) => {
  const location = useLocation();

  const elements = movies.map(({ id, original_title }) => {
    return (
      <li key={id}>
        <NavLink
          className={styles.link}
          to={`/movies/${id}`}
          state={{ from: location }}
        >
          <h3>{original_title}</h3>
        </NavLink>
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, original_title: PropTypes.string })
  ),
  onClick: PropTypes.func,
};
