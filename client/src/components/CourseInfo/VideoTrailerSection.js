import React, { Component } from 'react';
import { Container, Row, Col, CardFooter, Button, CardImg, CardImgOverlay,Card,CardTitle,CardText, CardBody } from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee, faThumbsUp, faSmile, faAward, faUser} from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player';

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

export default class VideoTrailerSection extends Component {
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
    var trailerURL = this.state.courseData.trailerURL;
    return (
        <div
        className="section-80"
        style={mystyle}
      >
        <div className="filter" />
        <div className="content-center" style={{marginTop: "85px"}}>
            <br></br>
               <Container>
                <h1 className="txt-white" style={{textAlign: "left"}}>{title}</h1>
                 <h6 className="txt-white" style={{textAlign: "left"}}>{instructorName}</h6>
                 <br></br>
                 <Row>
                     <Col lg="8">
                     <ReactPlayer url={trailerURL} className="react-player" controls="true" />
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

