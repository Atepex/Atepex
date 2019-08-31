import _ from 'lodash';
import React, { Component } from 'react';
import cardFields from './cardFields';
import Card from './Card';
import img1 from '../../images/photo3.jpeg';

const cardsStyle = {
    display: '-webkit-flex',
	display: 'flex',
	webkitJustifyContent: 'center',
	justifyContent: 'center',
	webkitFlexWrap: 'wrap',
	flexWrap: 'wrap',
	marginTop: '15px',
	padding: '1.5%',
	webkitBoxSizing: 'border-box',
	mozBoxSizing: 'border-box',
	boxSizing: 'border-box'
};

class Cards extends Component {
    getScreenSize() {
        console.log('width ' + window.innerWidth );
        return window.innerWidth;
    }
    renderFields() {
		return _.map(cardFields, ({ id, label, cImage, cText, forward, btnTxt }) => {
			return (
                <Card key={id} id={id} label={label} cImage={cImage} cText={cText} forward={forward} btnTxt={btnTxt} size={this.getScreenSize()}/>
            );
		});
    }
    
    
	render() {
		return (
                
                <div  className="row">
                    {this.renderFields()}
                </div>
		);
	}
}

export default Cards;
