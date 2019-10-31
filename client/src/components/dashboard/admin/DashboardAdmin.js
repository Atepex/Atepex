import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import ViewClients from "./ViewClients";
import EmailClients from './EmailClients';

class DashboardAdmin extends Component {
  render() {
    return (
      <div id="main">
        <div id="content">
          <Tabs defaultActiveKey="viewClients">
            <Tab eventKey="viewClients" title="View Clients">
              <ViewClients />
            </Tab>
            <Tab eventKey="emailClients" title="Email Clients">
              <EmailClients />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default DashboardAdmin;
