import React, { Component } from "react";

const linkStyle = {
    color: 'black'
};

class InvalidPage extends Component {
  render() {
    return (
      <div id="main">
        <div id="content">
          <section>
            <div className="container">
              <h2>Invalid Page</h2>
              <a style={linkStyle} href="/">Please click here to return</a>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default InvalidPage;
