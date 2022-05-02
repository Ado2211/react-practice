import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";


export class MainMenu extends React.Component {
    render() {
        return (
          <Navbar className="gradient d-block" expand="lg" >
            <Container >
              <Navbar.Brand className="text-light" href="#home">Brand</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
    
                <Nav className="ms-auto"  >
                  <Nav.Link  className="text-light me-4" href="#home">Blog <FontAwesomeIcon icon="coffee" /></Nav.Link>
                  <Nav.Link className="text-light me-4" href="#developers">Developers</Nav.Link>
                  <Nav.Link className="text-light me-4" href="#link">Developer Blog</Nav.Link>
                  <Nav.Link className="text-light" href="#link">Support</Nav.Link>
                </Nav>
              </Navbar.Collapse>
    
            </Container>
            <Container className="mt-4 mb-4 justify-content-center" style={{ height: '45px', width: '50px', }}>
    
              <NavDropdown style={{borderTopLeftRadius:'3px', borderBottomLeftRadius:'3px'}} className=" border border-1 rounded- bg-light bg-opacity-75 "
                title={<span className="text-dark me-4  ">All Products</span>} id="basic-nav-dropdown ">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
    
              <Form  className="d-flex ">
                <Form.Group controlId="formBasicPassword">
                  <Form.Control 
                  style={{ height: '42px', width: '500px', borderRadius:'0px', border:'none',  }} type="search" placeholder="Search" />
                </Form.Group>
                
                <Button onMouseEnter={Hover} onMouseLeave={Leave} type="submit" 
                style={{ border:'none', height: '42px', width: '80px', backgroundColor: 'white', color: 'grey',borderRadius:'0px', borderBottomRightRadius:'3px', borderTopRightRadius:'3px'}}>
                  <FontAwesomeIcon  icon={faSearch} />
                </Button>
              </Form>
            </Container>
            
          </Navbar>
        );
    }
}

function Hover(e) {
  e.target.style.background = 'lightblue';
  
}

function Leave(e) {
  e.target.style.background = 'white';
  
}