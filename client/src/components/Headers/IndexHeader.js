/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, FormGroup, Input, Button } from "reactstrap";
import YouTube from 'react-youtube';
import SignUpFormHomePage from 'components/HomePage/SignUpForm'
import ReactPlayer from 'react-player'

// core components

function IndexHeader() {
  var opts = {
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  }
  const description = "Klem is the complete package; from employment support to community support and education, everything is included in our service ecosystem.  We’re ready to help to prepare all the creatives in learning about the fundamentals of design to the business of design."
  
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          background:
          "rgb(229, 233, 242)"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          
    <Container >
      <Row>
        <Col lg="6" className="zero-left-padding">
          <h2 className="txt-blue">
            Supporting and Amplifying the Next Generation of Artists and Creatives
            </h2>
            <br />
            <p>{description}</p>
          <br />
           <SignUpFormHomePage />
        </Col>
        <Col md={{ size: 4, offset: 1 }} className="zero-left-padding">
        <br></br>
        <br></br>
        <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.facebook.com/klemcambodia/videos/2040336669446379/'
          width='130%'
          height='100%'
        />
      </div>
      
        </Col>
          
      </Row>
    </Container>
        
         
        </div>
       
        
      </div>
    </>
  );
}

export default IndexHeader;
