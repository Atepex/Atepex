import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { getClients } from "./ClientList";

const label = {
  float: "left"
};

const btnStyle = {
  padding: "10px",
  margin: "10px"
};
class ClientForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { clients: [], edit: false, checked: false };

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    getClients().then(val => {
      this.setState({ clients: val });
    });
  }

  handleCheckboxChange(event) {
    this.setState({checked: event.target.checked});
  }

  getClient(userID) {
    return this.state.clients.find(function(element) {
      if (element._id === userID) {
        return element;
      }
      return false;
    });
  }

  handleEditClick() {
    this.setState({ edit: true });
  }

  handleSubmit() {
    this.setState({ edit: false });
  }

  render() {
    const userID = this.props.user;
    const user = this.getClient(userID);
    const { edit } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Button
            style={btnStyle}
            variant="warning"
            disabled={edit}
            onClick={this.handleEditClick}
          >
            Edit
          </Button>
          <Button
            style={btnStyle}
            variant="primary"
            type="submit"
            disabled={!edit}
          >
            Save
          </Button>
          <Button style={btnStyle} variant="danger">
            Delete
          </Button>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFName">
              <Form.Label style={label}>First Name:</Form.Label>
              <Form.Control
                readOnly={!edit}
                type="text"
                placeholder="First Name"
                name="fname"
                defaultValue={user ? user.firstName : ""}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLName">
              <Form.Label style={label}>Last Name:</Form.Label>
              <Form.Control
                readOnly={!edit}
                type="text"
                placeholder="Last Name"
                name="lname"
                defaultValue={user ? user.lastName : ""}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label style={label}>Phone:</Form.Label>
              <Form.Control
                readOnly={!edit}
                type="text"
                placeholder="Phone"
                name="phone"
                defaultValue={user ? user.phone : ""}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label style={label}>Zip Code:</Form.Label>
              <Form.Control
                readOnly={!edit}
                type="text"
                placeholder="Zip Code"
                name="zip"
                defaultValue={user ? user.zip : ""}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={label}>Email:</Form.Label>
              <Form.Control
                readOnly={!edit}
                type="text"
                placeholder="Email"
                name="email"
                defaultValue={user ? user.email : ""}
              />
            </Form.Group>
          </Form.Row>
        </Form>
      </>
    );
  }
}

export default ClientForm;
