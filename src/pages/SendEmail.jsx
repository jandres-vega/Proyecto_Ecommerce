import React from 'react';
import '../styles/SendEmail.scss';
const SendEmail = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <h1 className="title">Email ha sido Enviado!</h1>
        <p className="subtitle">
          Consulte su bandeja de entrada para obtener instrucciones sobre cómo
          restablecer la contraseña.
        </p>
        <div className="email-image">
          <img src="./icons/email.svg" alt="email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>No recibiste ningun correo?</span>
          <a href="/">Reenviar</a>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
