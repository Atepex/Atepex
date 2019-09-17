import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ContactForm from './ContactForm';
import ContactFormReview from './ContactFormReview';

class ContactUs extends Component {
	state = {showFormReview: false};
	
	renderContent() {
		if (this.state.showFormReview) {
			return <ContactFormReview onCancel={() => this.setState({ showFormReview: false})} />
		}
		return <ContactForm onContactSubmit={() => this.setState({ showFormReview: true})} />
	}

    render() {
        return (
            <div id="main">
				<div id="content">
					<section>
						<div className="container">
							{this.renderContent()}
						</div>
					</section>
				</div>
			</div>
        );
    }
}

export default reduxForm({
	form: 'contactForm'
}) (ContactUs);