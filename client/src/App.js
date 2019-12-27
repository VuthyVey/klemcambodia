import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import ProfilePage from "./views/examples/ProfilePage"
import LandingPage from "./views/examples/LandingPage"
import RegisterPage from "./views/examples/RegisterPage"
import Index from "./views/Index"
import HomePage from "./views/HomePage";
import CourseInfo from "./views/CourseInfo"
function App() {
  return (
    <Router>
    
      {/* <Navbar /> */}
      <Route path="/home" component={HomePage} />
      <Route path="/profile" exact component={ProfilePage} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={RegisterPage} />
      <Route path="/user" component={LandingPage} />
      <Route path="/hello" component={Index} />
    
      <Route path="/learn/course/1" component={CourseInfo} />
    
    </Router>
  );
}

export default App;
