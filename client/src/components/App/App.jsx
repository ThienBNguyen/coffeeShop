import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomeView from '../HomeView/HomeView/HomeView';
import MenuView from '../MenuView/MenuView/MenuView.jsx';
import NavBar from '../CommonView/NavBar/NavBar.jsx';
import ServiceView from '../ServiceView/ServiceView.jsx';
import BlogView from '../BlogView/BlogView.jsx';
import ContactView from '../ContactView/ContactView.jsx';
import AboutView from '../AboutView/AboutView.jsx';
import React, { useEffect } from 'react';
import introDetail from '../../resouces/Text/Intro/introDetail';
import RegisterView from '../userView/RegisterView'
import LoginView from '../userView/LoginView';
import store from '../../store/store';
import { loadUser } from '../../action/authAction';
import CartView from '../userView/cart/CartView'
import PaymentView from '../PaymentView/PaymentView';
const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  });


  return (
    <Router >
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/home" element={<HomeView />} />
        <Route
          path="/menu"
          element={<MenuView introDetail={introDetail.menu} />}
        />
        <Route
          path="/service"
          element={<ServiceView introDetail={introDetail.services} />}
        />
        <Route
          path="/blog"
          element={<BlogView introDetail={introDetail.blog} />}
        />
        <Route
          path="/About"
          element={<AboutView introDetail={introDetail.about} />}
        />
        <Route
          path="/contact"
          element={<ContactView introDetail={introDetail.contact} />}
        />
        <Route
          path="/register"

          element={<RegisterView />}
        />
        <Route
          path="/login"
          element={<LoginView />}
        />
        <Route
          path="/cart"
          element={<CartView />}
        />
        <Route
          path="/payment"
          element={<PaymentView />}
        />
        <Route path="/redirect" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}
export default App;
