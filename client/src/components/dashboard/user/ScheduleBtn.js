import _ from "lodash";
import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from "axios";

import {
    Button,
    Modal,
    Form,
    Col
} from "react-bootstrap";
import "../../../css/app.css";
import serviceItems from "../../landing/schedule/serviceItems";
import timeFields from "../../landing/schedule/times";
import states from "../../landing/schedule/states";


class JumbotronCmp extends Component {


    renderItems(items) {
        return _.map(items, ({ name, value }) => {
            return <option key={name} value={name}>{value}</option>;
        });
    }


    render() {
        return (
            <>
                <Button variant="primary" onClick={this.props.handleShow}>
                    Schedule Now
                 </Button>

                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Schedule Now</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.handleSubmitSchedule}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="modalFName">
                                    <Form.Control
                                        type="text"
                                        placeholder="First Name"
                                        name="fname"
                                        defaultValue={this.props.fname}
                                        required
                                        onChange={this.props.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="modalLName">
                                    <Form.Control
                                        type="text"
                                        placeholder="Last Name"
                                        name="lname"
                                        defaultValue={this.props.lname}
                                        required
                                        onChange={this.props.handleChange}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="modalPhone">
                                    <Form.Control
                                        type="text"
                                        placeholder="Phone"
                                        name="phone"
                                        defaultValue={this.props.phone}
                                        required
                                        onChange={this.props.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="modalEmail">
                                    <Form.Control
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        defaultValue={this.props.email}
                                        required
                                        onChange={this.props.handleChange}
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
                                        onChange={this.props.handleChange}
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
                                        onChange={this.props.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Control
                                        as="select"
                                        name="stateAbbrv"
                                        defaultValue={this.props.stateAbbrv}
                                        onChange={this.props.handleChange}
                                    >
                                        {this.renderItems(states)}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="modalZip">
                                    <Form.Control
                                        type="text"
                                        placeholder="Zip Code"
                                        name="zip"
                                        defaultValue={this.props.zip}
                                        required
                                        onChange={this.props.handleChange}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridServices">
                                    <Form.Control
                                        as="select"
                                        name="service"
                                        onChange={this.props.handleChange}
                                    >
                                        {this.renderItems(serviceItems)}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridTimes">
                                    <Form.Control
                                        as="select"
                                        name="time"
                                        onChange={this.props.handleChange}
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
                                    onChange={this.props.handleChange}
                                />
                            </Form.Group>
                            <Button
                                className="modalClose"
                                variant="secondary"
                                onClick={this.props.handleClose}
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
