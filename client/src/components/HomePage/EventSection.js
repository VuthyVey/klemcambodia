import React, { Component } from 'react';
import { Container, Row, Col, CardFooter, Button, CardImg, CardImgOverlay,Card,CardTitle,CardText, CardBody } from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee, faThumbsUp, faSmile, faAward, faUser} from '@fortawesome/free-solid-svg-icons'

const EventCard = props => (
    
    <Card className="card-profile card-plain">
                  <div className="">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/reaksmy.jpg")}
                      />
                    </a>
                  </div>
                  
                </Card>

  )

export default class EventSection extends Component {
  constructor(props) {
    super(props);

    this.state = {sectionBgColor: props.backgroundColor};
    console.log(props.backgroundColor)
  }

 

  render() {
    var mystyle = {
        backgroundColor: this.state.sectionBgColor,
      };
    var sectionTitle = "Our Events"
    var sectionDescription = "How do you become a the best creatives person of yourself? What skills do you need and where can you learn them? Start your journey into learning the basics of design with some of our most popular courses.";
    return (
        <div
        className="section-80"
        style={mystyle}
      >
        <div className="filter" />
        <div className="content-center">
            <br></br>
               <Container style={{width: "80%"}}>
                   
                 <br></br>
                 <Row>
                     <Col lg="5">
                     <h1 className="text-black" style={{textAlign: "left"}}>{sectionTitle}</h1>
                    <br></br>
                    <br></br>
                    <p className="text-black" style={{textAlign: "left"}}>{sectionDescription}</p>
                     </Col>
                     <Col lg={{size: 3, offset:1}}>
                     <EventCard cardTitle="HelloWorld" cardDescription="ksdfjldskjflkdsjflkdsjfkslfjsdkl"/>
                     </Col>
                     <Col lg="3">
                     <EventCard cardTitle="HelloWorld" cardDescription="ksdfjldskjflkdsjflkdsjfkslfjsdkl"/>
                     </Col>
                    
                 </Row>
               </Container>
               <br></br>
               <br></br>
            </div>
            </div>
    )
  }
}