import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import logo from "../../logo.svg";
import {HeaderWrapper,NavUl,NavItem} from './styles'

// The Header creates links that can be used to navigate
// between routes.
const HeaderComponent = () => (
  <HeaderWrapper className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Guestlogix</h1>
    <nav className="navbar">
      <NavUl>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/add">Add</Link>
        </NavItem>
      </NavUl>
    </nav>
  </HeaderWrapper>
);

export default HeaderComponent;
