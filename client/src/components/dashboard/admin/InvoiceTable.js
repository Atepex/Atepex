import _ from 'lodash';
import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import deleteImg from '../../../images/delete.png'
import viewImg from '../../../images/view.png';

const vals = [
  {id: '1', date: '04/01/2019', desc: 'Fixed AC'},
  {id: '2', date: '07/01/2019', desc: 'Heater Tune Up'},
  {id: '3', date: '10/01/2019', desc: 'Fixed Heating'}     
]

const imgStyle = {
  maxWidth: '42%',
  maxHeight: '42%',
  padding: '5px'
};

const viewStyle = {
  maxWidth: '45%',
  maxHeight: '45%',
  padding: '5px'
};



class InvoiceTable extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      userID: "",
      invoices: {},
    };
  }
  

  componentWillReceiveProps(props) {
    this.setState({ userID: props.user });
    const _id = props.user;
    this.getInvoices(_id);
  }

  async getInvoices(_id) {
    await axios.post("/api/getinvoices", {
      _id
   }).then(res => {
     this.setState({invoices: res.data});
   })
  }

  renderBody() {
    const { invoices } = this.state;
    return _.map(invoices, ({_id, invoiceID, invoiceDate, invoiceDesc }) => {
			return (
               <tr>
                 <td>
                 <img src={viewImg} style={viewStyle} onClick={() => this.onRowClick(_id)}/>
                  <img src={deleteImg} style={imgStyle} onClick={() => this.onRowClickDelete(_id)}/>
                 </td>
                 <td>{invoiceID}</td>
                 <td>{invoiceDate}</td>
                 <td>{invoiceDesc}</td>
               </tr>
            );
		});
  }
  onRowClickDelete(_id) {
    var answer = window.confirm("Are you sure you want to delete this invoice?");
    if (!answer) {
      return;
    }

    axios.post("/api/deleteinvoice", {
        _id
    })
    .catch(err => {
      alert('Unable to delete invoice');
      return;
    })

    this.getInvoices(this.state.userID);
  }

  onRowClick(id) {
    alert('view ' + id);
   
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
        <tbody>
         {this.renderBody()}
        </tbody>
      </Table>
    );
  }
}

export default InvoiceTable;
