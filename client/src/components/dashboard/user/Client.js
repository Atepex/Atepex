import _ from "lodash";
import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { postClients } from './ClientGetting';

class Client extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);
        this.state = { value: '', toggleValue: 0, clients: [] };
    }

    componentDidMount() {
        postClients().then(val => {
            this.setState({clients: val.sort((a,b) => a.firstName.localeCompare(b.firstName))});
        })
        
    }
    handleSelect(event) {
        //this.setState({ value: event.target.value});
        this.setState({toggleValue: event});
        this.props.parentCallback(event);
    }

    renderItems() {
        return (({ _id, firstName, lastName }) => {
            return <Dropdown.Item onSelect={this.handleSelect} key={_id} value={_id} eventKey={_id}>{firstName + ' ' + lastName}</Dropdown.Item>;
        });
    }

    renderValue() {
        const idx = this.state.toggleValue;
        const client = this.postClient(idx);
        const name = client ? client.firstName + ' ' + client.lastName : "Select Client";
        return name;
    }
    
    postClient(userID) {
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

export default Client;