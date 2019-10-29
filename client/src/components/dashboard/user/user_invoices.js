import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { Table } from "react-bootstrap";
import _ from "lodash";


const inputStyle = {
    border: "none",
    backgroundColor: "transparent"
  };
  
  const idStyle = {
    maxWidth: "35%",
    border: "none",
    backgroundColor: "transparent"
  };

class User_invoices extends Component {

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
        this.setState({ userID: props.auth });
        const _id = props.auth._id;
        this.getInvoices(_id);
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

    
      renderBody() {
        const { invoices} = this.state;
        return _.map(invoices, ({ _id, invoiceID, invoiceDate, invoiceDesc }) => {
            const d = new Date(invoiceDate).toLocaleDateString('en-US');

          return (
            <tr >
              <td>
                <input
                  style={idStyle}
                  readOnly
                  type="text"
                  name="rowInvoiceID"
                  defaultValue={invoiceID}
                />
              </td>
              <td>{d}</td>
              <td>
                <input
                  style={inputStyle}
                  readOnly
                  type="text"
                  name="rowInvoiceDesc"
                  defaultValue={invoiceDesc}
                />
              </td>
            </tr>
          );
        });
      }

      
    render() {

        return (
            <div>
                <Table striped hover size="sm" responsive>
                    <thead>
                        <tr>
                            <th>InvoiceID</th>
                            <th>Invoice Date</th>
                            <th>Invoice Description</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderBody()}</tbody>
                    
                </Table>
            </div>
        )

    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(User_invoices);