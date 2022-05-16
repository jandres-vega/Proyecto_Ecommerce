import React from 'react';
import '@styles/Order.scss';
import flecha from '@icons/flechita.svg';
const Order = () => {
  return (
    <div className="Order">
      <p>
        <span>03.25.21</span>
        <span>6 Articulos</span>
      </p>
      <p>$560.000</p>
      <img src={flecha} alt="arrow" />
    </div>
  );
};

export default Order;
