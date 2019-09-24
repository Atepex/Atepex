import React, { Component } from 'react';
import DashboardAdmin from './DashboardAdmin';
import DashboardUser from './DashboardUser';


class Dashboard extends Component {
	renderComponent() {
		console.log('auth ' + this.props.auth);
		return (
			this.props.auth.admin ? <DashboardAdmin /> : <DashboardUser />
		);
	}
	render() {
		return (
			<div id="main">
				<div id="content">
					<section>
						<div className="container">
							{this.renderComponent}
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default Dashboard;
