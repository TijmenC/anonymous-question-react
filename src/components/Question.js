import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styling/Question.css'
import skip from '../images/skip.png'
import report from '../images/report.png';
import { Row, Col, Image, Figure, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Poll from "./Poll";



function Question( { question, polls }) {

    const [viewpolls, setpolls] = useState(polls);

    
    const getPercentages = (questionid) => {
        console.log(questionid)
    };

    return (
        <div className="rounded container">
            <Row className="justify-content-md-left">
                <Col md sm="8">
                    <b><h3>{question.title}</h3></b>
                </Col>
            </Row>
            <Row className="justify-content-md-left">
                <Col md sm="12">
                    <b><h8>{question.description}</h8></b>
                </Col>
            </Row>
            <Row className="justify-content-md-left">
            <br />
            {polls.map((polls) => (
            <Poll key={polls.id} polls={polls} percentages={getPercentages} />
          ))} 
            </Row>
        </div>
    );
}
export default Question;