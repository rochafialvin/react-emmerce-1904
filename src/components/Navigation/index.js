import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={Link} to="/">
        EMMERCE
      </NavbarBrand>

      <Nav className="ms-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/manage-products">
            Admin
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/login">
            Login
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
