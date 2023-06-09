import React from 'react';
import './App.css';
import { ShoppingBag } from 'react-feather';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleIsOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="wrapper">
        <button className="order-button" onClick={toggleIsOpenModal}>
          <div className="icon-wrapper">
            <ShoppingBag color="white" />
          </div>
          <span className="order-button-text">Order</span>
        </button>
      </div>
      {isModalOpen && <Modal handleDismiss={toggleIsOpenModal} />}
    </>
  );
}

export default App;
