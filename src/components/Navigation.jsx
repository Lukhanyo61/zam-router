
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  
  MDBCollapse
} from 'mdb-react-ui-kit';
function Navigation() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="navigation">
      

      <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <NavLink active aria-current='page' to="/home">
                Home
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink  to="/about">About</NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink  to="/beneficiary">Beneficiary</NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink  to="/contact" >
               Contact
              </NavLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  );
}

export default Navigation;
