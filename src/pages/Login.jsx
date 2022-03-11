import React from 'react';
import '../styles/Login.scss';
const Login = () => {
  return (
      <div className="login">
        <div className="form-container">

            <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
            <form action="/" className="form">
                <label htmlFor="email" className="label">Correo Electronico</label>
                <input type="text" id="email" placeholder="platzi@example.cm" className="input input-email"/>
                <label htmlFor="password" className="label">Contraseña</label>
                <input type="password" id="password" placeholder="*********" className="input input-password"/>
                <input type="submit" value="Log in" className="primary-button login-button"/>
            <a href="/">Olvidaste Contraseña</a>
            </form>
            <button className="secondary-button signup-button">Iniciar Secion</button>
        </div>

      </div>
  );
};

export default Login;
