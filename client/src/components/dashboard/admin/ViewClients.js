import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Clients from './Clients';

class ViewClients extends Component {
    render() {
        return (
            <>
                <section>
                    <div className="container">
                        <h3>Clients</h3>
                        <Clients />
                    </div>
                </section>
            </>
        )
    }
}

export default ViewClients;