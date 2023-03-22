import './App.css';
import { ShoppingBag } from 'react-feather';

function App() {
  return (
    <div className="wrapper">
      <button className="order-button">
        <span className="icon">
          <ShoppingBag />
        </span>
        <span className="order-button-text">Order</span>
      </button>
    </div>
  );
}

export default App;
