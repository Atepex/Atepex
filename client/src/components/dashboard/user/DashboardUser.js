import React, { Component } from 'react';
import { Form, Col, Button, Tabs, Tab, Container, Row } from "react-bootstrap";
import { connect } from 'react-redux';
import ViewClientInfo from "./ViewClientInfo";
import axios from 'axios';

class DashboardUser extends Component {

	constructor(props) {
		super(props);
		this.state = {
			fname: "",
			lname: "",
			email: "",
			phone: "",
			zip: ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		const { fname, lname, email, phone, zip } = this.state;


		event.preventDefault();
		console.log(this.state);

		
		axios.post("/api/user/invoice",{
			fname,
			lname,
			email,
			phone,
			zip
		})
			.catch(err => {
				alert("error " + err);
				return;
			})
			
	}

	render() {

		const styling = {
			marginBottom: '25px',
		}
		const btn = {
			margin: '0 5px'
		}
		return (
			<div id="main">
				<div id="content">
					<section>
						<div style={styling}>
							<Button style={btn} variant="success">Save Invoice</Button>
							<Button style={btn} variant="warning">Edit Invoice</Button>
						</div>
						<div className="container">
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
									<Form.Group as={Col} controlId="formGridZip">
										<Form.Control
											type="text"
											placeholder="Zip"
											name="zip"
											onChange={this.handleChange}
										/>
									</Form.Group>
								</Form.Row>
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

export default connect(mapStateToProps)(DashboardUser);