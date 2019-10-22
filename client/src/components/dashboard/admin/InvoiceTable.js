import _ from "lodash";
import React, { Component } from "react";
import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import axios from "axios";
import deleteImg from "../../../images/delete.png";
import viewImg from "../../../images/view.png";
import editImg from "../../../images/edit.png";
import saveImg from "../../../images/save.png";

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

const editStyle = {
  maxWidth: "30px",
  maxHeight: "30px"
};

const saveStyle = {
  maxHeight: "30px",
  maxWidth: "30px"
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

class InvoiceTable extends Component {
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
  onRowClickDelete(_id) {
    var answer = window.confirm(
      "Are you sure you want to delete this invoice?"
    );
    if (!answer) {
      return;
    }

    axios.post("/api/deleteinvoice", {
      _id
    });

    this.getInvoices(this.state.userID);
  }


  onRowClick(id) {
    const b = this.getInvoice(id).url;
    var buf = new Buffer(b, 'base64');
    var blob = new Blob([buf], { type: 'application/pdf' });
    var url = URL.createObjectURL(blob);
    window.open(url);
    
  }

  onRowEditClick(id) {
  
    this.setState({ rowID: id });
    this.setState({ rowInvoiceID: this.getInvoice(id).invoiceID });
    this.setState({ rowInvoiceDesc: this.getInvoice(id).invoiceDesc });
    this.setState({ rowInvoiceData: this.getInvoice(id).invoiceData});
    this.setState({ editInvoice: !this.state.editInvoice });
    this.render();
  }

   onRowSaveClick(_id) {
    const invoiceID = this.state.rowInvoiceID;
    const invoiceDesc = this.state.rowInvoiceDesc;
    
     axios.post("/api/modifyinvoice", {
      _id, 
      invoiceID,
      invoiceDesc
    }).catch(err => {
      alert('Unable to save changes');
    })


    this.getInvoices(this.state.userID);
    this.setState({ editInvoice: false });
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

  renderActions(_id) {
    if (this.state.editInvoice && this.state.rowID === _id) {
      return (
        <>
          <OverlayTrigger
            key="1"
            placement="top"
            overlay={<Tooltip>Save Changes</Tooltip>}
          >
            <img
              alt="save-img"
              src={saveImg}
              style={saveStyle}
              onClick={() => this.onRowSaveClick(_id)}
            />
          </OverlayTrigger>
          <OverlayTrigger
            key="2"
            placement="top"
            overlay={<Tooltip>View Invoice</Tooltip>}
          >
            <img
              alt="view-img"
              src={viewImg}
              style={viewStyle}
              onClick={() => this.onRowClick(_id)}
            />
          </OverlayTrigger>
          <OverlayTrigger
            key="3"
            placement="top"
            overlay={<Tooltip>Delete Invoice</Tooltip>}
          >
            <img
              alt="delete-img"
              src={deleteImg}
              style={imgStyle}
              onClick={() => this.onRowClickDelete(_id)}
            />
          </OverlayTrigger>
        </>
      );
    }

    return (
      <>
        <OverlayTrigger
          key="4"
          placement="top"
          overlay={<Tooltip>Edit Invoice</Tooltip>}
        >
          <img
            alt="edit-img"
            src={editImg}
            style={editStyle}
            onClick={() => this.onRowEditClick(_id)}
          />
        </OverlayTrigger>
        <OverlayTrigger
          key="5"
          placement="top"
          overlay={<Tooltip>View Invoice</Tooltip>}
        >
          <img
            alt="view-img"
            src={viewImg}
            style={viewStyle}
            onClick={() => this.onRowClick(_id)}
          />
        </OverlayTrigger>
        <OverlayTrigger
          key="6"
          placement="top"
          overlay={<Tooltip>Delete Invoice</Tooltip>}
        >
          <img
            alt="delete-img"
            src={deleteImg}
            style={imgStyle}
            onClick={() => this.onRowClickDelete(_id)}
          />
        </OverlayTrigger>
      </>
    );
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

export default InvoiceTable;
