import React, { Component } from 'react'
import axios from 'axios'

class User_invoices extends Component {

    constructor(props) {
        super(props);
        this.state = {
            body: ''
        };
    }
    getInvoices() {
        axios.get('/api/user_invoice')
            .then(res => {
                this.state.body = res.data;
            })
            .catch(err => {
                console.log(err)
            })
            console.log(this.state.body)

    }


    render() {
        
        return (
            <div>
                {this.getInvoices()}
                {<div>{JSON.stringify(this.state.body)}</div>}
            </div>
        )

    }
}
export default User_invoices;

