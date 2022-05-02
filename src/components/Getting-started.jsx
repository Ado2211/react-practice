import { faAngleRight, faCaretDown, faListAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Container, Dropdown, DropdownButton, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import developer from '../../src/assets/developer.jpg';
import release from '../../src/assets/release.jpg';
import userguide from '../../src/assets/user-guide.jpg';

export class GettingStarted extends React.Component {
    render() {
        return (
            <Container className="mt-3">
                <Container className=" d-inline-flex">
                    <p className="ps-1 fw-bold">Home <FontAwesomeIcon className="ms-3 me-3" icon={faAngleRight} />Getting Started </p>
                </Container>
                <p className="border-top ms-3"></p>
                <Container className="d-flex ps-3 ">

                    <Dropdown className="text-warning ">Getting Started <FontAwesomeIcon className="ms-0 me-3 ps-5" icon={faCaretDown}></FontAwesomeIcon>
                        <Dropdown.Item className="fw-bold " onMouseEnter={Shadow} onMouseLeave={ShadowOff}>Developer</Dropdown.Item>
                        <Dropdown.Item className="fw-bold" onMouseEnter={Shadows} onMouseLeave={ShadowsOff}>Release</Dropdown.Item>
                        <Dropdown.Item className="fw-bold" onMouseEnter={Shadowa} onMouseLeave={ShadowaOff}>User Guide</Dropdown.Item>

                        <Dropdown.Item className="ps-1 " href="#action/3.4">Separated link <FontAwesomeIcon className="ms-1 ps-5 " icon={faCaretDown}></FontAwesomeIcon></Dropdown.Item>
                    </Dropdown>
                    <Container >
                        <h1>Getting Started</h1>
                        <Container className="d-flex mt-4 ">
                            <Card className="me-4 cardOne ">
                                <Card.Body className="pb-0 mb-0 ">
                                    <Col className="d-inline-flex ">
                                        <img className="h-100 me-3" alt="smile" src={developer} />
                                        <Col >
                                            <h5 className="mb-0 mt-">Developer</h5>
                                            <p style={{ fontSize: '12px' }}>We're a new category, with lots of useful <br></br>information.</p>
                                        </Col>
                                    </Col>
                                </Card.Body>
                            </Card>

                            <Card className="me-4 cardTwo">
                                <Card.Body className="pb-0 mb-0 ">

                                    < Col className="d-inline-flex ">
                                        <img className="h-100 me-3" alt="smile" src={release} />
                                        <Col >
                                            <h5 className="mb-0 mt-">Release</h5>
                                            <p style={{ fontSize: '12px' }}>We're a new category, with lots of useful <br></br>information.</p>
                                        </Col>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </Container>

                        <Container className="d-flex mt-4 ">
                            <Card className="me-4 cardThree">
                                <Card.Body className="pb-0 mb-0 ">

                                    < Col className="d-inline-flex ">
                                        <img className="h-100 me-3" alt="smile" src={userguide} />
                                        <Col >
                                            <h5 className="mb-0 mt-">User Guide</h5>
                                            <p style={{ fontSize: '12px' }}>We're a new category, with lots of useful <br></br>information.</p>
                                        </Col>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </Container>

                    </Container>
                </Container>
            </Container>
        );
    }
}

function Shadow() {
    document.querySelector('.cardOne').className = 'shadow me-4 cardOne';  
}
function ShadowOff() {
    document.querySelector('.cardOne').className = 'me-4 cardOne';  
}

function Shadows() {
    document.querySelector('.cardTwo').className = 'shadow me-4 cardTwo';  
}

function ShadowsOff() {
    document.querySelector('.cardTwo').className = 'me-4 cardTwo';  
}

function Shadowa() {
    document.querySelector('.cardThree').className = 'shadow me-4 cardThree';  
}

function ShadowaOff() {
    document.querySelector('.cardThree').className = 'me-4 cardThree';
    
}