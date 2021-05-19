import React from "react";

import { Navbar, NavbarBrand, Container } from "reactstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar color="dark" dark className="mb-5">
        <Container>
          <NavbarBrand href="/">Shopping List</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
