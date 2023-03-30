import './screen.css';
import PropTypes from 'prop-types';

const Screen = (props) => {
  const { screenInput } = props;
  return <input className="calculator-screen" value={screenInput} readOnly />;
};

Screen.propTypes = {
  screenInput: PropTypes.string.isRequired,
};

export default Screen;
