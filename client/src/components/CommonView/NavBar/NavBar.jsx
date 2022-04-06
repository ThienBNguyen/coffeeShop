import React, { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { connect } from "react-redux"
import LogoutView from "../../userView/LogoutView"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch, useSelector } from "react-redux"
const NavBar = ({ auth }) => {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart;
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
  }
  const authLinks = (
    <Fragment>
      <NavLink className="nav-link" to="/register">
        Register
          </NavLink>
      <NavLink className="nav-link" to="/login">
        Log In
          </NavLink>
    </Fragment>
  )

  const logout = (
    <Fragment>
      <LogoutView />

    </Fragment>
  )
  return (
    <Navbar
      bg="black"
      expand="lg"
      variant="dark"
      className="ftco-navbar-light"
      fixed="top"
    >
      <Navbar.Brand href="/">
        TH <small>Coffee</small>

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <h5 className="navbar-text mr-3"><strong>{auth && auth.user ? `welcome ${auth.user.name}` : ""}</strong></h5>
        <Nav className="m-auto">
          <NavLink exact="true" to="/home" className="nav-link" activeClassName="link-active">
            Home
          </NavLink>
          <NavLink to="/Menu" className="nav-link" activeClassName="link-active">
            Menu
          </NavLink>
          <NavLink to="/Service" className="nav-link" activeClassName="link-active">
            Service
          </NavLink>
          <NavLink to="/Blog" className="nav-link" activeClassName="link-active">
            Blog
          </NavLink>
          <NavLink to="/About" className="nav-link" activeClassName="link-active">
            About
          </NavLink>
          <NavLink className="nav-link" to="/Contact">
            Contact
          </NavLink>
          {auth && auth.isAuthenticated ? logout : authLinks}
          <NavLink className="nav-link" to="/cart">
            <ShoppingCartIcon /> <span>cart</span>  <span>{getCartCount()}</span>
          </NavLink>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth
})
export default connect(mapStateToProps, null)(NavBar);
