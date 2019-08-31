import React, { Component } from 'react';
import { Jumbotron, Container, Row, Column } from 'react-bootstrap';
import '../../css/app.css';

const jtStyle = {
	backgroundImage:
		'url(http://img1.wsimg.com/isteam/ip/97959f7c-8512-4f75-82d9-1ad2cbd2281a/2741c23d-dbaf-4834-85fc-92305a20cf76.JPG)',
	backgroundSize: 'cover',
	height: '80vh',
	backgroundRepeat: 'no-repeat',
	display: 'block',
	width: '100%'
};

const lineStyle = {
	borderColor: 'black'
};

const divStyle = {
	textAlign: 'center',
	display: 'inline-block'
	
}

class JumbotronCmp extends Component {
	render() {
		return (
			<Jumbotron fluid style={jtStyle}>
				<Container>
					<div className="row" id="card">
						<div className="col s10 m10 xs10">
							<div className="card-panel red darken-1" style={divStyle}>
								<h4 className="white-text">
									VAUGHN'S A/C AND HEATING <br /> CAN HELP
								</h4>
								<hr style={lineStyle} />
								<span className="white-text">
									Your Air Conditioning Repair, and Furnace Repair
									<br />
									Specialist. Call Now For All Your HVAC Needs!
									<br />
									(916) 458-1057
								</span>
								<div>
									<a href="/Schedule" className="blue darken-1 waves-effect waves-grey btn">
										Schedule Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</Jumbotron>
		);
	}
}

export default JumbotronCmp;
