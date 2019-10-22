import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';

class User_invoices extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
        };
    }
    getInvoices() {
    

             
    }


    render() {

        return (
            <div>
                {this.getInvoices()}
            </div>
        )

    }
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(User_invoices);