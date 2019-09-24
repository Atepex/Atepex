import _ from 'lodash';
import React, { Component } from 'react';
import cardFields from './cardFields';
import Card from './Card';
import { CardDeck, } from 'react-bootstrap';

const cardsStyle = {
    display: '-webkit-flex',
	WebkitJustifyContent: 'center',
	justifyContent: 'center',
	WebkitFlexWrap: 'wrap',
	flexWrap: 'wrap',
	marginTop: '15px',
	padding: '1.5%',
	WebkitBoxSizing: 'border-box',
	MozBoxSizing: 'border-box',
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
					<CardDeck style={cardsStyle}>
							{this.renderFields()}
					</CardDeck>
                </div>
		);
	}
}

export default Cards;
