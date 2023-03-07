import { NavLink, useLocation } from 'react-router-dom';
import styles from './header.module.css';
import initialValue from './initial-value.json';

const Header = () => {
  const location = useLocation();

  const menuItems = initialValue.map(({ name, path }, index) => {
    return (
      <li key={index} className={styles['menu-item']}>
        <NavLink
          className={styles['menu-link']}
          to={path}
          state={{ from: location }}
        >
          {name}
        </NavLink>
      </li>
    );
  });

  return (
    <header>
      <nav className={styles.menu}>
        <ul className={styles['menu-items']}>{menuItems}</ul>
      </nav>
    </header>
  );
};

export default Header;
