import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Groups from "./components/Groups/Groups";
import clases from "./components/Profile/Profile.module.css";
import {Route} from "react-router-dom";
import DialogContainer from "./components/Dialog/DialogContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileInfoContainer from "./components/ProfileInfo/ProfileInfoContainer";
import Profile from "./components/Profile/Profile";

//Route следят за URL и отрисовывают ту компоненту которя указана, а URL меняют NavLink
const App = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Header/>
                </Col>
            </Row>
            <Row>
                <Col xs={2}><Nav/></Col>
                <Col xs={10}>
                    <div className={clases.content}>
                        <Route exact path="/" component={News}/>
                        <Route path="/profile" render={() => (<Profile/>)}/>
                        <Route path="/profileInfo/:userId" render={() => (<ProfileInfoContainer/>)}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/groups" component={Groups}/>
                        <Route path="/users" render={() => (<UsersContainer/>)}/>
                        <Route path="/dialog" render={() => (<DialogContainer/>)}/>
                    </div>
                </Col>


            </Row>
        </Container>
    )
};

export default App;
