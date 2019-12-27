import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Input, Button } from "reactstrap";
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

export default class FeatureSection extends Component {
  constructor(props) {
    super(props);

    this.state = {sectionBgColor: props.backgroundColor};
    console.log(props.backgroundColor)
  }

 

  render() {
    var mystyle = {
        backgroundColor: this.state.sectionBgColor,
      };
    return (
        <div
        className="section-80"
        style={mystyle}
      >
        <div className="filter" />
        <div className="content-center">
            <br></br>
               <Container style={{width: "80%"}}>
                   <h2 style={{"text-align": "center"}} >Learn fromo the best in the field</h2>
                    <br></br>
                    <p>Get access to the best online video content for interdisiplinary fields of creatives. Interact with the best professionals and doers and discover the creative world's best-kept secrets.</p>
                    <h2 style={{"text-align": "center"}} >This is what KLEM Cambodia content provide</h2>  
                    <br></br>
                    <br></br>
                    <Row>
                        <Col>
                            <Feature title="Learn at your own pace " icon={faSmile}/>
                            <br></br>
                            <Feature title="Learn from the best " icon={faThumbsUp}/>
                         </Col>
                        <Col>
                        <Feature title="Expert instructor " icon={faUser}/>
                        <br></br>
                            <Feature title="Certificate" icon={faAward}/>
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