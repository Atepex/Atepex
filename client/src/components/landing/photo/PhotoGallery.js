import _ from "lodash";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getImages } from "./photoObjFields";
import { Spinner } from "react-bootstrap";

const imgStyle = {
  display: "block",
  margin: "0 auto",
  width: "40%",
  height: "auto",
  align: "center"
};

const headerStyle = {
  color: "red",
  fontFamily: "Yatra"
};

class PhotoGallery extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      images: {}
    };
  }
  componentWillMount() {
    getImages().then(data => {
      this.setState({ images: data });
    });
  }
  renderFields() {
    const { images } = this.state;
    console.log(images);
    return _.map(images, ({ _id, description, url, type }) => {
      var buf = new Buffer(url, "base64");
      var blob = new Blob([buf], { type: type });
      var imgSrc = URL.createObjectURL(blob);
      console.log(imgSrc);
      return (
        <div key={_id}>
          <img alt={_id} key={_id} style={imgStyle} src={imgSrc} />
          {description}
        </div>
      );
    });
  }

  renderBody() {
    const {images} = this.state;
    const loaded = images !== undefined && images.length > 0;
    
    if (loaded) {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <Slider {...settings}>{this.renderFields()}</Slider>
        );
    }

    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  render() {
    

    return (
      <div>
        <h2 style={headerStyle}>PHOTO GALLERY</h2>
        {this.renderBody()}
      </div>
    );
  }
}

export default PhotoGallery;
