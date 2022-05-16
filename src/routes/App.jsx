import React from 'react';
import '../styles/global.scss';
import Layout from '../containers/Layaut';
import Login from '../pages/Login';
import SendEmail from '../pages/SendEmail';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from '../pages/Register';
import MyAccount from '../pages/MyAccount';
import Orders from '../pages/Orders';
import NewPassword from '../pages/NewPassword';
import Checkout from '../pages/Checkout';
import PasswordRecovery from '../pages/PasswordRecovery';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/myAccount" element={<MyAccount />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/new-password" element={<NewPassword />} />
          <Route
            exact
            path="/recovery-password"
            element={<PasswordRecovery />}
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/send-email" element={<SendEmail />} />
          <Route exact path="/recovery-password" element={<SendEmail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
