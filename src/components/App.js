import './app.css';
import Calculator from './Calculator';
import Quote from './Quote';

const App = () => (
  <div className="app-container">
    <div className="calculator-quote__container">
      <Calculator />
      <Quote />
    </div>
  </div>
);

export default App;
