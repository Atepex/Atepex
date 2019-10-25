import React, { Component } from 'react';
import { Form, Col, Button, Tabs, Tab, Container, Row } from "react-bootstrap";
import { connect } from 'react-redux';
import axios from 'axios'
import User_invoices from './user_invoices'

class DashboardUser extends Component {

	constructor(props) {
		super(props);
		this.state = {
			_id:"",
			firstName: "",
			lastName: "",
			email: "",
			phone: "phone number (optional)",
			zip: "zip",
			toggleSave: true,
			toggleEdit: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggle = this.toggle.bind(this);
	
		axios.get('/api/current_user')
        .then(res => {this.setState({
			_id: res.data._id,
			firstName: res.data.firstName,
			lastName: res.data.lastName,
			email: res.data.email
		})})

        .catch(err => {console.log(err)})
		 

	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		const { _id,firstName, lastName, email, phone, zip } = this.state;
		

		event.preventDefault();
		axios.post("api/user/info/modify", {
			_id,
			firstName,
			lastName,
			email,
			phone,
			zip
		})
			.catch(err => {
				alert("error " + err);
				return;
			})
			this.toggle();
	}
	toggle() {
		if (this.state.toggleSave
		) {
			this.setState({toggleEdit: true, toggleSave: false})
		}
		else if (!this.state.toggleSave
		) {
			this.setState({toggleEdit: false, toggleSave: true})

		}


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
						<h2>
							Update information
						</h2>

						<div className="container">
							<Form onSubmit={this.handleSubmit}>
								<div style={styling}>
									<Button type="submit" style={btn} variant="success"  disabled={this.state.toggleSave} >Save</Button>
									<Button style={btn} variant="warning" onClick={this.toggle} disabled={this.state.toggleEdit} >Edit </Button>
								</div>
								<Form.Row>

									<Form.Group as={Col} controlId="formGridFName">
										<Form.Control
											type="text"
											placeholder={this.state.firstName}
											name="firstName"
											required
											disabled={this.state.toggleSave}
											onChange={this.handleChange}
										/>
									</Form.Group>
									<Form.Group as={Col} controlId="formGridLName">
										<Form.Control
											type="text"
											placeholder={this.state.lastName}
											name="lastName"
											required
											disabled={this.state.toggleSave}
											onChange={this.handleChange}
										/>
									</Form.Group>
								</Form.Row>
								<Form.Row>
									<Form.Group as={Col} controlId="formGridEmail">
										<Form.Control
											type="email"
											placeholder={this.state.email}
											name="email"
											required
											disabled={this.state.toggleSave}
											onChange={this.handleChange}
										/>
									</Form.Group>
									<Form.Group as={Col} controlId="formGridPhone">
										<Form.Control
											type="text"
											placeholder={this.state.phone}
											name="phone"
											disabled={this.state.toggleSave}
											onChange={this.handleChange}
										/>
									</Form.Group>
									<Form.Group as={Col} controlId="formGridZip">
										<Form.Control
											type="text"
											placeholder={this.state.zip}
											name="zip"
											disabled={this.state.toggleSave}
											onChange={this.handleChange}
										/>
									</Form.Group>
								</Form.Row>
							</Form>
							<User_invoices/>

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