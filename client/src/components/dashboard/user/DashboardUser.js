import React, { Component } from 'react';
import { Form, Col, Button, Tabs, Tab, Container, Row } from "react-bootstrap";
import { connect } from 'react-redux';
import axios from 'axios'
import User_invoices from './user_invoices'

const styling = {
	marginBottom: '25px',
}

const styling2 = {
	marginTop: '-50px',
}

const styling3 = {
	marginBottom: '25px',
	float: 'left'
}
const btn = {
	margin: '0 5px'
}

class DashboardUser extends Component {

	constructor(props) {
		super(props);
		this.state = {
			_id: "",
			firstName: "",
			lastName: "",
			email: "",
			phone: "phone number (optional)",
			zip: "zip",
			toggleSave: true,
			toggleEdit: false,
			recNews: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggle = this.toggle.bind(this);
		this.handleRec = this.handleRec.bind(this);

		axios.get('/api/current_user')
			.then(res => {
				this.setState({
					_id: res.data._id,
					firstName: res.data.firstName,
					lastName: res.data.lastName,
					email: res.data.email,
					phone:res.data.phone,
					zip:res.data.zip,
					recNews:res.data.recNews
				})
			})

			.catch(err => { console.log(err) })


	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		const { _id, firstName, lastName, email, phone, zip,recNews } = this.state;


		event.preventDefault();
		axios.post("api/user/info/modify", {
			_id,
			firstName,
			lastName,
			email,
			phone,
			zip,
			recNews
		})
			.catch(err => {
				alert("error " + err);
				return;
			})
		this.toggle();
	}
	toggle() {
		console.log(this.state.recNews)
		if (this.state.toggleSave
		) {
			this.setState({ toggleEdit: true, toggleSave: false })
		}
		else if (!this.state.toggleSave
		) {
			this.setState({ toggleEdit: false, toggleSave: true })

		}
	}

	handleRec() {

		if(this.state.recNews){
			this.setState({recNews: false })
		}
		else if(!this.state.recNews){
			this.setState({recNews: true })
		}

	}

	render() {


		return (
			<div id="main" style={styling2}>
				<div id="content">
					<section>
						<h2>
							Update information
						</h2>

						<div className="container" >
							<Form onSubmit={this.handleSubmit}>
								<div style={styling}>
									<Button type="submit" style={btn} variant="success" disabled={this.state.toggleSave} >Save</Button>
									<Button style={btn} variant="warning" onClick={this.toggle} disabled={this.state.toggleEdit} >Edit </Button>
								</div>

								<div>
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
								</div>

								<div style={styling3}>
									<Form.Check
										type="checkbox"
										label="Receive Newsletter"
										name='recNews'
										disabled={this.state.toggleSave}
										onChange={this.handleRec}
										checked={this.state.recNews}
									/>
								</div>

							</Form>
							<div style={styling}>
								<User_invoices />
							</div>

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