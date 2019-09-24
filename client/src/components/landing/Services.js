import _ from 'lodash';
import React, { Component } from 'react';

const reServ = [
	{item: 'AC Repair'},
	{item: 'Ductwork Replacement'},
	{item: 'Furnace Repair'},
	{item: 'Heat Pump Repair'},
	{item: 'Water Heater Replacement'}
]
const maServ = [
	{item: 'AC Maintanance'},
	{item: 'Maintanance Contracts'},
	{item: 'Furnace Maintanance'},
	{item: 'Heat Pump Maintanance'}
]
const inServ = [
	{item: 'AC Installation'},
	{item: 'Furnance Installation'},
	{item: 'Heat Pump Installation'},
	{item: 'Thermostat Installation'}
]

class Services extends Component {
	renderContentRe()
	{
		return _.map(reServ, ({item}) => {
			return (
				<li>{item}</li>	
			);
		});
	}
	renderContentMa()
	{
		return _.map(maServ, ({item}) => {
			return (
				<li>{item}</li>	
			);
		});
	}
	renderContentIn()
	{
		return _.map(inServ, ({item}) => {
			return (
				<li>{item}</li>	
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
							<p></p>
							<div>
								<h3>Repair & Replacement</h3>
								<l>{this.renderContentRe()}</l>
							</div>
							<p></p>
							<div>
								<h3>Maintenance</h3>
								<l>{this.renderContentMa()}</l>
							</div>
							<p></p>
							<div>
								<h3>Installation</h3>
								<l>{this.renderContentIn()}</l>
							</div>
						</div>
					</section>
				</div>
			</div>
        );
    }
}

export default Services;