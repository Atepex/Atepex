import React, { Component } from 'react';
import { Jumbotron, Container, Card, Button } from 'react-bootstrap';
import '../../css/app.css';

class JumbotronCmp extends Component {
	render() {
		return (
			<Jumbotron className="jumbo" fluid >
				<Container>
					<div className="row" id="card">
						<div className="col s10 m10 xs10">
							<Card id="schedule-card" className="text-center" bg="light" style={{ width: '18rem' }}>
								<Card.Header>VAUGHN'S A/C AND HEATING CAN HELP</Card.Header>
								<Card.Body>
								<Card.Text>
									Your Air Conditioning Repair, and Furnace Repair Specialist. Call Now For All Your HVAC Needs! (916) 458-1057
								</Card.Text>
								<Button variant="primary" href="/Schedule">Schedule Now</Button>
								</Card.Body>
							</Card>
						</div>
					</div>
				</Container>
			</Jumbotron>
		);
	}
}

export default JumbotronCmp;
