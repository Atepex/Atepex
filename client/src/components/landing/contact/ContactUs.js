import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import * as actions from "../../../actions/index";
import axios from "axios";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      comments: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const { fname, lname, email, phone, comments } = this.state;
    //alert('A name was submitted: ' + fname + lname + phone + email + comments);
    //console.log(this.state);
    event.preventDefault();
    axios
      .post("/api/contact", { fname, lname, email, phone, comments })
      .then(result => {
        alert("Success!");
      })
      .catch(err => {
        alert("error " + err);
      });
  }

  render() {
    return (
      <div id="main">
        <div id="content">
          <section>
            <div className="container">
              <h2>Contact Us</h2>
              <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFName">
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      name="fname"
                      required
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridLName">
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
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="email"
                      required
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Control
                      type="text"
                      placeholder="Phone Number (optional)"
                      name="phone"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    placeholder="Comments"
                    name="comments"
                    rows="3"
                    required
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ContactUs;
