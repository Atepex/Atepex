import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/app.css';
import JumbotronCmp from './Jumbotron';
import Cards from './card/Cards';
import PhotoGallery from './photo/PhotoGallery';

class Landing extends Component {
	render() {
		return (
			<div id="main">
				<div id="content">
					<section>
						<div className="container">
							<JumbotronCmp />
						</div>
					</section>
					<section className="color">
						<div className="container">
							<Cards />
						</div>
					</section>
					<section>
						<div className="container">
							<h3 className="red-text">24 Hour Emergency Service Available</h3>
							<div>
							<p>
								We strive to be in constant communication with our 
								customers until the job is done. If you have questions 
								or special requests, just drop us a line. To get a free 
								quote, or for emergency service, please contact us at your 
								convenience. We look forward to serving you!
							</p>
							</div>
						</div>
					</section>
					<section className="color">
						<div className="container">
							<PhotoGallery />
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

export default connect(mapStateToProps)(Landing);