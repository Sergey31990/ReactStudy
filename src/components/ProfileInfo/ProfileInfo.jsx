import React from 'react';
import {Col, Row} from "react-bootstrap";
const ProfileInfo = (props) => {
    debugger;

    return <>
        <Row>
            <Col xs={2}></Col>
            <Col xs={10}>{props.fullName}</Col>
        </Row>
        <Row>
            <Col xs={6}>{props.photo.large}</Col>
            <Col xs={6}>{props.aboutMe}</Col>
        </Row>
    </>


}
export default ProfileInfo;