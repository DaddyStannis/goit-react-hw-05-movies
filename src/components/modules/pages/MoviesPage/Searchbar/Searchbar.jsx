import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './searchbar.module.css';

const Searchbar = ({ onSubmit, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <form className={styles.form} action="" onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        autoFocus
      />
      <button className={styles.button}>Search</button>
    </form>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  defaultValue: PropTypes.string,
};
