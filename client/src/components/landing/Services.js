import _ from 'lodash';
import React, { Component } from 'react';
const serv = [
	{name: 'Text 1'},
	{name: 'Text 2'},
	{name: 'Text 3'}
]

class Services extends Component {
	renderContent()
	{
		return _.map(serv, ({name}) => {
			return (
                <li>{name}</li>
            );
		});
	}
	render() {
        return (
            <div id="main">
				<div id="content">
					<section>
						<div className="container">
							<h2>Services</h2>
							<ul>{this.renderContent()}</ul>
						</div>
					</section>
				</div>
			</div>
        );
    }
}

export default Services;