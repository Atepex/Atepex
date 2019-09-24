import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './landing/Landing';
import Dashboard from './Dashboard/Dashboard';
import Footer from './Footer';
import ContactUs from './landing/contact/ContactUs';
import Services from './landing/Services';
import AboutUs from './landing/AboutUs';
import Schedule from './landing/Schedule';

const styles = {
	fontFamily: 'sans-serif',
	textAlign: 'center'
};



class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	//handle different routes throughtout the app

	render() {
		return (
			<BrowserRouter>
				<div style={styles}>
					<div id="wrapper">
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/ContactUs" component={ContactUs} />
						<Route exact path="/Services" component={Services} />
						<Route exact path="/AboutUs" component={AboutUs} />
						<Route exact path="/Schedule" component={Schedule} />
						<Route path="/Dashboard" component={Dashboard} />
						<Footer />
					</div>
				</div>
			</BrowserRouter>
		);
	}

}

export default connect(null, actions)(App);
