import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Col, Button } from "react-bootstrap";
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
    const subject = "Contact Us";
    event.preventDefault();

    const sendTo = 'emeryhaddy@gmail.com'
    if (sendTo.includes("@")) {
      axios
        .post("/api/contact", {
          fname,
          lname,
          email,
          phone,
          comments,
          subject,
          sendTo
        })
        .catch(err => {
          alert("error " + err);
          return;
        });
    } else {
      alert("Unable to send email. Please retry");
      return;
    }
    alert("Email Sent");
    window.location.reload();
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(ContactUs);
