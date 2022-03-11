import React from 'react';
import '../styles/Header.scss';
const Header = () => {
  return (
      <nav>
          <img src="./icons/icon_menu.svg" alt="menu" className="menu"/>

              <div className="navbar-left">
                  <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
                      <ul>
                          <li>
                              <a href="/">Todo</a>
                          </li>
                          <li>
                              <a href="/">Ropa</a>
                          </li>
                          <li>
                              <a href="/">Electtonica</a>
                          </li>
                          <li>
                              <a href="/">Muelbles</a>
                          </li>
                          <li>
                              <a href="/">Juguetes</a>
                          </li>
                          <li>
                              <a href="/">Otros</a>
                          </li>
                      </ul>
              </div>

              <div className="navbar-right">
                  <ul>
                      <li className="navbar-email">andre300.av@gmail.com</li>
                      <li className="navbar-shopping-cart">
                          <img src="./icons/icon_shopping_cart.svg" alt="shopping cart"/>
                              <div>2</div>
                      </li>
                  </ul>
              </div>
      </nav>
  )
};

export default Header;
