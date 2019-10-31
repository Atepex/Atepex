import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

const st = {
  margin: "auto",
  width: "100%",
  padding: "10px"
};

class EmailClients extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      clients: {},
      subject: "",
      body: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getClients();
  }

  componentWillUpdate() {
    this.getClients();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    var answer = window.confirm("Are you sure you want to send this email?");
    if (!answer) {
      return;
    }

    const { subject, body, clients } = this.state;
    var recipients = clients.map(function(client) {
        return client.email;
    });

    axios.post("/api/sendnewsletter", {
        subject, body, recipients
    }).catch((err) => {
      alert(err);
      return;
    });

    alert('Email Sent');
    window.location.reload();
    
  }

  async getClients() {
    await axios.get("/api/getnewsclients").then(result => {
      this.setState({ clients: result.data });
    });
  }

  render() {
    return (
      <section>
        <div className="container" style={st}>
          <Row>
            <Col>
              <Form onSubmit={this.handleSubmit}>
                <Form.Label>
                  <h3>Email Clients</h3>
                </Form.Label>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridSubject">
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      required
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    placeholder="Body"
                    name="body"
                    rows="3"
                    required
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send Email
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

export default EmailClients;
