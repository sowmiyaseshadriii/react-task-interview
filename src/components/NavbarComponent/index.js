import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavItem, NavLink } from "reactstrap";

export default function NavbarComponent() {
  return (
    <div style={{height: "100vh"}}>     
      <Nav vertical>
        <NavItem>
          <NavLink href="#">Software Updates</NavLink>
        </NavItem>
        <hr style={{ width:"100%", margin: "5px"}}/>
        <NavItem>
          <NavLink href="#">Desktop</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}