import React from 'react';
import '@styles/Menu.scss';
const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <a href="/" className="title">
            Mi Orden
          </a>
        </li>
        <li>
          <a href="/">Mi Cuenta</a>
        </li>
        <li>
          <a href="/">Inicio Secion</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
