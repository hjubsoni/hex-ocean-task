import './App.css';
import { ShoppingBag } from 'react-feather';

function App() {
  return (
    <div className="wrapper">
      <button className="order-button">
        <span className="icon-wrapper">
          <span className="icon">
            <ShoppingBag color="white" />
          </span>
        </span>
        <span className="order-button-text">Order</span>
      </button>
    </div>
  );
}

export default App;
