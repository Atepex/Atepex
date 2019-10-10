import _ from "lodash";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

const reServ = [
  { item: "AC Repair" },
  { item: "Ductwork Replacement" },
  { item: "Furnace Repair" },
  { item: "Heat Pump Repair" },
  { item: "Water Heater Replacement" }
];
const maServ = [
  { item: "AC Maintanance" },
  { item: "Maintanance Contracts" },
  { item: "Furnace Maintanance" },
  { item: "Heat Pump Maintanance" }
];
const inServ = [
  { item: "AC Installation" },
  { item: "Furnance Installation" },
  { item: "Heat Pump Installation" },
  { item: "Thermostat Installation" }
];

const s = {
	textAlign: 'left'
};
class Services extends Component {
  renderContentRe() {
    return _.map(reServ, ({ item }) => {
      return <li style={s}>{item}</li>;
    });
  }
  renderContentMa() {
    return _.map(maServ, ({ item }) => {
      return <li style={s}>{item}</li>;
    });
  }
  renderContentIn() {
    return _.map(inServ, ({ item }) => {
      return <li style={s}>{item}</li>;
    });
  }
  render() {
    return (
      <div id="main">
        <div id="content">
          <section>
            <div className="container">
              <h2>Services</h2>
              <br />
              <Row>
                <Col sm={8} md={4}>
                  <div>
                    <h3 style={s}>Repair &amp; Replacement</h3>
                    <ul>{this.renderContentRe()}</ul>
                  </div>
                </Col>
                <br />
                <Col sm={8} md={4}>
                  <div>
                    <h3 style={s}>Maintenance</h3>
                    <ul>{this.renderContentMa()}</ul>
                  </div>
                </Col>
                <br />
                <Col sm={8} md={4}>
                  <div>
                    <h3 style={s}>Installation</h3>
                    <ul>{this.renderContentIn()}</ul>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Services);
