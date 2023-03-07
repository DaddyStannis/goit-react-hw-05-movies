import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div style={{ maxWidth: '1200px', margin: 'auto', padding: '0 15px' }}>
      {children}
    </div>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.node,
};
