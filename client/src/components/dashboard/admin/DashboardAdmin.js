import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import ViewClients from "./ViewClients";
import EmailClients from './EmailClients';
import UploadImage from './UploadImage';

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
            <Tab eventKey="uploadImage" title="Upload Image">
              <UploadImage />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default DashboardAdmin;
