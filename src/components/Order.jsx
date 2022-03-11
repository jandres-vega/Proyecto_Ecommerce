import React from 'react';
import '../styles/Order.scss'
const Order = () => {
    return (
        <div className="Order">
            <p>
                <span>03.25.21</span>
                <span>6 Articulos</span>
            </p>
            <p>$560.000</p>
            <img src="./icons/flechita.svg" alt="arrow" />
        </div>
    );
};

export default Order;