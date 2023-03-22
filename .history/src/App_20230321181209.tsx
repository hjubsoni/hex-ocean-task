import React from 'react';
import './App.css';
import { ShoppingBag } from 'react-feather';
import ModalForm from './components/ModalForm';

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleIsOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && <ModalForm handleDismiss={toggleIsOpenModal} />}

      <button className="order-button" onClick={toggleIsOpenModal}>
        <div className="icon-wrapper">
          <ShoppingBag color="white" />
        </div>
        <span className="order-button-text">Order</span>
      </button>
    </>
  );
}

export default App;
