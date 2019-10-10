import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Clients from './Clients';
import ClientForm from './ClientForm';

class ViewClients extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            userID: 1
        };
    }

    callbackFunction = (data) => {
        this.setState({userID: data})
    }

    render() {
        return (
            <>
                <section>
                    <div className="container">
                        <Row>
                            <Col md={3} lg={3} xl={3}>
                                <h3>Clients</h3>
                                <Clients parentCallback={this.callbackFunction} />
                                <br />
                            </Col>
                            <Col  md={8} lg={8} xl={8}>
                                <ClientForm user={this.state.userID} />
                            </Col> 
                        </Row>
                    </div>
                </section>
            </>
        )
    }
}

export default ViewClients;