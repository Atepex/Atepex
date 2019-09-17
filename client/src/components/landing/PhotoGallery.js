import _ from 'lodash'
import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photoObjFields from './photoObjFields';

 

const imgStyle = {
    display: 'block',
    margin: '0 auto',
    width: '40%',
    height: 'auto',
    align: 'center',
};

const headerStyle = {
    color: 'red',
    fontFamily: 'Yatra'    
}


class PhotoGallery extends Component {
    renderFields() {
		return _.map(photoObjFields, ({ id, label, imgSrc }) => {
			return (
                <div key={id}><img key={id} style={imgStyle} src={imgSrc} />{label}</div>
            );
		});
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        
        return (
            <div>
                <h2 style={headerStyle}>PHOTO GALLERY</h2>
                <Slider {...settings}>
                    {this.renderFields()}
                </Slider>
            </div>
              
        );
    }
}


export default PhotoGallery;