import './app.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/Quotes" element={<Quote />} />
    </Routes>
  </>
);

export default App;
