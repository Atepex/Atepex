import _ from "lodash";
import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { getClients } from './ClientList';

class Clients extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);
        this.state = { value: '', toggleValue: 0, clients: [] };
    }

    componentDidMount() {
        getClients().then(val => {
            this.setState({clients: val});
        })
        
    }
    handleSelect(event) {
        //this.setState({ value: event.target.value});
        this.setState({toggleValue: event});
        this.props.parentCallback(event);
    }

    renderItems() {
        return _.map(this.state.clients, ({ _id, firstName, lastName }) => {
            return <Dropdown.Item onSelect={this.handleSelect} key={_id} value={_id} eventKey={_id}>{firstName + ' ' + lastName}</Dropdown.Item>;
        });
    }

    renderValue() {
        const idx = this.state.toggleValue;
        const client = this.getClient(idx);
        const name = client ? client.firstName + ' ' + client.lastName : "Select Client";
        return name;
    }
    
    getClient(userID) {
        return this.state.clients.find(function(element) {
            if (element._id === userID) {
                return element;
            }
            return false;
        })
    }
   
    render() {
        return (
            <>
            <Dropdown>
                <Dropdown.Toggle>
                    {this.renderValue()}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                   {this.renderItems()}
                </Dropdown.Menu>
            </Dropdown>
            </>
        )
    }
}

export default Clients;