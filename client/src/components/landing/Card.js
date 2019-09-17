import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import img1 from '../../images/photo1.jpg';
import img2 from '../../images/photo2.jpg';
import img3 from '../../images/photo3.jpeg';

const imgStyle = {
    display: 'block',
    margin: '0 auto',
    width: '50%',
    height: 'auto',
    borderRadius: '50%',
    align: 'center',
    padding: '20px'
};

const cardStyle = {
    width: 'auto'
};

function getImage(id) {
    switch(id) {
        case 1: return img1;
        case 2: return img2;
        default: return img3;
    }
}  


export default ({ input, id, label, cImage, cText, forward, btnTxt, size}) => {
   return (
        <Col sm={9} md={8} lg={4} xl={4}>
            <Card bg="primary" text="white" style={cardStyle} key={id}>
                <Card.Img variant="top" style={imgStyle} src={getImage(id)} />
                <Card.Body>
                    <Card.Title>{label}</Card.Title>
                    <Card.Text>{cText}</Card.Text>
                    <Button variant="danger" href={forward}>{btnTxt}</Button>
                </Card.Body>
                </Card>
        </Col>
   );
};
