import './calculator.css';
import Screen from './Screen';
import Keyboard from './Keyboard';

// import calculate from '../logic/calculate';

const Calculator = () => {
  const handleButtonClick = (e) => {
    const buttonName = e.target.innerText;
    console.log(buttonName);
  };
  return (
    <div className="calculator-container">
      <Screen />
      <Keyboard onClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
