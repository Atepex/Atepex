import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import CredentialField from '../credentials/CredentialField';
import validateEmails from '../../utilities/validateEmails';
import loginFields from '../credentials/loginFields';
import { SocialIcon } from 'react-social-icons';

const imgStyle = {
	height: '30px', 
	width: '30px',
	marginRight: '5px'
};

class Login extends Component {
	renderFields() {
		return _.map(loginFields, ({ name, label, fieldType }) => {
            console.log('field type ' + fieldType);
			return <Field key={name} component={CredentialField} fieldType={fieldType} name={name} label={label} />;
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onLoginSubmit)}>
					{this.renderFields()}
					<Link className="red btn-flat left white-text" to="/">
						Cancel
					</Link>
					<Link className="blue right btn-flat white-text" to="/Dashboard">
                        Login
                    </Link>
					<a className="white btn-flat right black-text waves-effect waves-red" href="/auth/google">
						<SocialIcon network="google" style={imgStyle}/>
						Login With Google
					</a>
					
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.email = validateEmails(values.email || '');

	_.each(loginFields, ({ name, label, fieldType }) => {
		if (!values[name]) {
			errors[name] = 'You must enter a value for the ' + [ label ];
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'loginForm',
	destroyOnUnmount: true
})(Login);
