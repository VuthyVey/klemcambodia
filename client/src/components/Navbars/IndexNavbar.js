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
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Input
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-white");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      // if (
      //   document.documentElement.scrollTop > 299 ||
      //   document.body.scrollTop > 299
      // ) {
      //   setNavbarColor("");
      // } else if (
      //   document.documentElement.scrollTop < 300 ||
      //   document.body.scrollTop < 300
      // ) {
      //   setNavbarColor("navbar-transparent");
      // }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
         
            <Nav>
                 <img className="img-logo" alt="" src={require("assets/img/klemv2-01.png")} />
    
            </Nav>
         
         

          
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
  
        
            <NavItem>
              <NavLink
                href="/learn"
            
              > Learn
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/connect"
              >
             Connect
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/share"
              >
              Share
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/inspire"
              >
               Inspire
              </NavLink>
            </NavItem>     
           
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
