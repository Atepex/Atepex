import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardAdmin from './admin/DashboardAdmin';
import DashboardUser from './user/DashboardUser';


class Dashboard extends Component {
	renderComponent() {
		return (
			this.props.auth ? this.props.auth.admin ? <DashboardAdmin /> : <DashboardUser /> : <DashboardUser />
		);
		
	}
	render() {
		return (
			<>
			  {this.renderComponent()} 
			{	/*<DashboardAdmin />*/}
			</>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Dashboard);
