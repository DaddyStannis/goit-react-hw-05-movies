import PropTypes from 'prop-types';

const ErrorField = ({ errorMessage }) => {
  return <p style={{ color: 'red', fontSize: '20px' }}>{errorMessage}</p>;
};

export default ErrorField;

ErrorField.propTypes = {
  errorMessage: PropTypes.string,
};
