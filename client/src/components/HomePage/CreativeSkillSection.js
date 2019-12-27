import React, { Component } from 'react';
import { Container, Row, Col, CardFooter, Button, CardImg, CardImgOverlay,Card,CardTitle,CardText, CardBody } from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee, faThumbsUp, faSmile, faAward, faUser} from '@fortawesome/free-solid-svg-icons'

const FeatureCard = props => (
 
    <Card className="card-profile card-plain">
                  <div className="">
                    <a href="/learn/course/1" >
                      <img
                        alt="..."
                        src={require("assets/img/reaksmy.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    
                      <div className="author">
                      <CardTitle className="text-white text-left" tag="h4">{props.cardTitle}</CardTitle>
                      
                      </div>
                  
                    <p className="card-description text-left text-white">
                    {props.cardDescription}
                    </p>
                  </CardBody>
                </Card>


  )

export default class CreativeSkillSection extends Component {
  constructor(props) {
    super(props);

    this.state = {sectionBgColor: props.backgroundColor};
    console.log(props.backgroundColor)
  }

 

  render() {
    var mystyle = {
        backgroundColor: this.state.sectionBgColor,
      };
    var sectionTitle = "Creative Skills and Expertises"
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
                   <h1 className="txt-white" style={{textAlign: "right"}}>{sectionTitle}</h1>
                 <p className="txt-white" style={{textAlign: "right"}}>{sectionDescription}</p>
                 <br></br>
                 <Row>
                     <Col lg="4">
                     <FeatureCard cardTitle="HelloWorld" cardDescription="ksdfjldskjflkdsjflkdsjfkslfjsdkl"/>
                     </Col>
                     <Col lg="4">
                     <FeatureCard cardTitle="HelloWorld" cardDescription="ksdfjldskjflkdsjflkdsjfkslfjsdkl"/>
                     </Col>
                     <Col lg="4">
                     <FeatureCard cardTitle="HelloWorld" cardDescription="ksdfjldskjflkdsjflkdsjfkslfjsdkl"/>
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