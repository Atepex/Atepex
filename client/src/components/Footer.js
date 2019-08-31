import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

const socialStyle = {
  padding: '10px',
};

const liStyle = {
  float: 'left',
  padding: '2px 5px',
};

const ulStyle = {
  display: 'inline-block',
  margin: '0',
  padding: '0'
};

const containerStyle = {
  textAlign: 'center'
};

const footerStyle = {
  backgroundColor: '#f4f4f4'
};

class Footer extends Component {
	render() {
		return (
			<footer style={footerStyle}>
				<div className="container clearfix" style={containerStyle}>
					<div className="col" id="col-1">
						<ul style={ulStyle}>
							<li style={liStyle}>
								<a href="/">Home</a>
							</li>
						</ul>
					</div>
					<div className="col" id="col-2">
          <ul style={ulStyle}>
              <li style={liStyle}>
								<a href="/Services">Services</a>
							</li>
						</ul>
					</div>
					<div className="col" id="col-3">
          <ul style={ulStyle}>
              <li style={liStyle}>
								<a href="/ContactUs">Contact Us</a>
							</li>
						</ul>
					</div>
					<div className="col" id="col-4">
          <ul style={ulStyle}>
              <li style={liStyle}>
								<a href="/AboutUs">About Us</a>
							</li>
						</ul>
					</div>
					<div>
						Follow Us On
						<div>
							<Link style={socialStyle} to="/facebook">
								<SocialIcon network="facebook" />
							</Link>
							<Link style={socialStyle} to="/instagram">
								<SocialIcon network="instagram" />
							</Link>
							<Link style={socialStyle} to="/yelp">
								<SocialIcon network="yelp" />
							</Link>
						</div>
					</div>
					<div id="copy">&#xa9; Designed and built by Team Atepex 2019</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
