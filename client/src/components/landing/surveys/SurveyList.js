import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';


class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
    }
    
    showImage({yes, no}) {
        if (yes > no) {
            return 'insert_emoticon';
        } else if (yes === no) {
            return 'sentiment_neutral'
        }
        return 'sentiment_very_dissatisfied';
    }

	renderSurveys() {
		return this.props.surveys.reverse().map((survey) => {
			return (
                <div className="col s4">
				<div className="card teal white-text" key={survey._id}>
					<div className="card-content">
						<span className="card-title">{survey.title} <i className="material-icons right">{this.showImage(survey)}</i></span>
						<p>{survey.body}</p>
						<p className="right">Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
						<div className="card-action">
							<a>Yes: {survey.yes}</a>
							<a>No: {survey.no}</a>
						</div>
					</div>
				</div>
                </div>
			);
		});
	}

	render() {
		return <div className="row"><div>{this.renderSurveys()}</div></div>;
	}
}

function mapStateToProps({ surveys }) {
	return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
