import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../css/app.css';
import { withGetScreen } from 'react-getscreen';
import * as actions from '../actions/index';



const btnStyle = {
	textAlign: 'center',
	marginLeft: '10px'
};

class Header extends Component {
	componentDidMount() {
		window.addEventListener('scroll', this.resizeHeaderOnScroll);
	}
	resizeHeaderOnScroll() {
		const distanceY = window.pageYOffset || document.documentElement.scrollTop,
			shrinkOn = 200,
			headerEl = document.getElementById('js-header');

		//window.innerWidth
		if (distanceY > shrinkOn && window.innerWidth > 700) {
			headerEl.classList.add('smaller');
		} else {
			headerEl.classList.remove('smaller');
		}
	}


	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return [
					<Link to="/Login">
						<div id="login" className="btn blue darken-1" style={btnStyle}>
							<i className="material-icons left">person</i>
							Login
						</div>
					</Link>,
					<Link to="/signup">
					<div id="signup" className="btn blue darken-1" style={btnStyle}>
						<i className="material-icons left">person</i>
						Sign Up
					</div>
				</Link>,

				];
			default:
				return (
						<a id="signout" className="btn blue darken-1" style={btnStyle} href="/api/logout">
							<i className="material-icons left">person</i>
							Sign Out
						</a>
				);
		}
	}

	render() {
		return (
			<header id="js-header">
				<div className="container clearfix">
					<Link to="/">
						<img id="logo" src={logo} />
					</Link>
					<navbar>
						<Link to="/">Home</Link>
						<Link to="/Services">Services</Link>
						<Link to="/ContactUs">Contact Us</Link>
						<Link to="/AboutUs">About Us</Link>
						{this.renderContent()}
					</navbar>
				
				</div>
			</header>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
