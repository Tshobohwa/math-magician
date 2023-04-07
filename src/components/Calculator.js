import './calculator.css';
import { useState } from 'react';
import Screen from './Screen';
import Keyboard from './Keyboard';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [screenValue, setScreenValue] = useState('0');
  const [operation, setOperation] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const KeyboardClickHandler = (e) => {
    const buttonName = e.target.innerText;
    const calcul = calculate(operation, buttonName);
    setOperation(calcul);
    setScreenValue(calcul.next || calcul.total || '0');
  };
  return (
    <main className="calculator-main">
      <div className="calculator-left">
        <p>Let&apos; s do some math!</p>
      </div>
      <div className="calculator-container">
        <Screen screenInput={screenValue} />
        <Keyboard onButtonClick={KeyboardClickHandler} />
      </div>
    </main>
  );
};
export default Calculator;
