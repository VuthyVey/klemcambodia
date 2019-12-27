import React, { Component } from 'react';
import { Container, Row, Col, CardImg, CardImgOverlay,Card,CardTitle,CardText, CardBody } from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee, faThumbsUp, faSmile, faAward, faUser} from '@fortawesome/free-solid-svg-icons'

const Feature = props => (
    
    <Row>
        <Col lg="2">
        <div className="icon feature-icon">
            {/* <i className={props.iconClass} /> */}
           {/* <FontAwesomeIcon icon="check-square" /> */}
           <FontAwesomeIcon size="lg" icon={props.icon} />
            </div>
           
        </Col>
        <Col>
            
    <div className="title">
      <h4 className="feature-title">{props.title}</h4>
      <p className="description">
        {props.description}
      </p>
     
    </div>
        </Col>
    </Row>

  )

export default class BusinessCreativeSection extends Component {
  constructor(props) {
    super(props);

    this.state = {sectionBgColor: props.backgroundColor};
    console.log(props.backgroundColor)
  }

 

  render() {
    var mystyle = {
        backgroundColor: this.state.sectionBgColor,
      };
    var sectionTitle = "The Business of Creative"
    var sectionDescription = "How do you start a creative business?What does it take to run a business? And how do you find clients?  Whether you are starting a new creative venture or leveling up an existing one,  Klem will provide the best tool and setup from the expert in the business to help you along the way.";
    return (
        <div
        className="section-80"
        style={mystyle}
      >
        <div className="filter" />
        <div className="content-center">
            <br></br>
               <Container style={{width: "80%"}}>
                   <h1 className="txt-white">{sectionTitle}</h1>
                 <p className="txt-white">{sectionDescription}</p>
                 <br></br>
                 <Row>
                     <Col lg="4">
                     <Card className="card" inverse>
                        <CardImg width="100%" src={require("assets/img/reaksmy.jpg")} alt="Card image cap" />
                        <div className="img-filter"/>
                        <CardImgOverlay>
                        
                        </CardImgOverlay>
                        
                    </Card>
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        
                        </Card>
                        </Col>
                     <Col>
                     <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        
                        </Card>
                        <Card className="card" inverse>
                        <CardImg width="100%" src={require("assets/img/reaksmy.jpg")} alt="Card image cap" />
                        <div className="img-filter"/>
                        <CardImgOverlay>
                        
                        </CardImgOverlay>
                        
                    </Card>
                     </Col>
                     <Col>
                     <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        
                        </Card>
                        <Card className="card" inverse>
                        <CardImg width="100%" src={require("assets/img/reaksmy.jpg")} alt="Card image cap" />
                        <div className="img-filter"/>
                        <CardImgOverlay>
                        
                        </CardImgOverlay>
                        
                    </Card>
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