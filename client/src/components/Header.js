import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../images/logo.png";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/app.css";
import { SocialIcon } from "react-social-icons";

const imgStyle = {
  height: "30px",
  width: "30px",
  marginRight: "5px"
};

class Header extends Component {
  renderContent() {
    console.log("header auth " + this.props.auth);
    switch (this.props.auth) {
      case null:
      case false:
        return [
          <Nav.Link href="/auth/google">
            <SocialIcon network="google" style={imgStyle} />
            Login With Google
          </Nav.Link>
        ];
      default:
        return [
          <Nav.Link key="6" href="/Dashboard">
            Dashboard
          </Nav.Link>,
          <Nav.Link key="6" href="/api/logout">
            Logout
          </Nav.Link>
        ];
    }
  }
  render() {
    return (
      <Navbar fixed="top" bg="lt" expand="lg">
        <Navbar.Brand href="/">
          <img className="logo" alt="logo" src={logo} />
          <h5 className="name">VAUGHN'S A/C &amp; HEATING</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link key="1" href="/">
              Home
            </Nav.Link>
            <Nav.Link key="2" href="/Services">
              Services
            </Nav.Link>
            <Nav.Link key="3" href="/ContactUs">
              Contact Us
            </Nav.Link>
            <Nav.Link key="4" href="/AboutUs">
              About Us
            </Nav.Link>
            {this.renderContent()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
