import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styling/Question.css'
import { Row, Col } from 'react-bootstrap';
import Poll from "./Poll";
import PollService from "../Services/PollService"



function Question({ question, polls }) {
    const [toggle, setToggle] = useState(false);
    const [viewpolls, setPolls] = useState([]);
    

       useEffect(() => {
         setPolls(polls)
         setToggle(false)
      }, [polls]);


    const getPercentages = async (questionid) => {
        setToggle(!toggle);
        await PollService.GetPollPercentages(questionid).then((res) => {
            console.log(res);
            console.log(res.data);
            setPolls(res.data)
        })
        .catch((error) => {
            console.log(error.response.data);
        });
        
    };

    return (
        <div className="centered-wrapper">
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
                {viewpolls.map((viewpolls) => (
                    <Poll key={viewpolls.id} polls={viewpolls} percentages={getPercentages} toggle={toggle} />
                ))}
            </Row>
        </div>
    </div>
    );
}
export default Question;