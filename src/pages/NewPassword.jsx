import React from 'react';
import '@styles/NewPassword.scss'
import logo from '@logos/logo_yard_sale.svg'
const NewPassword = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo"/>

                <h1 className="title">Crear Nueva Contraseña</h1>
                <p className="subtitle">Ingrese una nueva contraseña para su cuenta</p>

                <form action="/" className="form">
                    <label htmlFor="password" className="label">Contraseña</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password"/>

                    <label htmlFor="new-password" className="label">Contrasela</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password"/>

                    <input type="submit" value="Confirm" className="primary-button login-button"/>
                </form>
            </div>
        </div>
    );
};

export default NewPassword;