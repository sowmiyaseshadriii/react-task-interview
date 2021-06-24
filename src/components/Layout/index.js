import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavbarComponent from '../NavbarComponent';
import MainComponent from '../MainComponent';

const Layout = (props) => {
    return (
      <div>
      <Container-fluid>
        <Row style={{backgroundColor: "#f8f9fa"}}>
            <Col style={{margin: "20px"}}>
             <img src="./images/logo.png"/>
             <img src="./images/avatar.png" style={{float: "right"}}/>
            </Col>
        </Row>
        <Row>
           <Col xs="3" style={{ backgroundColor:"lightgray"}}>
              <NavbarComponent/>
           </Col>
           <Col style={{backgroundColor: "#e9ecef"}}>
              <MainComponent/>
              <div className="smalltext" 
               style={{ color: "darkgray"}}>&#169; 2021 Life Fitness. Terms Of Use And Privacy Policy All Rights Reserved.</div>
           </Col>
         </Row>       
       </Container-fluid>
       </div>
    )
}

export default Layout;