import React, { Component } from "react";
import Files from "react-files";
import upImg from "../../../images/upload.png";
import pdf from "../../../images/invoice_652.pdf";
import axios from "axios";

const upStyle = {
  border: "1px solid #ccc",
  borderRadius: "16px"
};

async function SaveInvoice(arrayBuffer, invoiceID, userID) {
  const invoiceDate = new Date();
  var buffer = new Buffer(arrayBuffer);
  var url = buffer.toString("base64");
  await axios.post("/api/addinvoice", {
    arrayBuffer,
    invoiceID,
    userID,
    invoiceDate,
    url
  });
 
}

class Uploader extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      file: "",
      userID: ""
    };

    this.onFilesChange = this.onFilesChange.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({ userID: props.user });
  }

  onFilesChange(files) {
  
    const userID = this.state.userID;
    if (userID === "") {
      alert("You must first select a client");
      return;
    }

    let reader = new FileReader();
    let file = files[files.length - 1];
    const start = file.name.indexOf("_");
    const end = file.name.indexOf(".pdf");
    if (start < 0 || end < 0) {
      alert(
        "Unable to find invoice id. Please rename the file to invoice_(id).pdf. Please replace (id) with the invoice id."
      );
      return;
    }
    var invoiceID = file.name.substring(start + 1, end);
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      var arrayBuffer = reader.result;
      SaveInvoice(arrayBuffer, invoiceID, this.state.userID).then(() => {
        this.props.parentCallback('true');
      });


    };
  }

  onFilesError(err) {
    alert("Unable to Upload Invoice");
  }
  onClick() {
    window.open(pdf);
  }
  render() {
    return (
      <div className="files" style={upStyle}>
        <Files
          className="files-dropzone"
          onChange={this.onFilesChange}
          onError={this.onFilesError}
          accepts={[".pdf"]}
          multiple
          maxFiles={3}
          maxFileSize={1000000000}
          minFileSize={0}
          clickable
        >
          <img alt="upload" src={upImg} />
          Drop invoice file here or click to upload
        </Files>
      </div>
    );
  }
}

export default Uploader;
