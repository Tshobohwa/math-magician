import PropTypes from 'prop-types';
import './keyboard.css';

const Keyboard = (props) => {
  const { onButtonClick } = props;
  const buttonClickHandler = (e) => {
    onButtonClick(e);
  };
  return (
    <ul className="keyboard">
      <li className="keyboard-row">
        <button
          className="calculator-btn"
          type="button"
          onClick={buttonClickHandler}
        >
          AC
        </button>
        <button
          className="calculator-btn"
          type="button"
          onClick={buttonClickHandler}
        >
          +/-
        </button>
        <button
          className="calculator-btn"
          type="button"
          onClick={buttonClickHandler}
        >
          %
        </button>
        <button
          className="calculator-btn"
          type="button"
          onClick={buttonClickHandler}
        >
          ÷
        </button>
      </li>
      <li className="keyboard-row">
        <button
          className="calculator-btn"
          type="button"
          onClick={buttonClickHandler}
        >
          7
        </button>
        <button
          className="calculator-btn"
          type="button"
          onClick={buttonClickHandler}
        >
          8
        </button>
        <button
          className="calculator-btn"
          type="button"
          onClick={buttonClickHandler}
        >
          9
        </button>
        <button
          className="calculator-btn"
          type="button"
          onClick={buttonClickHandler}
        >
          x
        </button>
      </li>
      <li className="keyboard-row">
        <button
          className="calculator-btn"
          type="button"
          onClick={buttonClickHandler}
        >
          4
        </button>
        <button
          className="calculator-btn"
          type="button"
          onClick={buttonClickHandler}
        >
          5
        </button>
        <button
          className="calculator-btn"
          type="button"
          onClick={buttonClickHandler}
        >
          6
        </button>
        <button
          className="calculator-btn"
          type="button"
          onClick={buttonClickHandler}
        >
          -
        </button>
      </li>
      <li className="keyboard-row">
        <button
          className="calculator-btn"
          type="button"
          onClick={buttonClickHandler}
        >
          1
        </button>
        <button
          className="calculator-btn"
          type="button"
          onClick={buttonClickHandler}
        >
          2
        </button>
        <button
          className="calculator-btn"
          type="button"
          onClick={buttonClickHandler}
        >
          3
        </button>
        <button
          className="calculator-btn"
          type="button"
          onClick={buttonClickHandler}
        >
          +
        </button>
      </li>
      <li className="keyboard-row">
        <button
          className="calculator-btn"
          type="button"
          onClick={buttonClickHandler}
        >
          0
        </button>
        <button
          className="calculator-btn"
          type="button"
          onClick={buttonClickHandler}
        >
          .
        </button>
        <button
          className="calculator-btn"
          type="button"
          onClick={buttonClickHandler}
        >
          =
        </button>
      </li>
    </ul>
  );
};

Keyboard.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Keyboard;
