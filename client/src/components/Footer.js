import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';


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
  backgroundColor: 'white'
};

class Footer extends Component {
	getURL(id) {
		switch(id) {
			case 'facebook': return 'https://www.facebook.com/Vaughsac/';
			case 'instagram': return '';
			case 'yelp': return 'https://www.yelp.com/biz/vaughns-a-c-and-heating-el-dorado-hills';
			default: return '';
		};
	}
	navToSocial(id) {
		const URL = this.getURL(id);
		if (URL !== '')
			window.open(URL, '_blank');
	}

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
							<SocialIcon className="socIcon" network="facebook" onClick={() => this.navToSocial('facebook')} />
							<SocialIcon className="socIcon" network="instagram" onClick={() => this.navToSocial('instagram')}/>
							<SocialIcon className="socIcon" network="yelp" onClick={() => this.navToSocial('yelp')} />
						</div>
					</div>
					<div id="copy">&#xa9; Designed and built by Team Atepex 2019</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
