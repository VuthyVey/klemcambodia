import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Label, Input, CardFooter, Button, CardImg, CardImgOverlay,Card,CardTitle,CardText, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';

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

  );
  

export default class InstructorProfileSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
        sectionBgColor: props.backgroundColor,
        courseData: props.courseData
    };
    console.log(props.backgroundColor);
  }
 

  render() {
    var mystyle = {
        backgroundColor: this.state.sectionBgColor,
      };
    var title = this.state.courseData.title
    var instructorName = this.state.courseData.instructor.fullName;
    var courseDescription = this.state.courseData.description;
    var courseData = this.state.courseData;
    return (
        <div
        className=""
        style={mystyle}
      >
        <div className="filter" />
        <div className="content-center">
                
               <Container>
              
                <Row>
                    <Col lg={{size: "3", offset: "1"}}>
                    <Card className="card-profile card-plain">
                      <div className="">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            src={courseData.instructor.portraitPicURL}
                          />
                        </a>
                      </div>
                      
                     </Card>
                    </Col>
                    <Col lg={{size: "6" }}>
                    <h3 className="txt-black" style={{textAlign: "left"}}>Your Instructor</h3>
                      <h6>{instructorName}</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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

