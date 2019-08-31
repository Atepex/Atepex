import React from 'react';
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



function getImage(id) {
    switch(id) {
        case 1: return img1;
        case 2: return img2;
        default: return img3;
    }
}  


export default ({ input, id, label, cImage, cText, forward, btnTxt, size}) => {
	return (
		<div class="col s9 m9 l4 xl4">
				<div className="card blue darken-1 white-text" key={id}>
                    <div className="card-image">
                        <img style={imgStyle} src={getImage(id)} />
                    </div>
					<div className="card-content">
						<span className="card-title">{label}</span>
						<p>{cText}</p>
                        <a href={forward} className="red darken-1 waves-effect waves-light btn">{btnTxt}</a>
					</div>
				</div>
                </div>
	);
};
