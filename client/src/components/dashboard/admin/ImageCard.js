import React, { Component } from "react";
import axios from 'axios';
import {
  Figure,
  Col,
  Button,
  Image,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import deleteImg from "../../../images/delete.png";
import viewImg from "../../../images/view.png";
import editImg from "../../../images/edit.png";
import saveImg from "../../../images/save.png";

const imgStyle = {
  display: "block",
  margin: "0 auto",
  height: "70%",
  width: "70%",
  align: "center",
  padding: "20px"
};

const delStyle = {
  maxWidth: "38px",
  maxHeight: "38px",
  padding: "5px"
};

const viewStyle = {
  maxWidth: "38px",
  maxHeight: "38px",
  padding: "5px"
};

const editStyle = {
  maxWidth: "30px",
  maxHeight: "30px"
};

const saveStyle = {
  maxHeight: "30px",
  maxWidth: "30px"
};

const cardStyle = {
  width: "40%",
  height: "50%",
  margin: "10px"
};

const footerStyle = {
  padding: "5px"
};

class ImageCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      _id: props._id,
      url: props.url,
      description: props.description,
      edit: false
    };

    this.onEditClick = this.onEditClick.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onEditClick() {
    this.setState({ edit: !this.state.edit });
    this.render();
  }

  onSaveClick() {
    const { _id, description } = this.state;
    axios.post("/api/modifyimage", {
        _id,
        description
    });


    this.setState({ edit: false });
  }

  async onDeleteClick() {
    var answer = window.confirm(
      "Are you sure you want to delete this image?"
    );
    if (!answer) {
      return;
    }
    
    const { _id } = this.state; 
    await axios.post("/api/deleteimage", {
        _id
    }).then(() => {
        console.log('call parent');
        this.props.parentCallback();
    });
    this.props.parentCallback();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  renderActions() {
    if (this.state.edit) {
      return (
        <>
          <OverlayTrigger
            key="1"
            placement="top"
            overlay={<Tooltip>Save Changes</Tooltip>}
          >
            <img
              alt="save-img"
              src={saveImg}
              style={saveStyle}
              onClick={() => this.onSaveClick()}
            />
          </OverlayTrigger>
          <OverlayTrigger
            key="6"
            placement="top"
            overlay={<Tooltip>Delete Image</Tooltip>}
          >
            <img
              alt="delete-img"
              src={deleteImg}
              style={delStyle}
              onClick={() => this.props.parentCallback(this.state._id)}
            />
          </OverlayTrigger>
        </>
      );
    }

    return (
      <>
        <OverlayTrigger
          key="4"
          placement="top"
          overlay={<Tooltip>Edit Description</Tooltip>}
        >
          <img
            alt="edit-img"
            src={editImg}
            style={editStyle}
            onClick={() => this.onEditClick()}
          />
        </OverlayTrigger>
        <OverlayTrigger
          key="6"
          placement="top"
          overlay={<Tooltip>Delete Image</Tooltip>}
        >
          <img
            alt="delete-img"
            src={deleteImg}
            style={delStyle}
            onClick={() => this.props.parentCallback(this.state._id)}
          />
        </OverlayTrigger>
      </>
    );
  }
  render() {
    const { _id, url, description, edit } = this.state;

    return (
      <Col sm={4} md={4} lg={4} xl={4}>
        <Figure key={_id}>
          <Figure.Image
            width={250}
            height={300}
            alt="img"
            src={url}
            key={_id}
          />
          <Figure.Caption>
            <textarea
              rows="1"
              name="description"
              placeholder="Description"
              readOnly={!edit}
              value={description}
              onChange={this.handleChange}
              style={{width: '250px'}}
            />
            <br/>
            {this.renderActions()}
          </Figure.Caption>
        </Figure>
      </Col>
    );
  }
}

export default ImageCard;
