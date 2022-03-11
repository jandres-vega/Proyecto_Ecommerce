import React from 'react';
import '@styles/Checkout.scss'
import OrderItem from "../components/OrderItem";
const Checkout = () => {
    return (
        <div className="Checkout">
            <div className="Checkout-container">
                <h1 className="title">Mi Orden</h1>
                <div className="Checkout-content">
                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 Articulos</span>
                        </p>
                        <p>$560.000</p>
                    </div>
                </div>
                <OrderItem />
            </div>
        </div>
    );
};

export default Checkout;