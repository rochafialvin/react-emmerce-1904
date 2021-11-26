import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar color="light" light>
      <NavbarBrand tag={Link} to="/">
        EMMERCE
      </NavbarBrand>

      <Nav className="ms-auto" navbar>
        <NavItem>
          {/* <Link to="/manage-products">Manage products</Link> */}
          <NavLink tag={Link} to="/manage-products">
            Manage Products
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
