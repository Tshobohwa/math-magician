import './keyboard.css';

const Keyboard = () => (
  <ul className="keyboard">
    <li className="keyboard-row">
      <button className="calculator-btn" type="button">
        AC
      </button>
      <button className="calculator-btn" type="button">
        +/-
      </button>
      <button className="calculator-btn" type="button">
        %
      </button>
      <button className="calculator-btn" type="button">
        &div;
      </button>
    </li>
    <li className="keyboard-row">
      <button className="calculator-btn" type="button">
        7
      </button>
      <button className="calculator-btn" type="button">
        8
      </button>
      <button className="calculator-btn" type="button">
        9
      </button>
      <button className="calculator-btn" type="button">
        x
      </button>
    </li>
    <li className="keyboard-row">
      <button className="calculator-btn" type="button">
        4
      </button>
      <button className="calculator-btn" type="button">
        5
      </button>
      <button className="calculator-btn" type="button">
        6
      </button>
      <button className="calculator-btn" type="button">
        -
      </button>
    </li>
    <li className="keyboard-row">
      <button className="calculator-btn" type="button">
        1
      </button>
      <button className="calculator-btn" type="button">
        2
      </button>
      <button className="calculator-btn" type="button">
        3
      </button>
      <button className="calculator-btn" type="button">
        +
      </button>
    </li>
    <li className="keyboard-row">
      <button className="calculator-btn" type="button">
        0
      </button>
      <button className="calculator-btn" type="button">
        .
      </button>
      <button className="calculator-btn" type="button">
        =
      </button>
    </li>
  </ul>
);

export default Keyboard;
