import _ from 'lodash';
import React, { Component } from 'react';
const serv = [
	{name: 'Repair & Replacement'},
	{name: 'Text 2'},
	{name: 'Text 3'}
]

const miniServ = [
	{item: 'Text 1'},
	{item: 'Text 2'},
	{item: 'Text 3'}
]

class Services extends Component {
	renderContent()
	{
		return _.map(serv, ({name}) => {
			return (
				<h3>{name}</h3>
			);
			return (
				<li>{miniServ[serv]}</li>
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