import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { getClients } from './ClientList';

const label = {
    float: 'left'
};

class ClientForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {clients: [] };
}
 componentDidMount() {
        getClients().then(val => {
            this.setState({clients: val});
        })
        
    }

    getClient(userID) {
      return this.state.clients.find(function(element) {
        if (element._id === userID) {
            return element;
        }
        return false;
    })
    }

    
    render() {   
        const userID = this.props.user;  
        const user = this.getClient(userID);
        return (
            <>
               <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFName">
                    <Form.Label style={label}>First Name:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      name="fname"
                      value={user ? user.firstName : ""}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridLName">
                    <Form.Label style={label}>Last Name:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      name="lname"
                      value={user ? user.lastName: ""}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label style={label}>Phone:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Phone"
                      name="phone"
                      value={user ? user.phone : ""}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label style={label}>Zip Code:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Zip Code"
                      name="zip"
                      value = {user ? user.zip : ""}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label style={label}>Email:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Email"
                      name="email"
                      value= {user ? user.email : ""}
                    />
                  </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </>
        )
    }
}

export default ClientForm;