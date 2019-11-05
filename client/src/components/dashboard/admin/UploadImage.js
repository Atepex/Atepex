import React, { Component } from "react";
import Files from "react-files";
import upImg from "../../../images/upload.png";
import axios from "axios";
import ImageCard from "./ImageCard";
import _ from "lodash";
import { CardDeck, Row } from "react-bootstrap";

const upStyle = {
  border: "1px solid #ccc",
  borderRadius: "16px"
};

const cardsStyle = {
  padding: "1.5%",
};

async function SaveImage(arrayBuffer, imgType) {
  var buffer = new Buffer(arrayBuffer);
  const url = buffer.toString("base64");
  const type = `image/${imgType}`;
  await axios.post("/api/addimage", {
    url,
    type
  });
}

async function DeleteImage(_id) {
    await axios.post("/api/deleteimage", {
        _id
    });
}

class UploadImage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      images: {},
      isLoaded: false
    };
    this.onFilesChange = this.onFilesChange.bind(this);
    this.deleteImageCallback = this.deleteImageCallback.bind(this);
  }

  componentWillMount() {
    this.getImages();
  }

  async getImages() {
    await axios.get("/api/getimages").then(res => {
      this.setState({ images: res.data });
      this.setState({ isLoaded: true });
    });
  }


deleteImageCallback(_id) {
    var answer = window.confirm(
        "Are you sure you want to delete this image?"
      );
      if (!answer) {
        return;
      }

     DeleteImage(_id).then(() => {
         this.refresh();
     });
  }

  refresh() {
      this.getImages().then(() => {
          this.render();
      })
  }


  onFilesChange(files) {
    let reader = new FileReader();
    let file = files[files.length - 1];
    const end = file.name.indexOf(".");
    const imgType = file.name.substring(end + 1);
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      var arrayBuffer = reader.result;
      SaveImage(arrayBuffer, imgType).then(() => {
         this.refresh();
      });
    };
  }

  renderImageFields() {
    const { images, isLoaded, refresh } = this.state;
    if (isLoaded) {
      return _.map(images, ({ _id, url, type, description }) => {
        const image = images[0];
        var buf = new Buffer(url, "base64");
        var blob = new Blob([buf], { type: type });
        var src = URL.createObjectURL(blob);
        return (
          <ImageCard parentCallback={this.deleteImageCallback} key={_id} _id={_id} url={src} description={description} />
        );
      });
    }
    return (
      <div>
        
      </div>
    );
  }

  renderImages() {
    return (
      <Row sm={8} md={8} lg={4} xl={4} style={cardsStyle}>
        {this.renderImageFields()}
      </Row>
    );
  }
  render() {
    return (
      <>
        <div className="files" style={upStyle}>
          <Files
            className="files-dropzone"
            onChange={this.onFilesChange}
            onError={this.onFilesError}
            multiple
            maxFiles={3}
            maxFileSize={1000000000}
            minFileSize={0}
            clickable
          >
            <img alt="upload" src={upImg} />
            Drop image here or click to upload
          </Files>
        </div>
        <div>{this.renderImages()}</div>
      </>
    );
  }
}

export default UploadImage;
