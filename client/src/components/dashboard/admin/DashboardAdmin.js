import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import ViewClients from "./ViewClients";

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
              <h3>Email Clients</h3>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default DashboardAdmin;
