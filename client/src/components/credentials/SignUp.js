import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import CredentialField from '../credentials/CredentialField';
import validateEmails from '../../utilities/validateEmails';
import signupFields from './signUpFields';
import ComboField from './ComboField';

const s = {
	color: 'black'
};

class SignUp extends Component {
	buildComboOptions(options) {
		return _.map(options, ({ value, lblOption }) => {
			console.log(value + ' ' + lblOption);
			return <option value={value}>{lblOption}</option>;
		});
	}

	buildComboBox(name, fieldType, label, options) {
		return (
			<div>
				<label>Testing Combo</label>
					<select>
						<option value="grapefruit">Grapefruit</option>
						<option value="lime">Lime</option>
						<option selected value="coconut">
							Coconut
						</option>
						<option value="mango">Mango</option>
					</select>
			</div>
		);
	}

	renderFields() {
		return _.map(signupFields, ({ name, label, fieldType, options }) => {
			if (options) {
				return this.buildComboBox(name, fieldType, label, options);
			}
			return <Field key={name} component={CredentialField} fieldType={fieldType} name={name} label={label} />;
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSignUpSubmit)}>
					{this.renderFields()}
					<Link className="red btn-flat left white-text" to="/">
						Cancel
					</Link>
					<button className="teal btn-flat right white-text" type="submit">
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.recipients = validateEmails(values.recipients || '');

	_.each(signupFields, ({ name, label, type }) => {
		if (!values[name]) {
			errors[name] = 'You must enter a value for the ' + [ label ];
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'signupForm',
	destroyOnUnmount: false
})(SignUp);
