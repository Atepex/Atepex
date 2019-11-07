import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardAdmin from './admin/DashboardAdmin';
import DashboardUser from './user/DashboardUser';
import InvalidPage from '../InvalidPage'

class Dashboard extends Component {
	renderComponent() {
		return (
			this.props.auth ? this.props.auth.admin ? <DashboardAdmin /> : <DashboardUser /> : <InvalidPage />
		);
		
	}
	render() {
		return (
			<>
			  {this.renderComponent()} 
			</>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Dashboard);
