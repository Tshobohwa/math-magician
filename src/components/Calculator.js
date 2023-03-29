import './calculator.css';
import Screen from './Screen';
import Keyboard from './Keyboard';

const Calculator = () => (
  <div className="calculator-container">
    <Screen />
    <Keyboard />
  </div>
);

export default Calculator;
