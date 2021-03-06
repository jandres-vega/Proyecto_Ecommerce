import React from 'react';
import '@/styles/MyOrder.scss';
import flecha from '@icons/flechita.svg';
const MyOrder = () => {
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src="./icons/flechita.svg" alt="arrow" />
        <p className="title">Mi Orden</p>
      </div>
      <div className="my-order-content">
        <OrderItem />
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <button className="primary-button">Verificar</button>
      </div>
    </aside>
  );
};

export default MyOrder;
