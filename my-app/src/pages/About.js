import React, { Component } from 'react';
import {Container ,Tab, Nav, Item, Card, Button} from 'react-bootstrap';
import gitHubImg from "../assets/github.png";
import "../pages/About.css";

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="lebt-tabs-example" defaultActiveKey="first">
                                <Nav justify variant="tabs" className="flex-row mt-3">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">JavaScript</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">React</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Bootstrap</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">React-Bootstrap</Nav.Link>
                                </Nav.Item>
                                </Nav>


                            <Tab.Content>
                                <Tab.Pane eventKey="first" >
                                        <img src="https://media.proglib.io/wp-uploads/2018/03/EzgdmaCQuT84bgDL4fhXZS.jpg" height="550" width="950" className="d-block w-100 mt-2" />
                                        <p className="mt-2">JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[7] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                        <img src="https://miro.medium.com/max/3840/1*ivjksIhvAs7TUXbQCxAU0A.jpeg" height="550" width="950" className="d-block w-100 mt-2"/>
                                        <p className="mt-2">React (also known as React.js or ReactJS) is an open-source JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.[7][8] Redux[9] and React Router[10] are respective examples of such libraries. </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                        <img src="https://tpverstak.ru/wp-content/uploads/2020/07/v5-new-logo.png" height="550" width="950" className="d-block w-100 mt-2" />
                                        <p className="mt-2">Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                        <img src="https://miro.medium.com/max/2770/1*5Jv5YAGqu3zL5endb8dtBA.png" height="500" width="950" className="d-block w-100 mt-2" />
                                        <p className="mt-2">React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.
As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.</p>
                                </Tab.Pane>
                            </Tab.Content>
                </Tab.Container>
                {/* <footer>
                    <Nav>
                        <Nav.Item>
                        <a href="https://www.instagram.com/kolisnychenkodima/"><img class="social__logo" src={instaImg} alt="instaImg"/></a>
                            <Nav.Link>Instagram</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <a href="https://www.facebook.com/dima.kolisnychenko"><img class="social__logo" src={facebookImg} alt="facebookImg"/></a>    
                            <Nav.Link>Facebook</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </footer> */}
                <Card className="text-center" bg="warning">
                    <Card.Header>
                        GitHub <img src={gitHubImg} alt="gitHubImg" height="40" width="40"/>
                    </Card.Header>
                    <Card.Body>
                    <Card.Text>
                    Click here to see my github
                    </Card.Text>
                    <Button variant="danger" href="https://github.com/xkolisnychenkox/reactBlog">github</Button>
                </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default About;