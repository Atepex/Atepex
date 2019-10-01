import _ from "lodash";
import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import ClientList from './ClientItems';

class Clients extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
        this.state = { value: '' };
    }

    handleChange(event) {
        console.log('select ' + event.target.value);
        this.setState({ value: event.target.value.toLowerCase().trim()});
        alert('You selected ' + this.state.value);
    }

    renderItems() {
        return _.map(ClientList, ({ id, FirstName, LastName }) => {
            return <Dropdown.Item onChange={this.handleChange} key={id} value={id} eventKey={id}>{FirstName + ' ' + LastName}</Dropdown.Item>;
        });
    }

    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle>
                    Select Client
                </Dropdown.Toggle>
                <Dropdown.Menu onChange={this.handleChange}>
                   {this.renderItems()}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

export default Clients;