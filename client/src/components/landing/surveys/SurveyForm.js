import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../../utilities/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
	renderFields() {
		return _.map(formFields, ({ name, label }) => {
			return <Field key={name} component={SurveyField} type="text" name={name} label={label} />;
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link className="red btn-flat left white-text" to="/surveys">Cancel</Link>
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

    errors.recipients = validateEmails(values.recipients || "");

    _.each(formFields, ({ name, label }) => {
        if (!values[name]) {
            errors[name] = 'You must enter a value for the ' + [label]; 
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
