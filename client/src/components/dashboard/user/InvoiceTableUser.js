import _ from "lodash";
import React, { Component } from "react";
import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import axios from "axios";
import viewImg from "../../../images/view.png";

const imgStyle = {
  maxWidth: "38px",
  maxHeight: "38px",
  padding: "5px"
};

const viewStyle = {
  maxWidth: "38px",
  maxHeight: "38px",
  padding: "5px"
};

const inputStyle = {
  border: "none",
  backgroundColor: "transparent"
};

const idStyle = {
  maxWidth: "35%",
  border: "none",
  backgroundColor: "transparent"
};

class InvoiceTableUser extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      userID: "",
      invoices: {},
      editInvoice: false,
      changedInvoice: false,
      rowID: "",
      rowInvoiceID: "",
      rowInvoiceDesc: "",
      rowInvoiceData: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  }

  componentWillReceiveProps(props) {
    console.log('props ' + props.refresh);
    this.setState({ userID: props.user });
    const _id = props.user;
    this.getInvoices(_id);
  }

  onRowClick(id) {
    const b = this.getInvoice(id).url;
    var buf = new Buffer(b, 'base64');
    var blob = new Blob([buf], { type: 'application/pdf' });
    var url = URL.createObjectURL(blob);
    window.open(url);
    
  }
  async getInvoices(_id) {
    await axios
      .post("/api/getinvoices", {
        _id
      })
      .then(res => {
        this.setState({ invoices: res.data });
      });
  }

  getInvoice(_id) {
    return this.state.invoices.find(function(element) {
      if (element._id === _id) {
        return element;
      }
      return false;
    });
  }

  renderBody() {
    const { invoices, editInvoice, rowID } = this.state;
    return _.map(invoices, ({ _id, invoiceID, invoiceDate, invoiceDesc }) => {
      const ro = editInvoice && rowID === _id;
      const d = new Date(invoiceDate).toLocaleDateString('en-US');
      return (
        <tr key={_id}>
          <td>{this.renderActions(_id)}</td>
          <td>
            <input
              style={idStyle}
              readOnly
              type="text"
              name="rowInvoiceID"
              onChange={this.handleChange}
              defaultValue={invoiceID}
            />
          </td>
          <td>{d}</td>
          <td>
            <input
              style={inputStyle}
              readOnly={!ro}
              type="text"
              name="rowInvoiceDesc"
              onChange={this.handleChange}
              defaultValue={invoiceDesc}
            />
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <Table striped hover size="sm" responsive>
        <thead>
          <tr>
            <th></th>
            <th>Invoice ID</th>
            <th>Invoice Date</th>
            <th>Invoice Description</th>
          </tr>
        </thead>
        <tbody>{this.renderBody()}</tbody>
      </Table>
    );
  }
}

export default InvoiceTableUser;