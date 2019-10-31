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
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            fname: props.fname,
            lname: props.lname,
            street: "",
            city: "",
            stateAbbrv: "CA",
            zip: props.zip,
            comments: "",
            service: "",
            time: "",
            phone: props.phone,
            email: props.email
        };
        console.log(props)
        
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
    
    componentDidMount() {
        this.setShow(true);
    }

    renderItems(items) {
        return _.map(items, ({ name, value }) => {
            return <option key={name} value={name}>{value}</option>;
        });
    }


    render() {
        return (
            <>
                <Button variant="primary" onClick={this.hanldeShow}>
                    Schedule Now
                 </Button>

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
                                        defaultValue={this.state.fname}
                                        required
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="modalLName">
                                    <Form.Control
                                        type="text"
                                        placeholder="Last Name"
                                        name="lname"
                                        defaultValue={this.state.lname}
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
                                        defaultValue={this.state.phone}
                                        required
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="modalEmail">
                                    <Form.Control
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        defaultValue={this.state.email}
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
                                        defaultValue={this.state.zip}
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
