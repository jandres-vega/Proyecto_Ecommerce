import React, {useRef} from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg';
const Login = () => {

  const formulario = useRef(null)

   const handleSubmit = (event) => {
    event.preventDefault();
     const formData = new FormData(formulario.current)
     console.log(formData)
     const data = {
       username: formData.get('email'),
       password: formData.get('password'),
     }
     console.log(data)
   }
  return (
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="form" ref={formulario}>

          <label htmlFor="email" className="label">
            Correo Electronico
          </label>
          <input
            type="text"
            name="email"
            placeholder="correo electronico"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            className="primary-button login-button"
            onClick={handleSubmit}>
            Iniciar Secion
          </button>
          <a href="/">Olvidaste Contraseña</a>
        </form>
        <button className="secondary-button signup-button" >
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default Login;
