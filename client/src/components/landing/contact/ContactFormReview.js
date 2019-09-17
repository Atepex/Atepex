import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../actions/index';
import { Button } from 'react-bootstrap';


const ContactFormReview = ({onCancel, formValues, submitContact, histor}) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
       return (
           <div key={name}>
               <label className="review-label">{label}: </label>
               <label className="review-name">{formValues[name]}</label>
           </div>
       );
    });
    return (
        <div>
            <h4>Please confirm your entries</h4>
            {reviewFields}
            <Button variant="warning" onClick={onCancel}>Cancel</Button>
            <Button variant="success" onClick={() => actions.submitContactUs(formValues)}>Send</Button>
            
        </div>
    );
};

function mapStateToProps(state) {
    return {
        formValues: state.form.contactForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(ContactFormReview));