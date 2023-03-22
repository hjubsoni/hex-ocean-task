import './App.css';
import { ShoppingBag } from 'react-feather';

function App() {
  return (
    <div className="wrapper">
      <button className="order-button">
        <div className="icon-wrapper">
          <span className="icon">
            <ShoppingBag color="white" />
          </span>
        </div>
        <span className="order-button-text">Order</span>
      </button>
    </div>
  );
}

export default App;
