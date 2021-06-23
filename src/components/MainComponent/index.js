import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "../Content";
import { Container } from 'reactstrap';

export default function MainComponent() {
  return (
    <div>     
        <div className="py-3">
            <p className="largetext my-0">Software Updates</p>
            <p className="my-0  smalltext" style={{color: "gray"}}>System/Software</p>
        </div>
        <div className="py-3">
            <div style={{backgroundColor: "#fff"}}>
                 <Content/>
            </div>
        </div>
    </div>
  );
}