import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoutAction } from "../../store/actions";
import { useDispatch } from "react-redux";

function Navigation() {
  const dispatch = useDispatch();
  const { username, role } = useSelector((state) => {
    return state.auth;
  });

  const onLogoutClick = () => {
    dispatch(logoutAction());
  };

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={Link} to="/">
        EMMERCE
      </NavbarBrand>

      <Nav className="me-auto" navbar>
        {username ? (
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              HELLO {username}
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem tag={Link} to="/cart">
                Cart
              </DropdownItem>
              {role === "admin" && (
                <DropdownItem tag={Link} to="/manage-products">
                  Admin
                </DropdownItem>
              )}
              <DropdownItem divider />
              <DropdownItem onClick={onLogoutClick}>Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        ) : (
          <>
            <NavItem>
              <NavLink tag={Link} to="/login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/register">
                Register
              </NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </Navbar>
  );
}

export default Navigation;
