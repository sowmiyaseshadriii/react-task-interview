import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row,Col, CardImg, Card, CardText, CardBody, CardGroup } from 'reactstrap';
import moment from 'moment';
const Content = () => {
    const [tasks, setTasks] = useState([]);


    const fetchTasks = async () => {
       const res = await fetch('./data.json')
       const data = await res.json();
       setTasks(data);

    }

    useEffect(() => {
       fetchTasks();
    }, []);

    console.log(tasks);

    const capitalizeFirstLetter = (string) => {
        const removecsplchar = string.replace("_"," ");
        return removecsplchar.charAt(0).toUpperCase() + removecsplchar.slice(1).toLowerCase();
    }

  return(
      <div>
           { 
             tasks.equipments && tasks.equipments.map(elm=>{
                return(
                    <div>
                        <Row>
                              <Col sm="3" md="2" xs="3" className="my-2">
                                {elm.type == "Treadmill" ? 
                                <img className="mx-auto image" style={{display: "block"}} src="./images/Treadmill.png"/> :
                                <img className="mx-auto image" style={{display: "block"}} src="./images/Elliptical Cross-Trainers.png"/>
                                 }
                              </Col>  
  
                                <Col>
                                    <CardGroup>
                                        <Card>
                                            <CardBody>
                                            <CardText className="my-2"> 
                                                <div>{elm.name}</div>
                                                <div className= "smalltext" style={{color: "gray"}}>{elm.serial_no}</div></CardText>
                                            </CardBody>
                                        </Card>
                                        <Card>
                                            <CardBody>
                                            <CardText> <div>{elm.screen_type}</div></CardText>
                                            </CardBody>
                                        </Card>
                                        <Card>
                                            <CardBody>
                                            <CardText> {elm.update.status=="SUCCESS" ? 
                                                                    <div className="mediumtext" style={{color: "Green"}}>Update Successful</div>
                                                                    :
                                                                    <div className="mediumtext" style={{color: "Red"}}>Update on &nbsp;
                                                                        {moment(elm.update.date).format("MMMM DD YYYY") } 
                                                                        &nbsp; was unsuccessful    
                                                                    </div>
                                                                }
                                                                <div  className= "smalltext" style={{color: "gray"}} >{capitalizeFirstLetter(elm.status)}</div></CardText>
                                            </CardBody>
                                        </Card>
                                    </CardGroup>           
                                </Col>

                        </Row>
                        <hr/>
                        
                    </div>
                )
             })
            }
       </div>
    )
 }
    
export default Content;