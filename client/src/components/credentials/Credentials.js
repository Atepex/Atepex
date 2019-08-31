import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import Login from './Login';
import Signup from './SignUp';

class Credentials extends Component {
    constructor(props) {
        super(props);
        this.state = {showSignUp: false};
        this.state.showSignUp = props.showSignUp || false;
    }
    
    renderContent() {
        if (this.state.showSignUp) {
            return <Signup onSignUpSubmit={() => this.setState({ showSignUp: false })}/> 
        }

        return <Login  onLoginSubmit={() => this.setState({ showSignUp: false })}/> 
    }
    
    render() {
        return (
            <div id="main">
				<div id="content">
					<section>
						<div className="container">
                            { this.renderContent() }
						</div>
					</section>
				</div>
			</div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(Credentials);