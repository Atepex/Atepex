import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { getClients } from "./ClientList";
import axios from "axios";

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

    this.state = {
      clients: [],
      edit: false,
      checked: false,
      userID: this.props.user,
      client: {},
      fname: '',
      lname: '',
      phone: '',
      zip: '', 
      email: ''
    };


    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    getClients().then(val => {
      this.setState({ clients: val });
    });
  }

  componentWillReceiveProps(props) {
    if (props.user !== this.state.userID) {
      this.setState({ userID: props.user });
      this.setState({ client: this.getClient(props.user) });
      this.setState({fname: this.getClient(props.user) ? this.getClient(props.user).firstName : ""});
      this.setState({lname: this.getClient(props.user) ? this.getClient(props.user).lastName : ""});
      this.setState({phone: this.getClient(props.user) ? this.getClient(props.user).phone : ""});
      this.setState({zip: this.getClient(props.user) ? this.getClient(props.user).zip : ""});
      this.setState({email: this.getClient(props.user) ? this.getClient(props.user).email : ""});
    }

    this.setState({edit: false});
  }
  handleCheckboxChange(event) {
    this.setState({ checked: event.target.checked });
  }

  getClient(userID) {
    return this.state.clients.find(function(element) {
      if (element._id === userID) {
        return element;
      }
      return false;
    });
  }

  handleDelete() {
    const { client } = this.state;
    const { _id } = client;

    
    axios
    .post("/api/deleteclient", {
      _id,
    })
    .catch(err => {
      alert("error " + err);
      return;
    });

    alert('user has been deleted');
      window.location.reload();

  }

  handleEditClick() {
    this.setState({ edit: true });
  }

  handleSubmit() {
    const { client, fname, lname, phone, zip, email } = this.state;
    const { _id } = client;
    
    axios
    .post("/api/modifyclient", {
      _id,
      fname,
      lname,
      phone,
      zip,
      email
    })
    .catch(err => {
      alert("error " + err);
      return;
    });

    this.setState({ edit: false });
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    //const userID = this.props.user;
    const { userID, client, edit, fname, lname, phone, zip, email } = this.state;
    const user = this.getClient(userID);

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
            variant="success"
            type="submit"
            disabled={!edit}
          >
            Save
          </Button>
          <Button style={btnStyle} variant="danger" onClick={this.handleDelete}>
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
                defaultValue={fname}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLName">
              <Form.Label style={label}>Last Name:</Form.Label>
              <Form.Control
                readOnly={!edit}
                type="text"
                placeholder="Last Name"
                name="lname"
                defaultValue={lname}
                onChange={this.handleChange}
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
                defaultValue={phone}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label style={label}>Zip Code:</Form.Label>
              <Form.Control
                readOnly={!edit}
                type="text"
                placeholder="Zip Code"
                name="zip"
                defaultValue={zip}
                onChange={this.handleChange}
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
                defaultValue={email}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
        </Form>
      </>
    );
  }
}

export default ClientForm;
