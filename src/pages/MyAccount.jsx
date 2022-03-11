import React from 'react';
import '@styles/MyAccount.scss'
const MyAccount = () => {
    return (
        <div className="login">
            <div className="form-container">
                <h1 className="title">Mi Cuenta</h1>

                <form action="/" className="form">
                    <div>
                        <label htmlFor="name" className="label">Nombre</label>
                        <p className="value">Andres Vega</p>

                        <label htmlFor="email" className="label">Email</label>
                        <p className="value">andre300.av@gmail.com</p>

                        <label htmlFor="password" className="label">Contraseña</label>
                        <p className="value">*********</p>
                    </div>

                    <input type="submit" value="Editar" className="secondary-button login-button"/>
                </form>
            </div>
        </div>
    );
};

export default MyAccount;