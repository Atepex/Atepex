import _ from "lodash";
import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from "axios";

import {
  Jumbotron,
  Container,
  Card,
  Button,
  Modal,
  Form,
  Col
} from "react-bootstrap";
import "../../css/app.css";
import serviceItems from "./schedule/serviceItems";
import timeFields from "./schedule/times";
import states from "./schedule/states";

class JumbotronCmp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      fname: "",
      lname: "",
      street: "",
      city: "",
      stateAbbrv: "CA",
      zip: "",
      comments: "",
      service: "",
      time: "",
      phone: "",
      email: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const { fname, lname, street, city, stateAbbrv, zip, service, time, comments, phone, email } = this.state;
    const subject = "Schedule Appointment";
    const sendTo = 'emeryhaddy@gmail.com';

    console.log(email + phone);
    axios
    .post("/api/schedulenow", {
      fname,
      lname,
      street,
      city,
      stateAbbrv,
      zip,
      service,
      time,
      comments,
      subject,
      sendTo,
      phone,
      email
    })
    .catch(err => {
      alert("error " + err);
      return;
    });

    alert('Email Sent');
  }

  setShow(value) {
    this.setState({ show: value });
  }

  handleClose = () => this.setShow(false);
  hanldeShow = () => this.setShow(true);

  
  renderItems(items) {
    return _.map(items, ({ name, value }) => {
      return <option key={name }value={name}>{value}</option>;
    });
  }


  render() {
    return (
      <>
        <Jumbotron className="jumbo" fluid>
          <Container>
            <div className="row" id="card">
              <div className="col s10 m10 xs10">
                <Card
                  id="schedule-card"
                  className="text-center"
                  bg="light"
                  style={{ width: "18rem" }}
                >
                  <Card.Header>VAUGHN'S A/C AND HEATING CAN HELP</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Your Air Conditioning Repair, and Furnace Repair
                      Specialist. Call Now For All Your HVAC Needs! (916)
                      458-1057
                    </Card.Text>
                    <Button variant="primary" onClick={this.hanldeShow}>
                      Schedule Now
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Container>
        </Jumbotron>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Schedule Now</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="modalFName">
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    required
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="modalLName">
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    required
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="modalPhone">
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    required
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="modalEmail">
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    name="email"
                    required
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="modalStreet">
                  <Form.Control
                    type="text"
                    placeholder="Street"
                    name="street"
                    required
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="modalCity">
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    required
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control
                    as="select"
                    name="stateAbbrv"
                    defaultValue={this.state.stateAbbrv}
                    onChange={this.handleChange}
                  >
                    {this.renderItems(states)}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="modalZip">
                  <Form.Control
                    type="text"
                    placeholder="Zip Code"
                    name="zip"
                    required
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
              <Form.Group as={Col} controlId="formGridServices">
                  <Form.Control
                    as="select"
                    name="service"
                    onChange={this.handleChange}
                  >
                    {this.renderItems(serviceItems)}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridTimes">
                  <Form.Control
                    as="select"
                    name="time"
                    onChange={this.handleChange}
                  >
                    {this.renderItems(timeFields)}
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  placeholder="Comments"
                  name="comments"
                  rows="3"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button
                className="modalClose"
                variant="secondary"
                onClick={this.handleClose}
              >
                Cancel
              </Button>
              <Button className="modalSubmit" variant="primary" type="submit">
                Submit*
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <p className="modalFooterText">
              *Please note that someone will be in contact with you to confirm
              the appointment. Submitting this request DOES NOT automatically
              schedule the appoiment for the selected time.
            </p>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(JumbotronCmp);
