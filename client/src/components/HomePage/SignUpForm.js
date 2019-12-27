import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, FormGroup, Input, Button, Form } from "reactstrap";

export default class SignUpFormHomePage extends React.Component {
  constructor() {

    super();
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      isEmailAppropiateClass: '', //has-danger,
      isPasswordAppropiateClass: '',
      emailDangerMsg: '',
      passwordDangerMsg: ''
    }

  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    // Don't forget to check in the cloud 
      if (email.length == 0) {
          return {
              approved: false,
              msg: "Email is required"
          }
      } else if(!re.test(String(email).toLowerCase())) {
         return {
             approved: false,
             msg: "Email is invalid"
         }
      } else {
          return {
              approved: true
          }
      }  
}

validatePassword (password) {
    if (password.length == 0) {
        return {
            approved: false,
            msg: "Password required"
        }
    } else if (password.length < 8) {
        return {
            approved: false,
            msg: "Password is too short"
        }
    } else {
        return {
            approved: true
        }
    }
}

onChangeInput(e) {

    this.setState({
      [e.target.name]: e.target.value,
      isEmailAppropiateClass: "",
      isPasswordAppropiateClass: "",
      emailDangerMsg: "",
      passwordDangerMsg: ""
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    }

    var emailValidation = this.validateEmail(userData.email)
    var passwordValidation = this.validatePassword(userData.password);

    if (!emailValidation.approved) {
        this.setState({
            isEmailAppropiateClass: "has-danger",
            emailDangerMsg: emailValidation.msg
        })
        return;
    }

    if (!passwordValidation.approved) {
        this.setState({
            isPasswordAppropiateClass: "has-danger",
            passwordDangerMsg: passwordValidation.msg
        })
        return;
    }
    

    // axios.post('http://localhost:5000/exercises/add', exercise)
    //   .then(res => console.log(res.data));

    // window.location = '/';
  }

  render() {
    return (

        <div>
    <Form>
        <Row>
        <Col sm="5">
        <FormGroup className={this.state.isEmailAppropiateClass}>
          <Input placeholder="Email" type="email" name="email" id="email" value={this.email} onChange={this.onChangeInput}/>
          <div className="form-control-feedback">
                {this.state.emailDangerMsg}
            </div>
        </FormGroup>
        
      </Col>
      <Col sm="4" className="zero-left-padding">
        <FormGroup className={this.state.isPasswordAppropiateClass}>
          <Input
            className="form-control-danger"
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            value={this.password}
            onChange={this.onChangeInput}
          />
           <div className="form-control-feedback">
           {this.state.passwordDangerMsg}
                </div>
          
        </FormGroup>
      </Col>
      <Col lg="3" className="zero-left-padding"><Button className="btn-default ml-1" color="info" onClick={this.onSubmit} type="submit">
            Sign Up
      </Button></Col>
      
        </Row>
        </Form>
      </div>
   
    )
  }
}