import React, { Component, useState  } from 'react';
import { Container, Row, Col, FormGroup, Modal, Label, Input, CardFooter, Button, CardImg, CardImgOverlay,Card,CardTitle,CardText, CardBody } from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee, faThumbsUp, faSmile, faAward, faUser} from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import instructorProfileSection from 'components/CourseInfo/InstructorProfileSection'



  function LessonList (props) {
    const lessonsList = props.courseData.lessonsList
    
    const [modal, setModal] = useState(false);
    const [lesson, setLesson] = useState(lessonsList[0])
    var watchingLesson = lessonsList[0];
    var isOpen = false;
    
    function toggleModal(lesson) {
      setLesson(lesson);
      setModal(!modal);
    };

    function nextVideo(currentLesson) {
      console.log(currentLesson)
      if (currentLesson.order == lessonsList.length) {
        toggleModal(lesson)
        setLesson(lessonsList[0]); 
      } else {
        setLesson(lessonsList[currentLesson.order]); 
      }
      
    }

    


    

    const lessonItemList = lessonsList.map((lesson) =>
        <li>
        <Row>
          <Col className="" lg="2" md="4" xs="4">
            {/* <img
              alt="..."
              className="img-circle img-no-padding img-responsive"
              src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
            /> */}
            <h5 style={{textAlign: "right"}}>{lesson.order}</h5>
          </Col>
          <Col  lg="10" md="4" xs="4">
            <Link onClick={() => toggleModal(lesson)}>
            <h6>
              {lesson.title} <br />
              <small>{lesson.order} Lesson</small>
            </h6>
            </Link>
          </Col>
          
        </Row>
        <hr />
      </li>
    );

    return (
      <Row>
      <Col className="" md="12">
        <ul className="list-unstyled follows">
          {lessonItemList}
          
        </ul>
      </Col>

      <Modal  isOpen={modal} className="modal-lg" toggle={toggleModal}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                   {lesson.title}
                  </h5>
                </div>
                <div className="modal-body">
                <Row>
                     <Col lg="12">
                     <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={lesson.link}
          width='100%'
          height='100%'
        />
      </div>
                     </Col>
                 </Row>
                </div>
                <div className="modal-footer">
                  <div className="left-side">
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={toggleModal}
                    >
                      Done
                    </Button>
                  </div>
                  <div className="divider" />
                  <div className="right-side">
                    <Button className="btn-link" color="danger" type="button" onClick={() => nextVideo(lesson)}>
                      Next
                    </Button>
                  </div>
                </div>
              </Modal>
    </Row>
    
    )
  }

  

export default class CourseDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
        sectionBgColor: props.backgroundColor,
        courseData: props.courseData
    };
    console.log(props.backgroundColor);

    // this.toggleModal = this.toggleModal.bind(this);

    // const [modal, setModal] = React.useState(false);
    // const toggleModal = () => {
    // setModal(!modal);
  // };
    
  }


  render() {
    var mystyle = {
        backgroundColor: this.state.sectionBgColor,
      };
    var title = this.state.courseData.title
    var instructorName = this.state.courseData.instructor.fullName;
    var courseDescription = this.state.courseData.description;
    var courseData = this.state.courseData
    return (
        <div
        className=""
        style={mystyle}
      >
        <div className="filter" />
        <div className="content-center" style={{marginTop: "40px"}}>
                
               <Container>
               
                <Row>
                    <Col lg="5">
                    <h3 className="txt-black" style={{textAlign: "left"}}>Course Description</h3>
                    <p className="txt-black" style={{textAlign: "left"}}>{courseDescription}</p>

                    <h3 className="txt-black" style={{textAlign: "left"}}>Lessons</h3>

                    <br></br>
                    <LessonList courseData={courseData}/>
                    </Col>
                    <Col lg="6">
                    <Row>
                    <Col lg={{size: "5", offset: "1"}}>
                  
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

