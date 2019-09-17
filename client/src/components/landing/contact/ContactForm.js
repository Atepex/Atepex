import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import ContactField from './ContactField';
import validateEmails from '../../../utilities/validateEmails';
import { Button } from 'react-bootstrap';
import * as actions from '../../../actions/index';
import formFields from './formFields';

class ContactForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return <Field key={ name } component={ ContactField } type="text" name={ name } label={ label } />
        });
    }
    render() {
        return (
            <div>
                <h3>Contact Us</h3>
                <form onSubmit={this.props.handleSubmit(this.props.onContactSubmit)}>
                    {this.renderFields()}
                    <Button type="submit" variant="primary">Next</Button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    errors.email = validateEmails(values.email || "");
    _.each(formFields, ({ label, name }) => {
        if (!values[name]) {
            errors[name] = 'You must enter a value for the ' + [label];
        }
    });
    return errors;
}


export default reduxForm({
    validate,
    form: 'contactForm',
    destroyOnUnmount: false
})(ContactForm);