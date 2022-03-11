import React from 'react';
import '../styles/ProductInfo.scss'
const ProductInfo = () => {
    return (
        <>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
            <div className="ProductInfo">
                <p>$35,000</p>
                <p>Cicla</p>
                <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
                <button className="primary-button add-to-cart-button">
                    <img src="./icons/bt_add_to_cart.svg" alt="add to cart" />
                    Agregar
                </button>
            </div>
        </>
    );
};

export default ProductInfo;