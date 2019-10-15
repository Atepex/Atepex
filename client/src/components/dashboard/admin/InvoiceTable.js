import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from 'axios';

class InvoiceTable extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            userID: "",
            invoices: {}
        };
    }
    componentWillReceiveProps(props) {
        this.setState({userID: props.user});
    }

  render() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Invoice Date</th>
            <th>Invoice Description</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
            </tr>
        </tbody>
      </Table>
    );
  }
}

export default InvoiceTable;
