import React, { Component } from 'react';
import { Form, Col, Button, Label } from "react-bootstrap";
import { connect } from 'react-redux';
import axios from 'axios'
import User_invoices from './user_invoices'
import ScheduleBtn from './ScheduleBtn'

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

const bottomMargin = {
	marginBottom: '100px'
}
const btn = {
	margin: '0 5px'
}

const label = {
	float: "left"
};

class DashboardUser extends Component {

	constructor(props) {
		super(props);
		this.state = {
			_id: "",
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			zip: "",
			toggleSave: true,
			toggleEdit: false,
			recNews: false,
			// ScheduleBtn props
			show: false,
            street: "",
            city: "",
            stateAbbrv: "CA",
            comments: "",
            service: "",
            time: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggle = this.toggle.bind(this);
		this.handleRec = this.handleRec.bind(this);
		//ScheduleBtn functions
		this.handleShow =this.handleShow.bind(this);
		this.handleClose =this.handleClose.bind(this);
		this.handleSubmitSchedule = this.handleSubmitSchedule.bind(this);

		axios.get('/api/current_user')
			.then(res => {
				this.setState({
					_id: res.data._id,
					firstName: res.data.firstName,
					lastName: res.data.lastName,
					email: res.data.email,
					phone: res.data.phone,
					zip: res.data.zip,
					recNews: res.data.recNews
				})
			})

			.catch(err => { console.log(err) })

	}
		//ScheduleBtn functions

	setShow(value) {
		this.setState({ show: value });
    }

    handleClose = () => this.setShow(false);
	handleShow = () => this.setShow(true);

	
    handleSubmitSchedule(event) {
		const { firstName, lastName, street, city, stateAbbrv, zip, service, time, comments, phone, email } = this.state;
        const subject = "Schedule Appointment";
        const sendTo = 'matthewrenda14@gmail.com';
        axios
            .post("/api/schedulenow", {
                firstName,
                lastName,
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
	
	//**************************************************************** */
	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		const { _id, firstName, lastName, email, phone, zip, recNews } = this.state;


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

		if (this.state.recNews) {
			this.setState({ recNews: false })
		}
		else if (!this.state.recNews) {
			this.setState({ recNews: true })
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

									<ScheduleBtn fname={this.state.firstName}
												lname={this.state.lastName}
												zip= {this.state.zip}
												phone= {this.state.phone}
												email= {this.state.email}
												handleShow = {this.handleShow}
												handleClose = {this.handleClose}
												handleChange = {this.handleChange}
												handleSubmitSchedule = {this.handleSubmitSchedule}
												show = {this.state.show}
												street = {this.state.street}
												city = {this.state.city}
												stateAbbrv = {this.state.stateAbbrv}
												comments ={this.state.comments}
												service ={this.state.service}
												time = {this.state.time}/>
							
									<Form.Row>

										<Form.Group as={Col} controlId="formGridFName">
											<Form.Label style={label}>First Name:</Form.Label>
											<Form.Control
												type="text"
												defaultValue={this.state.firstName}
												placeholder="First Name"
												name="firstName"
												required
												disabled={this.state.toggleSave}
												onChange={this.handleChange}
											/>
										</Form.Group>
										<Form.Group as={Col} controlId="formGridLName">
											<Form.Label style={label}>Last Name:</Form.Label>
											<Form.Control
												type="text"
												defaultValue={this.state.lastName}
												placeholder="Last Name"
												name="lastName"
												required
												disabled={this.state.toggleSave}
												onChange={this.handleChange}
											/>
										</Form.Group>
									</Form.Row>
									<Form.Row>
										<Form.Group as={Col} controlId="formGridPhone">
											<Form.Label style={label}>Phone:</Form.Label>
											<Form.Control
												type="text"
												defaultValue={this.state.phone}
												placeholder="Phone"
												name="phone"
												disabled={this.state.toggleSave}
												onChange={this.handleChange}
											/>
										</Form.Group>
										<Form.Group as={Col} controlId="formGridZip">
											<Form.Label style={label}>Zip Code:</Form.Label>
											<Form.Control
												type="text"
												defaultValue={this.state.zip}
												placeholder="Zip Code"
												name="zip"
												disabled={this.state.toggleSave}
												onChange={this.handleChange}
											/>
										</Form.Group>
									</Form.Row>
									<Form.Row>
										<Form.Group as={Col} controlId="formGridEmail">
											<Form.Label style={label}>Email:</Form.Label>
											<Form.Control
												type="email"
												defaultValue={this.state.email}
												placeholder="Email"
												name="email"
												required
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
							<div style={bottomMargin}>
								<User_invoices _id={this.state._id}/>
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